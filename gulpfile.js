// Generated on 2017-05-18 using generator-angular 0.16.0
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

var yeoman = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
};

var paths = {
    scripts: [yeoman.app + '/scripts/**/*.js'],
    styles: [yeoman.app + '/styles/**/*.scss'],
    views: {
        html:yeoman.app+'/html/*.html',
        main: yeoman.app + '/index.html',
        files: [yeoman.app + '/views/**/*.html']
    }
};

////////////////////////
// Reusable pipelines //
////////////////////////

var lintScripts = lazypipe()
    .pipe($.jshint, '.jshintrc')
    .pipe($.jshint.reporter, 'jshint-stylish');

var styles = lazypipe()
    .pipe($.sass, {
        outputStyle: 'expanded',
        precision: 10
    })
    .pipe($.autoprefixer, 'last 5 version')
    .pipe(gulp.dest, '.tmp/styles');

///////////
// Tasks //
///////////

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(styles());
});

gulp.task('lint:scripts', function() {
     var jsFilter = $.filter(['**/*.js','!map/*.js']);
    return gulp.src(paths.scripts)
        .pipe(jsFilter)
        .pipe(lintScripts());
});

gulp.task('clean:tmp', function(cb) {
    rimraf('./.tmp', cb);
});

gulp.task('start:client', ['start:server', 'styles'], function() {
    openURL('http://localhost:9000');
});

gulp.task('start:server', function() {
    $.connect.server({
        root: [yeoman.app, '.tmp', 'bower_components'],
        livereload: true,
        // Change this to '0.0.0.0' to access the server from outside.
        port: 9000
    });
});

gulp.task('watch', function() {
    $.watch(paths.styles)
        .pipe($.plumber())
        .pipe(styles())
        .pipe($.connect.reload());
    $.watch(paths.views.main)
        .pipe($.plumber())
        .pipe($.connect.reload());
    $.watch(paths.views.files)
        .pipe($.plumber())
        .pipe($.connect.reload());

    $.watch(paths.scripts)
        .pipe($.plumber())
        .pipe(lintScripts())
        .pipe($.connect.reload());

    gulp.watch('bower.json', ['bower']);
});

gulp.task('serve', function(cb) {
    runSequence('clean:tmp', ['lint:scripts'], ['start:client'],
        'watch', cb);
});

gulp.task('serve:prod', function() {
    $.connect.server({
        root: [yeoman.dist],
        livereload: true,
        port: 9000
    });
});


// inject bower components
gulp.task('bower', function() {
    return gulp.src(paths.views.main)
        .pipe(wiredep({
            directory: yeoman.app + '/bower_components',
            ignorePath: '..'
        }))
        .pipe(gulp.dest(yeoman.app + '/views'));
});

///////////
// Build //
///////////

gulp.task('clean:dist', function(cb) {
    rimraf('./dist', cb);
});

gulp.task('client:build', ['html', 'styles'], function() {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var indexHtmlFilter = $.filter(['**/*', '!**/index.html'], { restore: true });

    return gulp.src(paths.views.main)
        .pipe(sourcemaps.init())
        .pipe($.useref({ searchPath: [yeoman.app, '.tmp', 'bower_components'] }))
        .pipe(jsFilter)
        .pipe($.ngAnnotate())
        //.pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
       // .pipe($.minifyCss({ cache: true }))
        .pipe(cssFilter.restore())
        .pipe(indexHtmlFilter)
        .pipe($.rev())
        .pipe(indexHtmlFilter.restore())
        .pipe($.revReplace())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(yeoman.dist));
});



gulp.task('serve:static', function(cb) {
    runSequence('clean:tmp', ['lint:scripts'], ['start:client'],
        'watchStatic', cb);
});
gulp.task('watchStatic', function() {
    $.watch(paths.styles)
        .pipe($.plumber())
        .pipe(styles())
        .pipe($.connect.reload());

    $.watch(paths.views.html)
        .pipe($.plumber())
        .pipe($.connect.reload());

        $.watch(paths.views.files)
        .pipe($.plumber())
        .pipe($.connect.reload());
});

gulp.task('html', function() {
    return gulp.src(yeoman.app + '/views/**/*')
        .pipe(gulp.dest(yeoman.dist + '/views'));
});

gulp.task('images', function() {
    return gulp.src(yeoman.app + '/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(yeoman.dist + '/images'));
});

gulp.task('copy:extras', function() {
    return gulp.src(yeoman.app + '/*/.*', { dot: true })
        .pipe(gulp.dest(yeoman.dist));
});

gulp.task('copy:fonts', function() {
    return gulp.src(yeoman.app + '/fonts/**/*')
        .pipe(gulp.dest(yeoman.dist + '/fonts'));
});

gulp.task('build', ['clean:dist'], function() {
    runSequence(['images', 'copy:extras', 'copy:fonts', 'client:build']);
});

gulp.task('default', ['build']);
