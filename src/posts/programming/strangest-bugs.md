---
layout: post
title:  "Strange Bug: Safari Parsing"
date:   2019-03-26 00:00:00
categories: programming
description: We all run into some strange and bizarre bugs. Here's a story of the ones I remember from this year. While I don't have a root cause of the bug, I have some solutions.
---

So I spent half a day fixing the following errors. The layout on Rental Cars Search results have been broken on Safari. We suspected that this had to do with Safari's sppecific handling of divs and invalid HTML. 

## The General Setup

So the affected code in question looks like this. We have a homebrew JS template that looks and acts roughly like this.

    <script type="text/template" id="rental-car-details">
        <div>
           ...
        </div>
    </script>
    
    ... Somewhere in a JS file...
    
    var details = $('#rental-car-details').clone();
    ...
    details.replace("{{pricing}}", priceDetails);
    ...
    resultsBody.append(details);

We have a template, and we build a DOM element, that gets injected after results come back from an AJAX request.

## Check the Commit Logs

We confirmed with QA that this was a new bug. Checking the logs, we see only one major commit from the last valid section.


# Test By Bisection

I reduced a lot of the code down to make sure that no other divs were affecting it. To make sure that the layout was stable even before this chunk of template exists.

Since this template is loaded via a template tag in Javascript. I started commenting out code and anything irrelevant, to find the part of the load that breaks the code.

## The Cause

I started commenting out different parts of the template, and was able to identify the exact line of HTML that causes the problem.

This was that line

    {{strike}}
    <span class="actual-price">
        <span class="dollar">$</span>{{period_price}}
    </span>
    <span class="perday">/{{period.abbr}}</span>

So we kept pairing it down. to eventually get to:

    <span class="dollar">$</span>

Yes, so while this is okay in most of the browsers, for some reason, in Safari. When this is injected, this breaks the layout.

### Test cases for solutions.

So we did some small tests, seeing if it had something to do with the characters, or the signs. And what we came up was this:

    <!-- This *somehow* fixes it -->
    <span class="dollar"> $ </span>

    <!-- This is still broken -->
    <span class="dollar"> $</span>

    <!-- This is still broken -->
    <span class="dollar">$ </span>

So we found that Javascript Engine in Safari parses the `>$<` character incorrectly. It required atleast 3 characters within between the span.


# Solution:

So to make the least breaking changes possible, I eneded up with the following.

    <!-- Safari fix: single dollar sign ($) breaks layout. -->
    <span class="dollar">&#36;</span>{{period_price}}

I would love to know why this breaks in Safari. But we'll have to investigate the root cause another day.
