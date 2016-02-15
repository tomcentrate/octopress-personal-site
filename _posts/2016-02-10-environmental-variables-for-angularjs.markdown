---
layout: post
title:  "Environmental Variables for AngularJS"
date:   2016-02-10 04:01:00
categories: tutorials
---

When it came time to setup deploys for our AngularJS application, we had a few areas in our Services that had hard-coded API keys into the application. A lot of guides online have different ways of incorporating ng-constant into the build process. At [Fresh Lines], I work on a lot of server-side projects. I'm comfortable with a standard convention for my configurations, like a /config folder to store environment based settings. 

This particular setup is based on [onefootball]'s guide, and mirrors closely to how some server side frameworks have handled their environmental variables.

## Intended Usage

I want to have a nice config file, that lists all my environment specific settings, like

{% highlight json %}
{
    "business": {
        "url": "http://tommylee.co"
    }
}
{% endhighlight %}
and in config.production.json.
{% highlight json %}
    {
        "business": {
            "url": "http://frshlns.com"
        }
    }
{% endhighlight %}

 then have the ability to inject the configuration into places where I need it.

{% highlight javascript %}
var app = angular.module('brandtinker.businessFactory',['config']);

function BusinessFactory($http, $q, ENV) {
  var url = ENV.business.url;
  ...
}
{% endhighlight %}

## Requirements
 - An AngularJS Application
 - A (Gruntfile)[gruntjs] that works

### Folder Structure
The project folders would be set up so that we have a separate config folder to hold all of the private information:

{% highlight bash %}
/app
/config
/Gruntfile.js
{% endhighlight %}

In this config folder, we'll have the following files. These files represent the different environments we want.

{% highlight bash %}
./config.json
./config.production.json
./config.development.json
./config.staging.json
{% endhighlight %}

## Installation Steps
Install grunt-ng-constant and lodash to your local project directory


{% highlight bash %}
    npm install grunt-ng-constant lodash --save-dev
{% endhighlight %}

(optional) If you're using grunt-jit: Add grunt-ng-constants to your grunt-jit.

  {% highlight javascript %}
require('jit-grunt')(grunt, {
  useminPrepare: 'grunt-usemin',
  ngtemplates: 'grunt-angular-templates',
  cdnify: 'grunt-google-cdn',
  ngconstant: 'grunt-ng-constant'
});
  {% endhighlight %}

We need to Add the Configuration JSON files to the Gruntfile. Add these lines to your Gruntfile.js. This should be at or near the top of the file. If you're Gruntfile is not at the root of your project, adjust conf1 and conf2 to match. lodash is included to merge both JSON files together

{% highlight javascript %}
var _ = require('lodash');

// Load the config file matching the 'profile' parameter, returns the default config + values from that file.
var buildConfig = function (profile) {
var conf1 = './config/config.json';
var conf2 = './config/config.' + profile + '.json';
  if (!grunt.file.exists(conf2)) {
      grunt.fail.warn('File ' + conf2 + ' doesn\'t exist.');
  }

  return _.merge(
      grunt.file.readJSON(conf1),
      grunt.file.readJSON(conf2)
  );
};

{% endhighlight %}

Add the following grunt task inside your grunt.initConfig. This sets up the configurations to read the buildConfig and set it to an ENV file.

Replace the dest: path with you keep your scripts in your project. I only have a production and development environment.

{% raw %}
    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config',
      },
      // Environment targets
      development: {
        options: {
          dest: 'app/scripts/config.js'
        },
        constants: {
          ENV: buildConfig('development')
        }
      },
      production: {
        options: {
          dest: 'app/scripts/config.js'
        },
        constants: {
          ENV: buildConfig('production')
        }
      }
    },
{% endraw %}

Finally, in the build and serve tasks of Grunt, we'll need to call ngconstant to our setup. grunt build is for production, and grunt serve for development. I would add this task as the first or second task to be run

{% highlight javascript %}
grunt.registerTask('build', [
    'clean:dist',
    'ngconstant:production',
    'wiredep',
    'useminPrepare',
    ...
{% endhighlight %}

  And for grunt serve

{% highlight javascript %}
grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
  if (target === 'dist') {
    return grunt.task.run(['build', 'connect:dist:keepalive']);
  }

  grunt.task.run([
    'clean:server',
    'ngconstant:development',
    'wiredep',
    ...
{% endhighlight %}

Then for every module where you would use this, include config as a dependency, and inject ENV

{% highlight javascript %}
var app = angular.module('brandtinker.businessFactory',['config']);

function BusinessFactory($http, $q, ENV) {
  var url = ENV.business.url;
{% endhighlight %}

Credits goes to [onefootball] for this setup. 


[onefootball]: http://onefootball.github.io/environment-dependent-configuration-files-with-angularjs-and-grunt/
[gruntjs]: https://github.com/werk85/grunt-ng-constant
[lodash]: https://lodash.com/
[Fresh Lines]: http://frshlns.com/
