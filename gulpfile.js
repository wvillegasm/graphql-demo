"use strict";

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    dir = {
        src: 'src',
        dist: 'dist',
        nm: 'node_modules'
    },
    opts = {
        es6: {
            presets: ['es2015', 'es2017']
        }
    };

gulp.task('es6', () => {
    gulp.src(`${dir.src}/**/*.js`)
        .pipe(babel(opts.es6))
        .pipe(gulp.dest(`${dir.dist}`));
});