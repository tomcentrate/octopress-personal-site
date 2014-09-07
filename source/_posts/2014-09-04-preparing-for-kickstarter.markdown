---
layout: post
title: "Preparing for Kickstarter"
date: 2014-09-04 22:05:53 -0400
comments: true
categories: ptfgames
---

With Past to Future Games' initial Kickstarter on launch, we have the following issues to address.  

+ Reduce landing page loading time
+ Increase traffic to site or kickstarter page.
+ Get more social media followers
+ Get an engaging video together.

Reducing load times
===================

For our tests, we'll use Pingdom's speedtest tool. In Mid August, we ran some speed tests on the home page. Prior to August 10, some of the loading times was averaging in 5 seconds.

{% img center /images/ptfgames/webanalysis/pingdom-august-14.png 545 183 'image' 'images' %}

We looked at where the Time spent per each action, and a lot of time was devoted to server processing! This may be due to all the plugins.

{% img center /images/ptfgames/webanalysis/waterfall-august-14.png 883 462 'image' 'images' %}

In the waterfall, you can see that we have an image that takes ~3 seconds to load! Thanks Apache! This may be a strange server error. 
There are a lot of things we tried to resolve this issue. We applied W3 Total Cache to the site to store some processing, some caching from CloudFlare, and we got slightly better numbers.

{% img center /images/ptfgames/webanalysis/pingdom-august-26.png 552 201 'image' 'images' %}

Unfortunately, a lot of those Caches only reduced part of the processing. 

### Switching to NGINX

From the Page Analysis Tab on Pingdom, we see that the majority of requests are static resources. Images, CSS and other things. This would be a good use case for Nginx. 

We setup the site with Nginx and a Memcache, and on a separate instance. Even though we have 100s of requests on the front page, we got some pretty tasty results.

{% img center /images/ptfgames/webanalysis/loadtime-dallas.png 869 353 'Pingdom Loadtimes - Dallas' 'pingdom dallas loadtime' %}

Hopefully we'll get enough visitors to the site to actually need this.