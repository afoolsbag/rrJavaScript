'use strict'

const {dest, series, src, parallel} = require('gulp')
const less = require('gulp-less')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const stylus = require('gulp-stylus')

function clean (cb) {
  cb()
}

function cssTranspile (cb) {
  src('src/**/*.css')
    .pipe(dest('dist'))

  src('src/**/*.less')
    .pipe(less())
    .pipe(dest('dist'))

  src('src/**/*.sass')
    .pipe(sass())
    .pipe(dest('dist'))

  src('src/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist'))

  src('src/**/*.styl')
    .pipe(stylus())
    .pipe(dest('dist'))

  cb()
}

function cssMinify (cb) {
  cb()
}

function jsTranspile (cb) {
  cb()
}

function jsBundle (cb) {
  cb()
}

function jsMinify (cb) {
  cb()
}

function publish (cb) {
  cb()
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(
    cssMinify,
    jsMinify
  ),
  publish
)
