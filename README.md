boilerplate
===========

# My Grunt boilerplate
For more info about go to: http://gruntjs.com/
If found 24ways.org/2013/grunt-is-not-weird-and-hard/ extremely valuable. 

I use one src folder where I keep all my source files. Files are being compiled, concatenated into a img, CSS and JS folder. 

No default CSS and JS (yet). 

## Installed plugins:
- concat; concat multiple files into one JS file. 
- imagemin; optimizes all images
- uglify; minifies concetenated JS file 
- sass; compiles two files a nested one, and a minified one with sourcemap. 
- autoprefixer; prefixes all CSS files, not Sass. 
- watch; 'concat','imagemin', 'uglify','sass', 'autoprefixer'. 

## How to use
Install Grunt on your system: http://gruntjs.com/
Run 'npm install' in the root of this project to install all the right packages
Run 'grunt' to run tasks and folders are being watched
