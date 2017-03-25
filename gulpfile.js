var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var juice = require('premailer-gulp-juice'); //for inline css
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
require('dotenv').load({ silent: true });// Load vars from .env files into ENV

//var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    console.log('jekyll-build =>');
    browserSync.notify(messages.jekyllBuild);
    //return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
    return cp.spawn( 'C:\\tools\\ruby23\\bin\\jekyll.bat' , ['build'], {stdio: 'inherit'})  
        .on('error', (error) => gutil.log(gutil.colors.red(error.message))) 
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'js_script', 'jekyll-build'], function() {
    browserSync.init({
        server: {
            baseDir: './_site'            
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_sass/*.scss')
            // .on('error', function (err) {
            // console.error('Error!', err.message);
            // })
        //Initializes sourcemaps
        //.pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['_sass'],
            onError: browserSync.notify()}).on('error', sass.logError))
        //.on('error', sass.logError))
        // .pipe(sass())
        //.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('js_script', function() {
  return gulp.src(['./_js/jquery.js', './_js/*.js'])
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  //.pipe(browserSync.reload({stream:true}))
  //.pipe(gulp.dest(['./assets/js/', './_site/assets/js/']));
  .pipe(gulp.dest('./assets/js/'))
  .pipe(gulp.dest('./_site/assets/js/'));
});
/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('./_sass/*.scss', ['sass']);
    gulp.watch('./_js/*.js', ['js_script']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*.html'], ['jekyll-rebuild']);
});



gulp.task('default', ['browser-sync', 'watch']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */

//*****************************************************************Dist
// gulp.task('dist', [
//     'clean',
//     'docs-compile',
//     'html-compile',
//     'img-optimize',
//     'css-compile',
//     'js-transpile'
// ], function() { gulp.start(['zip']); });

// gulp.task('in', function(){
//   gulp.src('./_site/email26-susy.html')
//     .pipe(juice({}))
//     .pipe(gulp.dest('./_site/mail.inliner.html'));
// });

// gulp.task('js-transpile', function() {
//   gulp.src('./_js/social-buttons.js')
//   //.pipe(concat('all.min.js'))
//   //.pipe(uglify())
//   //.pipe(browserSync.reload({stream:true}))
//   .pipe(gulp.dest('_site/assets/js/'));
// });

// gulp.task('css-compile', function() {
//   gulp.src('./_js/social-buttons.js')
//   //.pipe(concat('all.min.js'))
//   //.pipe(uglify())
//   //.pipe(browserSync.reload({stream:true}))
//   .pipe(gulp.dest('_site/assets/js/'));
// });

// gulp.task('img-optimize', function() {
//   gulp.src('./_js/social-buttons.js')
//   //.pipe(concat('all.min.js'))
//   //.pipe(uglify())
//   //.pipe(browserSync.reload({stream:true}))
//   .pipe(gulp.dest('_site/assets/js/'));
// });

// gulp.task('html-compile', function() {
//   gulp.src('./_js/social-buttons.js')
//   //.pipe(concat('all.min.js'))
//   //.pipe(uglify())
//   //.pipe(browserSync.reload({stream:true}))
//   .pipe(gulp.dest('_site/assets/js/'));
// });

// gulp.task('docs-compile', function() {
//   gulp.src('./_js/social-buttons.js')
//   //.pipe(concat('all.min.js'))
//   //.pipe(uglify())
//   //.pipe(browserSync.reload({stream:true}))
//   .pipe(gulp.dest('_site/assets/js/'));
// });

// gulp.task('clean', function() {
//   gulp.src('./_js/social-buttons.js')
//   //.pipe(concat('all.min.js'))
//   //.pipe(uglify())
//   //.pipe(browserSync.reload({stream:true}))
//   .pipe(gulp.dest('_site/assets/js/'));
// });

// gulp.task('zip', function() {
//   gulp.src('./_js/social-buttons.js')
//   //.pipe(concat('all.min.js'))
//   //.pipe(uglify())
//   //.pipe(browserSync.reload({stream:true}))
//   .pipe(gulp.dest('_site/assets/js/'));
// });
