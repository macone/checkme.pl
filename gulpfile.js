var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({errLogToConsole: true,
            outputStyle: 'expanded'})
                .on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch',['sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
});


gulp.task('check', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});
