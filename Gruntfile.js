module.exports = function (grunt) {

// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        options: {
            livereload: true
        },
        css: {
            files: 'scss/*',
            tasks: ['sass']
        },
        html: {
            files: ['demo/*.html']
        },
        gruntfile: {
            files: ['Gruntfile.js']
        }
    },
    sass: {
        dist: {
            files: {
                'demo/css/demo.css': 'scss/demo/index.scss'
            }
        }
    },
    connect: {
        server: {
            options: {
                hostname: 'localhost',
                base: 'demo/',
                livereload: true
            }
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask('default', ['connect','watch']);
grunt.registerTask('build', ['sass']);
};