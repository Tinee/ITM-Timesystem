var gulp = require('gulp');
var webserver = require('gulp-webserver');


var assetsDev = 'dev/';
var assetsProd = 'www/assets/';

/* CSS */
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssClean = require('gulp-clean-css');

gulp.task('build-css', function () {
  return gulp.src(assetsDev + 'scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(cssClean({ compatibility: 'ie8' }))
    .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      fallback: "Index.html"
    }));
});

gulp.task('watch', function () {
  gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
});

gulp.task('default', ['watch', 'build-css']);