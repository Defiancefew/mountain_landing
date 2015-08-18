module.exports = function(grunt) {
	require('time-grunt')(grunt);
// 1. Вся настройка находится здесь
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	concat: {
		css: {
			src: 'src/css/*.css',
			dest: 'build/css/style.css'
		},
		js: {
			src: 'src/js/*.js',
			dest: 'build/js/common.js'
		}
	},
	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: 'src/css',
				src: ['*.css', '!*.min.css'],
				dest: 'src/css',
				ext: '.min.css'
			}]
		}
	},
	uglify: {
		my_target: {
			files: {
				'build/js/common.min.js': ['build/js/common.js']
			}
		}
	},
	watch: {
		css: {
			files: ['src/**/*.sass','src/**/*.scss'],
			tasks: ['sass','autoprefixer'],
			options: {
				spawn: false,
			}
		},
		jade: {
			files: ['src/**/*.jade'],
			tasks: ['jade'],
			options: {
				spawn: false,
			},
		}
		},
		imagemin: {
			options: {
				optimizationLevel: 3,
				progressive: true,
				interlaced: true,
				pngquant: true
			},
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'build/'
				}]
			}
		},
		sass: {
			dist: {
				options: {
				},
				files: {
					'src/css/style.css': 'src/sass/style.sass',
				}
			}
		},
		browserSync: {
			default_options: {
				bsFiles: {
					src: [
					"src/css/*.css",
					"src/*.html",
					"src/js/*.js"
					]
				},
				options: {
					watchTask: true,
					notify: false,
					server: {
						baseDir: "src/"
					}
				} 
			}
		},
		copy: {
			main: {
				files: [
				{expand:true, cwd:'src',  src:"index.html", dest:"build/" },
				{expand:true, cwd:'src',  src:"fonts/**", dest:"build/" },
				{expand:true, cwd:'src', src:"lib/**", dest:"build/" },
				{expand:true, cwd:'src', src:"css/*", dest:"build/" }
				]
			}
		},
		clean: {
			build: {
				src: ["build/"],
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9']
			},
			your_target: {
				src: ['src/css/style.css', 'src/css/style.css']
			},
		},
		cmq: {
			target: {
				files: [{
					expand: true,
					cwd: 'build/css',
					src: '*.css',
					dest: 'build/css',
				}]
			}
		},
		sprite:{
			all: {
				src: 'src/img/sprites/*.png',
				dest: 'src/img/spritesheet.png',
				destCss: 'src/sass/sprites.css',
				algorithm: 'top-down'	
			}
		},
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					},
					pretty: true,
				},
				files: {
					"src/index.html": ["src/index.jade"]
				}
			}
		}
	});

// 3. Тут мы указываем Grunt, что хотим использовать этот плагин
require('load-grunt-tasks')(grunt);

// 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
grunt.registerTask('default', ['browserSync','watch']);
grunt.registerTask('build', ['clean','concat','cssmin','uglify','cmq','autoprefixer','imagemin','copy']);

};