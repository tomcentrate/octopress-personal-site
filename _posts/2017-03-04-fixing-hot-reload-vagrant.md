---
layout: post
title:  "Fixing Hot Reloads on Vagrant"
date:   2017-03-04 00:01:00
categories: tutorials
---

One of the common issues that I've run into virtualizing my development environments is having to restart my server manually.

Whenever I developed locally, everything was fast, and changes appeared on first refresh. But when I used a VM, the frustration of restarting the server killed a lot of my productivity.

## The Issue 

Many of the hot reloads rely on detecting when the file has changed in your directory. Usually, we have something that watches the directory, and listens for a change. 

Whenever a file is changed, the system kernel emits a notification letting a program know that something changed. In Linux systems, we have `inotify`, on OSX, it's `fsevents`. 

Since we're using a virtual machine, our program is only listening to notifications emitted on the virtual machine.


## Solution 1: Forward File Change Events

A recommended solution is to add a vagrant plugin to take care of forwarding file events to the VM. 

Currently we're using [vagrant-fsnotify](https://github.com/adrienkohlbecker/vagrant-fsnotify) to forward events.

After installing the plugin we.

1. add the fsnotify:true to our synced file directory.

   ```ruby
   config.vm.synced_folder ".", "/vagrant", fsnotify: true
   ```

2. Restart the machine

3. Start `vagrant fsnotify` in a separate tab.

   ```bash
   vagrant fsnotify
   ```

## Solution 2: Polling

An older recommendation is to switch to *polling*, which detects changes to the modification date occasionally. This was Ruby on Rails' default detection method until version 4. 

This is a fallback in cases where file event updates aren't available. You can check your dev-server's start system options, and see if a polling option exists.

I don't recommend this, since polling takes up more memory and CPU, but if inotify forwarding is unavailable:

In this [stackoverflow post](http://stackoverflow.com/questions/33681004/webpack-dev-server-reload-doesnt-work-on-virtual-box/33699702), they enabled polling via `vagrant rsync-auto`.