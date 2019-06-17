const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function check(cb) {
    console.log('it is running!!!');
    cb();
}

function static() {
    return gulp.src('src/static/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

function img() {
    return gulp.src('src/media/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/media'))
    .pipe(browserSync.stream());
}

function style() {
    return gulp.src('src/style/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/style'))
    .pipe(browserSync.stream());
}

function script() {
    return gulp.src('src/script/*.js')
    .pipe(gulp.dest('dist/script'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    gulp.watch('src/static/*.html').on('change', browserSync.reload)
    gulp.watch('src/media/*.jpg', img)
    gulp.watch('src/style/*.scss', style)
    gulp.watch('src/script/*.js').on('change', browserSync.reload)
}

exports.static = static;
exports.img = img;
exports.style = style;
exports.script = script;
gulp.task('default', gulp.series(static, img, style, script));
// exports.build = series(static, img, style, script);
exports.watch = watch;