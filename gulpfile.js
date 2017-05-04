
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMinifier = require('gulp-css');
var spritesmith = require('gulp.spritesmith');


gulp.task('css', function(){
  gulp.src([
    './css/normalize.css',
    './css/foundation.css',
    './css/basics.css',
    './css/menu.css',
    './css/hero.css',
    './css/photo-grid.css',
    './css/modals.css',
    './css/footer.css',
    './css/sprite.css'
  ])
  .pipe(concat('app.css'))
  .pipe(cssMinifier())
  .pipe(gulp.dest('./css'));
});

gulp.task('scripts',function(){
    gulp.src([
      './js/jquery.js',
      './js/fastclick.js',
      './js/foundation.js',
      './js/foundation.equalizer.js',
      './js/foundation.reveal.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});



gulp.task('sprite', function () {
  var spriteData = gulp.src('img/avatars/*.jpg').pipe(spritesmith({
    imgName: '../img/avatars/sprite.jpg',
    cssName: '.sprite.css'
  }));
  return spriteData.pipe(gulp.dest('img'));
  return spriteData.pipe(gulp.dest('css'));
});





gulp.task('watchCSS', function(){
  //
  gulp.watch(['css/**/*.css','js/**/*.js'],['css','scripts']);
});

gulp.task('default',['css','scripts','sprite']);
