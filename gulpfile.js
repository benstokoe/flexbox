var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function() {
    gulp.watch('./sass/*', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
