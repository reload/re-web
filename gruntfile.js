module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes and trigger compass with livereload on CSS files.
    watch: {
      scss: {
        options: {
          livereload: false
        },
        files: ['css/sass/*.scss'],
        tasks: ['compass']
      },
      css: {
        files: ['css/*.css'],
        options: {
          livereload: true
        },
      },
      jshint: {
        files: ['Gruntfile.js' ,'js/*.js'],
        tasks: ['jshint'],
      }
    },

    concat: {
      basic: {
        src: [
          'vendor/jquery/dist/jquery.js'
        ],
        dest: 'temp/vendor.js'
      }
    },

    uglify: {
      vendor: {
        files: {
          'js/vendor.min.js': 'temp/vendor.js'
        }
      }
    },

    // Checkstyle on javascript with jshint.
    jshint: {
      files: ['Gruntfile.js' ,'js/*.js', '!js/vendor.min.js'],
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      }
    },

    // Compass and SCSS
    compass: {
      options: {
        httpPath: '/',
        cssDir: 'css',
        sassDir: 'css/sass',
        imagesDir: 'img',
        javascriptsDir: 'js',
        fontsDir: 'css/fonts',
        assetCacheBuster: 'none',
        require: 'bootstrap-sass'
      },
      default: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          relativeAssets: true,
          raw: 'line_numbers = :true\n'
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('build', [
    'compass:prod'
  ]);

  grunt.registerTask('default', [
    'compass',
    'concat',
    'uglify',
    'watch',
    'jshint'
  ]);
};
