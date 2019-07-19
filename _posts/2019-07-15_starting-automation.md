--- 
layout: post
title:  "Steps to Automation"
date:   2019-07-15 00:00:00
categories: programming
description: Starting the process to automate workflow process, here are some of the basic steps I used at my current company.
---

Many parts of the standard workflow process in our day to day lives are pretty standardized. We do a lot of manual processes that can be easily automated. These are the steps that I use normally.

1. Generalize Process.
2. Breakdown process into multiple Smaller Steps.
3. Identify how to trigger process.
4. Build steps using a clean room approach.

We'll use the example of how to optimize images that are uploaded via an SFTP, and then deploying them to a CDN.

## Step 1. Generalize The Process

So instead of looking at things as 1 image or 1 css file, we can aggregate all these concepts as 
try to find ways to make what you're doing into a more generalized form one of our cases was trying to sync up SVN with gets and part of it was working on creating a workflow process that can be easily done in a set of steps 

## Step 2. Breakdown Process into multiple Smaller Steps
 Wild do he's really help out with designing and move around workflow part of automation is relying on a server to commit and sent out commands. So command lines to move files and run commands is very important. alternatively you could automate things using items like autohotkey and other related simulators but for the purposes of this automation step use command line. Enter enter 

## Step 3. Identify How to Trigger this Process

So now as we have part of steps are required to get the automation step we need to find ways to trigger and fire these individual steps. It's pretty common for many people to write a and setup automation John via a Cron job we can also use other methods of detecting when things happen. so when we go to comes to dealing with changes in the file system like if a configuration of something has changed we can use FS events or some kind of file system watching to affect our system. So let's say that we had a file that was uploaded to a folder process so are using uploads an image and we want to trigger and run imagemagick to create different files of different sizes

### Time Based Processes

### Event Based Processes




## Step 4. Build steps using a Clean Room Approach

