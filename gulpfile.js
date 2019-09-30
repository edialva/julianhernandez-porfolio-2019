const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const es = require('event-stream');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const CONFIG = {
  js: {
    inputDir: './assets/js/src/pages/',
    outputDir: './assets/js/dist',
    pages: ['landing.js'],
  },
  css: {
    sassGlob: './assets/css/src/[^_]*',
    outputDir: './assets/css/dist/',
  },
  html: {
    pugGlob: './views/*.pug',
  }
};


/**
 * Bundle all javascript files
 */
gulp.task('bundle-js', function(){

  let tasks = CONFIG.js.pages.map(function(file){
    let srcPath = CONFIG.js.inputDir + file;
    return browserify({entries: [srcPath]})
      .bundle()
      .pipe(source(file))
      .pipe(rename({
        extname: '.bundle.js'
      }))
      .pipe(gulp.dest(CONFIG.js.outputDir))
      .pipe(browserSync.stream());
  });

  // create a merged stream
  return es.merge.apply(null, tasks);

});

/**
 * Minify css
 */
gulp.task('minify-css', function () {
    return gulp.src(CONFIG.css.compiled)
      .pipe(csso())
      .pipe(gulp.dest(CONFIG.css.minifiedDir));
});

/**
 * Handle all stylesheet build processes (compile sass, and autoprefix)
 */
gulp.task('build-css-development', function(){
  return gulp.src(CONFIG.css.sassGlob)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest(CONFIG.css.outputDir))
  .pipe(browserSync.stream());
});

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "julian.local",
//     });
// });

// Static Server + watching scss/html files
gulp.task('serve', ['bundle-js', 'build-css-development'], function() {

    browserSync.init({
        proxy: "julian.local",
    });

    gulp.watch('./assets/js/src/pages/**', ['bundle-js']);

    gulp.watch('./assets/css/src/**/*', ['build-css-development']);

    gulp.watch(CONFIG.html.pugGlob).on('change', browserSync.reload);

});

/**
 * Run necessary build tasks, then watch for changes
 */
gulp.task('watch',['bundle-js', 'build-css-development'], function() {

    gulp.watch('./assets/js/src/pages/**', ['bundle-js']);

    gulp.watch(CONFIG.css.sassGlob, ['build-css-development']);

});
