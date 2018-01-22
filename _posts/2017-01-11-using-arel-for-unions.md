---
layout: post
title:  "Sorting between multiple Models in Ruby on Rails"
date:   2017-01-12 00:01:00
categories: tutorials
---

Recently, I ran into a situation where I had two different Models where I needed to display both types of records in chronological order. We could grab all the records, and apply a simple sort.

```ruby
  comments = Comment.active.to_ary
  posts = Post.active.to_ary

  # Combine them together and sort.
  comments_and_posts = comments + posts
  comments_and_posts.sort! { |a, b| a.created_at <=> b.created_at }

  # Use Kaminari to paginate across
  results = Kaminari.paginate(comments_and_posts).page(params[:page])
```

While this is easy to read and understand, this is problematic as Comments and Posts grows. This method would require grabbing all the records before applying a sorted order. Pagination is also affected poorly, since we still need to grab both entire sets of records.

We can leverage the database to handle the sorting for us, but Rails does not have a pretty ORM way in the documentation to perform this kind of operation. We can use plain SQL.

## Raw SQL Union

We use the UNION operator in SQL to combine both records together, then select from a subquery.


Since there is a possibility that ids are shared between the models, we need to generate a `unique_id` in these queries.

```sql

SELECT id, group_type, unique_id, created_at
FROM (
  SELECT id,
        'comments' group_type,
        CONCAT('comments', id) as unique_id,
        created_at
  FROM comments
  WHERE active = 1

  UNION

  SELECT id,
         'posts' group_type,
         CONCAT('posts', id) as unique_id,
         created_at
  FROM posts
  WHERE active = 1
) as results

ORDER BY created_at desc
--LIMIT 25 OFFSET 200
```

We can add a `LIMIT` and `OFFSET` to use as pagination. Using a raw SQL query, we can pull out the information easily.

```ruby
@connection = ActiveRecord::Base.connection
result = @connection.exec_query(sql_query)
comments_and_posts = []

result.each do |row|
  comments_and_posts << row
end
```

While we can go through each row in comments and posts and find by ID, that would give us about 25 additional queries. We can do a little extra work to reduce the amount of queries down to 2.


```ruby
# Store their order in the array.
id_positions = comments_and_posts.map { |x| x['unique_id'] }

items = comments_and_posts.group_by { |x| x['group_type'] }
items.each do |group_type, item|

  # Get only the ids to reduce amount of queries needed
  ids = item.collect { |x| x['id'] }

  if group_type == 'posts'
    content_items = Post.where(id: ids).to_ary
  elsif group_type == 'comments'
    content_items = Comment.where(id: ids).to_ary
  end

  # Replace original search with new searched content
  content_items.each do |content|
    unique_id = group_type + content.id.to_s
    content_index = id_positions.index(unique_id)
    comments_and_posts[content_index] = content
  end
end

comments_and_posts
```

## Drawbacks to Raw SQL

By diving into Raw SQL, we have direct control of what to query. For smaller queries, this is manageable.

We lose some key features, like scopes. Scopes are composable, and simplifies our understanding of queries. We would have to maintain a separate set of queries if we decide to add filtering.

Raw SQL is also reliant on having a specific flavor of SQL. If we decide to switch MySQL to Postgres, some queries would change and break.

## Using Arel to access existing scopes

We're looking to use ActiveRecord's Arel, to improve our codebases readability. Note: Since this is a private API, it may change without warning. It is expected that Arel becomes part of public API in Rails 5.1.

We can replace the raw SQL using Arel as a Query Builder. For ActiveRecord::Relation query, we can call `.arel` to drop into Arel.

## Rewriting SQL into Arel Components
Since Arel is used to build queries only, we'll end up transforming the resulting query builder to a SQL String with `.to_sql`.

So we're going to create each part of our query piece by piece.

```ruby

comments_query = Comment.active.arel
# Strip all the SELECT choices
comments_query.projections = []

# Select our items that we need
comments_query.projections('comments.id as id',
                    'CONCAT("comments", comments.id) as unique_id',
                    'comments.created_at',
                    '"comments" as group_type')

# comments_query.to_sql generates

# SELECT
#   id,
#   'comments' group_type,
#   CONCAT('comments', id) as unique_id,
#   created_at
# FROM comments
# WHERE active = 1

posts_query = Post.active.arel
posts_query.projections = []
posts_query.projections('posts.id as id',
                  'CONCAT("posts", posts.id) as unique_id',
                  'posts.created_at',
                  '"posts" as group_type')

# post_query.to_sql generates

# SELECT
#   id,
#   'posts' group_type,
#   CONCAT('posts', id) as unique_id,
#   created_at
# FROM posts
# WHERE active = 1

```

We can then combine both of the queries together with a UNION.

```ruby
combined_query = comments_query.union(:all, posts_query)

# (#{comments_query} UNION #{posts_query})

query = Arel::SelectManager.new(Arel::Table.engine, Arel.sql("#{combined_query.to_sql} as results"))

# (#{comments_query} UNION #{posts_query}) as results

```

Calling `Arel::SelectManager.new(Arel::Table.engine, sql_string)` gives us the equivalent of wrapping up `combined_query` into a subquery.

```ruby
limit = 25
offset = 0
sql = query.project(Arel.star)
           .order("created_at DESC")
           .take(limit)
           .skip(offset).to_sql

# SELECT * FROM (#{comments_query} UNION #{posts_query}) as results
# ORDER BY created_at DESC
# LIMIT 25
# OFFSET 0

results = ActiveRecord::Base.connection.select_all(sql)
```



