const gulp = require('gulp');
const path = require('path');
// const pump = require('pump');
// const csso = require('gulp-csso');
const sass = require('gulp-sass');
const es = require('event-stream');
const rename = require('gulp-rename');
// const nodemon = require('gulp-nodemon');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const autoprefixer = require('gulp-autoprefixer');

const CONFIG = {
  js: {
    inputDir: './assets/js/src/pages/',
    outputDir: './assets/js/dist',
    pages: ['landing.js'],
  },
  css: {
    sassGlob: './assets/css/src/**/*.sass',
    outputDir: './assets/css/dist/',
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
      .pipe(gulp.dest(CONFIG.js.outputDir));
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
  .pipe(gulp.dest(CONFIG.css.outputDir));
});


/**
 * Run necessary build tasks, then watch for changes
 */
gulp.task('watch',['bundle-js', 'build-css-development'], function() {

    gulp.watch('./assets/js/src/pages/**', ['bundle-js']);

    gulp.watch(CONFIG.css.sassGlob, ['build-css-development']);

});
