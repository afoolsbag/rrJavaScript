'use strict'

const { dest, series, src, parallel } = require('gulp')
const babel = require('gulp-babel')
const connect = require('gulp-connect')
const less = require('gulp-less')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const stylus = require('gulp-stylus')
const uglify = require('gulp-uglify')

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
  src('src/*.js')
    .pipe(babel())
    .pipe(dest('dist'))

  cb()
}

function jsBundle (cb) {
  cb()
}

function jsMinify (cb) {
  src('dist/**/*.js', '!dist/**/*.min.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist'))

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
