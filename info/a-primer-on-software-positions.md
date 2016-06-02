---
layout: page
title: A primer on software job positions
category: tutorials
---

This is a somewhat short primer on the different roles that are needed to produce business software. I wrote this as a way to explain to friends and family what people do.


### Caveats

* Job titles are usually vague.
* I made roles rigid to explain specific differences. In reality, there's usually a blend of each skill.
* Some tech people wear many hats.
* This may not apply to more specialized fields, like game development, finances or traditional engineering.

## Basic Premise

![Front vs Backend](/images/web_primer/front-vs-back.png)

We can split up a piece of modern software into 4 distinct areas:

* Design
* Front-end / Mobile
* Back-end
* Server

Many tech people have some skill in each of these sections. It's very common to have skills in an adjacent section.

* Designers sometimes have front-end and mobile experience
* Back-end developers sometimes knows server related skills
* Front-end developers can have experience in both design and back-end.

Many developers are a 'Jack of all Trades', but have a mastery in one or two sections.

## Design

![Web Designer](/images/web_primer/web-designer.jpg)

### Designer Skills

A designer focuses on the appearances of the application. They usually work with a lot of graphics oriented stuff. They would be involved with the UI Design and the visual nature of the application.


* Photoshop / Illustrator / Fireworks
* Color theory and aesthetics
* Typography
* Develop a visual brand identity
* Just making things look amazing

### Web Designer Skills

In Web Design, they are expected to create layouts of the pages. This could be in the form of flat PSDs, or in some sort static site of Semantic HTML, with CSS and Javascript elements available.

* HTML
* CSS
* Javascript
* Responsive / Mobile Design


![UX vs UI](/images/web_primer/ux-vs-ui.png)

### User Experience (UX) Skills

In modern applications, there is a need for applications to work intuitively and better designed for human consumption. a UX Designer structures task flows and scenarios to better represent how a user would use the application.

* Prototyping and Wireframes
* A/B Testing
* Research

More information: [What does a UX Designer actually do?](https://www.sitepoint.com/ux-designer-actually/)


## Front-end

The front-end is the customer-facing part of a software. Users will interact with the front end. There has been a growing demand for front-end developers with the advent of mobile apps and web applications.

### How it differs from Design

In some older sources of information, front-end and design were synonymous. A good design would qualify as a good front end.

Due to the ever-increasing complexity of modern software, front-end has grown to need experts in creating great interfaces.

I usually relate the designer like an Architect, while the front-end developer implements the plans.

It's pretty common to see front-end developers to have some design skills.

### Front End Developer Skills:

A front end developer usually builds interfaces and interactions for a web 
application.

Please note that the current state of front-end development is extremely active. Javascript has a lot of churn, and libraries and frameworks are changing constantly. Some of the Javascript related things listed here could be out of date!

* CSS
* HTML
* Javascript
* jQuery
* Single Page Applications (SPA)
* Asynchronous Javascript (AJAX)
* RESTful APIs
* Client-side development
* Some Javascript Library or Framework
    * Angular
    * React
    * Meteor
    * Ember
* Words You'll probably Here or see:
    * Webpack
    * Gulp
    * Grunt
    * Browserify
    * MEAN Stack

### Single Page Applications (SPA) vs Traditional Websites

![SPA vs Traditional Web](/images/web_primer/spa-vs-traditional.png)

The generational gap of software can be drawn between Traditional Websites and Single Page applications (SPAs). With the advent of Asynchronous Javascript (AJAX) in the early 2000's, developers were able to create more feature-filled websites.

A SPA website relies heavily on AJAX, and has great success in bringing a greater user experience, compared to traditional websites. Most of your commonly used websites are SPAs.

#### Traditional

In traditional websites, entire pages are rendered to the screen after each refresh. Users will click something, and the entire screen refreshes and redraws. We'll call this a synchronous process.

1. The User makes a request
2. The browser sends a request to the server and waits for a reply
3. Server responds with a new web page
4. Browser then Refreshes an entirely new web page.

#### Asynchronous

In single page applications, when a user clicks something, responses are usually fast, and things feel closer to a traditional desktop software in responsiveness. Users will notice that there is no refresh page.

1. User makes a request
2. Browser sends a request, then listens in the background. Users would still be able to interact
3. The server responds with either a partial view, or some data
4. The browser then updates the view without a refresh.

## Mobile

*Coming Soon* :exclamation:

## Back-end

The back-end handles all the processing of actions from a user. This covers any number of actions. Usually a Back-end involves a server of some kind. Any big functional areas

### Backend Developer Skills

* Knowledge of Databases and SQL
* A popular general purpose language used for Servers, such as:
  
  * C#
  * Java
  * PHP
  * Python
  * Ruby
  * Node.js Javascript

* an MVC Framework in their language of choice
* Understanding of Server architecture
* Knows the basic workings of their preferred tech stack.

### Tech Stack

A Tech stack is a group of software products and programming languages used to create a product. Many stacks are determined by the programming language.

Many back-end developers usually start with a framework as a core of their stack.

### MVC Frameworks

MVC is a very common software architecture that many developers use. The project is separated into separate parts.

* Models store and process the information.
* Controllers determine where the data flows.
* Views are what the users see.

Most MVC Frameworks work about the same as any other MVC Framework. Each major language has a few popular MVC Frameworks:

| Language   | MVC                              |  
| C#         | .NET MVC                         |  
| Java       | Spring / Play / Groovy on Grails |  
| Ruby       | Ruby on Rails                    |  
| PHP        | Laravel / Symfony                |  
| Python     | Django                           |  
| Javascript | Express / Sails.js               |  

### SQL

SQL is the Structured Query Language, and is a standard means of manipulating data in any relational database. While there are subtle differences between the different dialects of SQL, developers usually have no issues changing databases if they stick with Standard SQL.

Relational Databases:

* MSSQL (SQL Server)
* PL/SQL (Oracle)
* Postgres
* MySQL
* SQLite

#### SQL vs NoSQL

In most applications (~90%), A relational database is an appropriate solution. In some applications, a relational database would not be the right choice, this includes:

* Big Data (Like Terabytes)
* Need for Flexible Data model

Non Relational Databases:

* MongoDB
* CouchDB
* Hadoop
* Cassandra
* Neo4J

### Backend Stack:

The backend can be broken down into three distinct parts: server, application, and database. The server serves the data and pages. The application contains and runs the business logic. And the database is a permanent store of data.

Each part is interchangeable, but there are a usual set of common pairings.

| Language   | OS      | Server  | Framework      | Database   |  
| ---------- | ------- | ------- | -------------- | ---------- |  
| C#         | Windows | IIS     | .NET MVC / ASP | SQL Server |  
| Java       | Linux   | Tomcat  | Spring         | Any        |  
| Javascript | Linux   | Node.js | Express        | MongoDB    |  
| PHP        |         | Apache  | PHP            | Mysql      |  
| Ruby       |         | nginx   | Ruby on Rails  | Postgres   |  
| Python     |         | nginx   | Django         | Postgres   |  

## Server

*Coming Soon* :exclamation:



### Final thoughts

If there are any inaccuracies, please let me know!