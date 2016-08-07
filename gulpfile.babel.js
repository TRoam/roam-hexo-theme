'use strict';
import 'babel-polyfill'
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import reveasy from 'gulp-rev-easy' 
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import postcss from 'gulp-postcss'

import path from 'path'

const dir = {
  sass : './source/sass',
  js : './source/js'
}

gulp.task('default',['sass','scripts'],() => {
  gulp.watch(`${dir.sass}/**/*.scss`,['sass']);
  gulp.watch(`${dir.js}/**/*.js`, ['scripts']);
});

gulp.task('sass', () =>  {
  return gulp.src('./source/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./source/css'));
});

gulp.task('scripts', () => {
  
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js',`${dir.js}/**/*.js`])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./source'));
});

gulp.task('rev', function(argument) {
  gulp.src('./layout/_partial/style.ejs')
    .pipe(reveasy({
      base: path.join(process.cwd(), 'source'),
      fileTypes: ['css', 'js']
    }))
    .pipe(gulp.dest('./layout/_partial'))
});
