'use strict';

var gulp = require('gulp'),
    sass = require("gulp-sass"),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del'),
    flatten = require('gulp-flatten');
    
gulp.task('build-css', function() {
	gulp.src([
        'src/app/components/common/common.css',
		    'src/app/components/**/*.css'
    ])
        .pipe(concat('eauicomp.css'))
        .pipe(gulp.dest('resources'));
});

/*
// Backup for original build-css-prod task
gulp.task('build-css-prod', function() {
    gulp.src([
        'src/app/components/common/common.css',
        'src/app/components/!**!/!*.css'
    ])
    .pipe(concat('eauicomp.css'))
    .pipe(gulp.dest('resources'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(rename('eauicomp.min.css'))
    .pipe(gulp.dest('resources'));	
});
*/

gulp.task('build-css-prod', function() {
    gulp.src([
        'src/app/components/common/common.scss',
        'src/app/components/**/*.scss'
    ])
    .pipe(sass())
    .pipe(concat('eauicomp.css'))
    .pipe(gulp.dest('resources'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(rename('eauicomp.min.css'))
    .pipe(gulp.dest('resources'));
});


/*
// Backup for original copy-component-css task
gulp.task('copy-component-css', function () {
    gulp.src([
        'src/app/components/!**!/!*.css'
    ])
    .pipe(gulp.dest('resources/components'));
});
*/


gulp.task('copy-component-scss', function () {
    gulp.src([
        'src/app/components/**/*.scss'
    ])
    .pipe(gulp.dest('resources/components'));
});

gulp.task('copy-global-scss', function () {
    gulp.src([
        'src/scss/*.scss',
        '!src/scss/styles.scss'
    ])
    .pipe(gulp.dest('resources/scss'));
});

gulp.task('build-component-css', function () {
    gulp.src([
        'src/app/components/**/*.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('resources/components'));
});

gulp.task('images', function() {
    return gulp.src(['src/app/components/**/images/*.png', 'src/app/components/**/images/*.gif'])
        .pipe(flatten())
        .pipe(gulp.dest('resources/images'));
});

gulp.task('themes', function() {
    return gulp.src(['src/assets/components/themes/**/*'])
        .pipe(gulp.dest('resources/themes'));
});

gulp.task('build-exports', function() {
    return gulp.src(['exports/*.js','exports/*.d.ts'])
        .pipe(gulp.dest('./'));
});

//Cleaning previous gulp tasks from project
gulp.task('clean', function() {
	del(['resources']);
});

//Building project with run sequence
// gulp.task('build-assets', ['clean','copy-component-css', 'build-css-prod', 'images', 'themes']);
gulp.task('build-assets', [
    'clean',
    'copy-global-scss',
    'copy-component-scss',
    'build-component-css',
    'build-css-prod',
    'images',
    'themes'
]);
