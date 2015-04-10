var changed = require('gulp-changed');
var gulp = require('gulp');
var config = require('../config').scripts;
var browserSync  = require('browser-sync');

gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
