var gulp = require('gulp');
rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var useref = require('gulp-useref');
var del = require('del');
var uncss = require('gulp-uncss');

var config = {
     bowerDir: 'src/libs' 
}

gulp.task('images', function(){
  gulp.src('src/images/**/*')
  .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
  .pipe(gulp.dest('public/images/'));
});

gulp.task('styles', function(){
  var scssSrc = 'src/styles/scss/*.scss';
  gulp.src([scssSrc])
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
    }}))
  //.pipe(changed(scssSrc))
  .pipe(sass())
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('public/styles/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('public/styles/'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/components-font-awesome/fonts/**.*') 
        .pipe(gulp.dest('public/fonts')); 
});

gulp.task('clean', function() {
  return del.sync('public');
});

gulp.task('scripts', function(){
   //process.stdout.write("Enter here");
   var jsSrc = 'src/scripts/**/*.js';
   return gulp.src(jsSrc)
   .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
    }}))
  //.pipe(changed(jsSrc))
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('public/scripts/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('public/scripts/'))
  .pipe(browserSync.reload({stream:true}))
});

// minify new or changed HTML pages
gulp.task('build-html', function() {
  gulp.src('src/*.html').pipe(minifyHTML())
  .pipe(gulp.dest('./public/'));
});

gulp.task('build-useref', function() {
  gulp.src('src/*.html').pipe(minifyHTML())
  .pipe(gulp.dest('./public/'));
});

gulp.task('build-es', function() {
  gulp.src('src/es/*.html')
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
    }}))
  .pipe(useref())
  .pipe(gulpif('*.css', uncss({
    html: ['src/es/*.html']
  })))
  .pipe(gulpif('*.css', minifycss()))
  .pipe(gulpif('*.css', minifycss()))
  .pipe(gulp.dest('public/es'));
});

gulp.task('build-en', function() {
  gulp.src('src/en/*.html')
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
    }}))
  .pipe(useref())
  .pipe(gulpif('*.css', uncss({
    html: ['src/en/*.html']
  })))
  .pipe(gulpif('*.css', minifycss()))
  .pipe(gulpif('*.css', minifycss()))
  .pipe(gulp.dest('public/en'));
});

gulp.task('dest-php', function(){
   //process.stdout.write("Enter here");
   var phpSrc = 'src/scripts/**/*.php';
   return gulp.src(phpSrc)
   .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
    }}))
  .pipe(gulp.dest('public/scripts/'))
});

gulp.task('default', ['clean','images','icons','build-es','build-en','dest-php'],function(){
  return gulp.src('src/*.html')
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
    }}))
  .pipe(useref())
  .pipe(gulpif('*.js', jshint()))
  .pipe(gulpif('*.js', jshint.reporter('default')))
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulp.dest('public'));
});


