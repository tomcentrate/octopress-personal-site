---
layout: post
title:  "Standardized Front-end Tools to Increase Productivity"
date:   2016-07-29 00:00:00
categories: personal
---
    
One of the challenges I ran into while learning modern front-end developments and frameworks is the challenge of putting all the ideas together. While I have a few years doing back-end development, and server side languages, my experience with client-side, Javascript, and SPAs was limited.

## Learning difficulties
When I played with Angular, React or Meteor back in 2014-2015, I had a lot of questions. Some involved the tooling, but many were based in how to setup a project.

* How do I structure a project?
* What are the recommended best practices?
* How do I deploy?
* How do I handle testing?
* How do I manage importing libraries and other packages?

## Lost in the forest

These Modern frameworks required a lot more planning, thought and research for me to get running. Having to development my own project structure, or having a few restructures, was frustrating.

I had a little assistance from a local Javascript Expert [Chris McClean](http://havok2905.github.io/mcleancode/), and having fellow developers would help out in the learning process. This would be easier though for everyone if there was a simplified process in setting up and getting ready to go.

## Starter Packs and Generators

One of the ways we used to start projects was using existing starter packs, or [Yeoman](http://yeoman.io). This gave us a better experience in generating an existing project, and allowed us to get up and get going.
  
### Set it up for me
Having a default preference set up allows us to move onto the more important areas of our app. Starters usually fix issues like:

* ES6 Transpiling
* Minification and Compilation
* Generating a Production Target
* Wiring up the folders

### Starter packs

* ReactJS - [React Boilerplate](https://github.com/mxstbr/react-boilerplate)
* Angular 1 - [Hot Towel Generator](https://github.com/johnpapa/generator-hottowel)

While this made it a lot easier to build out projects, it had some issues. Some starters that exist are specific to a certain configuration. I used an older Yeoman starter for Angular, which used less recent build tools like Bower and Grunt.

It was also structured in an MVC project structure, while the community recommends a Feature based project structure. 

* Relied on the generator's documentation
* Could use older, not current best practices
* Hard to debug if you don't know what the different tools are doing.

## We love Official Command Line Tools

It's increasingly common for many web developers to use some form of command line tools to better improve productivity. In the Javascript world, it's almost required to use npm to manage packages. 

Recently, the major Javascript Frameworks have released their cli version of the tool to help create new projects, components, and build and serve. These were based on ember-cli, and allow us to start working and not worry about all the other intricacies.

I've been playing with Angular 2's ng-cli, and I feel it improves my qualify of life for development. Other than generating default code, it allows for the following:

* Well defined conventions
* Easier support
* keeps my mental overhead small

## Conventions reduces conflict

While people argue about different kinds of conventions, many will agree that conventions are a good thing. By having a defined set of conventions for a project, people would generally know where to put things.

### When the documentation is not a best practice

One of the issues I ran into while learning Angular 1 came from a lack of agreed upon conventions. While the official documentation showed one way to create directives, the community documentation and best practices recommended a separate way.

### Have defaults cover most common use-case

Angular 2 took recommendations and practices from the community and have built tools that support the best practice. The issue of how you should set up your Components or Services is already made up. Calling `ng generate component my-component-name` creates all the steps you need. 
    
## Easier support

One of the benefits of having a standard structure in an application is easier ways to support the application later.
### Problems are Google-able

When we have to create our own structure while we're learning, lots of minor breakage and mysterious problems occasionally appear. We try to google issues, and many of the cases found are almost close to ours, but don't work.

When standards exist, we have an understanding of what should happen, and it makes it easier to communicate. 
### Easier to onboard new developers

Newer people have an easier time looking up documentation, and can use the built-in tools to do accomplish tasks better. When we work on a project that has lower documentation, or using a bespoke framework, it can be difficult to comprehend what is exactly going on.

## I can focus on the big things.

There are times where I feel like I've written the same set of code over and over again. Looked up similar documentation each time, because it was not obvious on how I should structure an area.

Standard Tools allow me to not think, and have it be easily available to do some things. 
