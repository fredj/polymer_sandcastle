var gulp = require('gulp');
var polybuild = require('polybuild');
var rename = require('gulp-rename');

gulp.task('build', function() {
  return gulp.src('app/index.html')
    .pipe(polybuild({maximumCrush: true}))
    .pipe(rename(function(path) {
      // rename index.build.html to index.html
      if (path.extname === '.html') {
        path.basename = 'index';
      }
    }))
    .pipe(gulp.dest('dist'));
})
