--- 
layout: post
title:  "Steps to Automation"
date:   2019-07-15 00:00:00
categories: programming
description: Starting the process to automate workflow process, here are some of the basic steps I used at my current company.
---

## Identify Steps that can be automated

Automation can be designed by breaking up a complex task into many, simple tasks. We can take a few tasks that can be seen as a manual process.

One of the following issues that I have is doing deployment for software. I also need to notify my monitoring service when a new software release occurred. 

Problem: I need to deploy working software to my server.

## Step 1. Generalize The Process

We can identify the basic steps required to update and change the current server software. In the simple deployment case, I see it work like this.

1. Build Software
2. Test Software
3. Push New Build of Software to Server
4. Run installations and changes on Server.
5. Restart Service
3. Notify Monitoring Service

So the flowchart looks like this:

![Flowchart of the Steps listed above](/images/automation/deployment-flowchart.png "Flowchart of the Step listed above")

## Step 2. Breakdown Process into multiple Smaller Steps

So each of these steps have mini steps put together.

### Build Software
1. I take changes from my git repository and update to the newest version.
2. I optimize any assets that need optimization. This includes images, or final CSS output.

### Test Software
3. I run any Integration tests to make sure there are no regressions.
3. I run any Unit tests to make sure there are no regressions.

### Push New Build of Software to Server
4. I produce a package that I upload to one of my servers
5. I unzip the package to the correct directory.

### Run Installation and changes on Server
6. I install any updated packages
7. I Apply any schema migrations

### Restart Services
8. I restart the web and app services.


### Notify Monitoring Services
9. I Notify NewRelic that a new build has been launched.

![Additional Steps as from above, with breaking down of each step](/images/automation/deployment-flowchart-part-2.png)
## Step 3. Identify How to Trigger this Process

We have different ways to determine how automation should trigger. Currently we have these two types of events.

### Time Based Processes

These are things that are meant to run on a schedule. They are triggered based on what time it is.

Examples:
- Every week, rotate the log files. 
- Every 5 minutes, check if the service is online
- On the first of every month, generate a report of user time and usage.


### Event Based Processes

These are events that are triggered based on criteria. 

Examples:
- When I get an email, copy the subject line to a new file
- When a User submits a form, write information to a database.
- When code is submitted, run automated tests.


In our case, we 
## Step 4. Build steps using a Clean Room Approach

