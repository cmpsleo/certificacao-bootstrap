var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('stylesheet', function(){
	return gulp.src('./source/stylesheet/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.on('error',notify.onError({
		title: 'STYLESHEET ERRROR!',
		message: '<%= error.message %>'
	}))
	.pipe(autoprefixer({browsers: ["> 0%"]}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('script', function(){
	return gulp.src('./source/script/**/*.js')
	.pipe(uglify())
	.on('error',notify.onError({
		title: 'SCRIPT ERRROR!',
		message: '<%= error.message %>'
	}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/js/'));
});

gulp.task('move-fonts', function(){
	return gulp.src('./source/libs/components-font-awesome/fonts/**')
	.pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('build-js', function(){
	return gulp.src([
		'./source/libs/jquery/dist/jquery.min.js',
		'./source/libs/jquery.mobile/jquery.mobile.custom.min.js'
	])
	.pipe(gulp.dest('./dist/js/libs'))
});

gulp.task('watch', function(){
	gulp.watch('./source/stylesheet/**/*.scss', ['stylesheet']);
	gulp.watch('./source/script/**/*.js', ['script']);
});

gulp.task('default', ['watch'], function(){});