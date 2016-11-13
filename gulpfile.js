// Modules
var gulp 				= require('gulp'),
		stylus 			= require('gulp-stylus'),
		cssmin			= require('gulp-cssmin'),
		prefixer 		= require('autoprefixer-stylus'),
		plumber			= require('gulp-plumber'),
		koutoSwiss 	= require('kouto-swiss'),
		gcmq 				= require('gulp-group-css-media-queries'),
		rename			= require('gulp-rename'),
		browserSync = require('browser-sync'),
		webpack 		= require('webpack-stream'),
		poststylus	= require('poststylus'),
		rupture			= require('rupture');

// Directories
path = {
	dev: 'app/',
	prod: 'public/'
}

// Call Browser-Sync
gulp.task('browser-sync', function() {
	browserSync.init(['public/css/*.css', 'public/bundle.js'], {
		notify: {
			styles: {
				top: 'auto',
				bottom: '0'
			}
		},
		server: {
			 baseDir: './public'
		}
	})
});

// Call Webpack
gulp.task('webpack', function() {
	return gulp.src('app/scripts/App.js')
		.pipe(plumber())
	  .pipe(webpack( require('./webpack.config.js') ))
	  .pipe(gulp.dest('./public'));
});

// Call Stylus
gulp.task('stylus', function() {
	gulp.src( path.dev + '/stylus/main.styl')
		.pipe(plumber())
		.pipe(stylus({
			use:[prefixer(), rupture(), koutoSwiss(), poststylus('lost')]
		})) 
		.pipe(gcmq())
		.pipe(gulp.dest(path.prod + '/css'));
});

// Watch
gulp.task('watch', ['stylus', 'browser-sync', 'webpack'], function() {
	gulp.watch( path.dev + '/stylus/**/**.styl', ['stylus']);
	gulp.watch( path.dev + '/scripts/**/**.js', ['webpack']);
});

// Default Task
gulp.task('default', ['stylus', 'webpack', 'browser-sync', 'watch']);