module.exports = function (grunt) {
	grunt
		.initConfig({

			concat: {
			  js: {
			    src: [
			    'js/head.js',
			    'js/prototype.js'
			    ],
			    dest: 'build/toggleNavBar.js',
			  },
			},
			uglify: {
			    my_target: {
			      files: {
			        'build/toggleNavBar.min.js': ['build/toggleNavBar.js']
			      }
			    }
			  },
		  	watch: {
			  js: {
			    files: ['js/**/*.js'],
			    tasks: ['concat:js', 'uglify'],
			  },
			},

		});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};