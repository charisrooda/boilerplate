module.exports = function(grunt) {

    // magic!
    require('load-grunt-tasks')(grunt);

    // 1. All configuration goes here 
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

        // configs, here we go!

        // to concatenate JS
        concat: {   
          dist: {
            src: [
            'src/js/one.js', // js file
            'src/js/two.js', // js file nr 2
            ],
            dest: 'js/script.js',
          }
        },

        // let's make it mini!
        uglify: {
          build: {
            src: 'js/script.js',
            dest: 'js/script.min.js'
          }
        },

        // two types of sass files. Last one is source file
       	sass: {
          dist: {
            options: {
              style: 'nested'
            },
            files: {
              'css/style.css': 'src/css/style.scss'
            }
          },
          build: {
              options: {
                style: 'compressed',
                sourcemap: 'true'
              },
              files: {
                'css/style.min.css': 'src/css/style.scss'
              }
          }
        },

        // let's make images mini too!
        imagemin: {
        	dynamic: {
        		files: [{
        			expand: true,
        			cwd: 'src/img',
        			src: ['**/*.{png,jpg,gif}'],
        			dest: 'img'
        		}]
        	}
        },

        // auto prefix - caniuse data 
        autoprefixer: {
          overwrite: {
            src: 'css/*.css',
          }
        },

        // watch if there are new images to make mini
        watch: {
        	images: {
        		files: ['src/img/*.{png,jpg,gif}'],
        		tasks: ['imagemin']
        	},
          scripts: {
            files: ['src/js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
              livereload: true,
            },
          },
          css: {
            files: ['**/*.scss'],
            tasks: ['sass:dist', 'sass:build', 'autoprefixer'],
            options: {
              livereload: true,
            }
          }
        }

      });

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','imagemin', 'uglify','sass', 'autoprefixer', 'watch']);
  };

