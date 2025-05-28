<?php

# This is the main file that actually does things.  Config files are static and set below.
$logfile = '';



# The rest of this file shouldn't need adjusted.

$out = [];

// Place Holders until we write a function
$out['count'] = 25;
$out['most_recent_call'] = '12345';
$out['time_ago'] = '25 minutes ago';
$out['most_recent_worked'] = '7890';

# These are the variables we set on the page
extract($out);
