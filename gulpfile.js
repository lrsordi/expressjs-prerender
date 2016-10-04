var gulp = require('gulp');  
var nodemon = require('gulp-nodemon');  
var sass = require('gulp-ruby-sass');  
var autoprefixer = require('gulp-autoprefixer');  
var jshint = require('gulp-jshint');  
var livereload = require('gulp-livereload'); 

// Gulp Dependencies
var rename = require('gulp-rename');
var st = require('st');

// Build Dependencies
var preprocess = require('gulp-preprocess');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var resolutions = require('browserify-resolutions');
var uglify = require('gulp-uglify');

var copy = require('gulp-copy');
var clean = require('gulp-clean');
var replace = require('gulp-replace');

// Style Dependencies
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');



/**
 * DEV ENVIRONMENT
 */

gulp.task('browserify-client', function() {
  var b = browserify({
    entries : 'app/scripts/index.js',
    debug: true,
  });

  return b
    .transform("babelify", {})
    .plugin(resolutions, ['react'])
    .bundle()
    .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
    .pipe(source('app/scripts/index.js'))
    .pipe(buffer())
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('app/public/scripts'))
    .pipe(livereload());
});

gulp.task('styles', function() {
  return gulp.src('app/styles/main.less')
    .pipe(less())
    .pipe(prefix({ cascade: true }))
    .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })    
    .pipe(rename('styles.css'))
    //.pipe(gulp.dest('build'))
    .pipe(gulp.dest('app/public/styles'))
    .pipe(livereload());
});



gulp.task('tpl',function(){  
    return gulp.src('app/views/**/*.tpl')
    .pipe(livereload());
});

gulp.task('html',function(){  
    return gulp.src('app/index.html')
    .pipe(livereload());
});


gulp.task('watch', function() {  
    livereload.listen();
	  gulp.watch(['app/**/*.js',  '!public/scripts/scripts.js'], ['browserify-client']);
	  gulp.watch(['app/**/*.less', '!public/styles/styles.css'], ['styles']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/views/**/*', ['tpl']);
});


gulp.task('server',function(){  
    nodemon({
        'script': 'server.js',
        'ignore': 'public/js/*.js'
    });
});

gulp.task('serve', ['server','watch']);  


gulp.task('build-hlg', function() {
  process.env.NODE_ENV = 'development';
  gulp.run('build');
});



/** 
 * PRODUCTION ENV
 */

gulp.task('prepare-build',['clean','uglify','minify'], function(){
  return gulp.src(["./server.js", "app/public/fonts/**","app/public/images/**"])
    .pipe(copy("./dist"));
});


gulp.task('build-prd', function() {
  process.env.NODE_ENV = 'production';
  gulp.run('build');
});


gulp.task('build', ['prepare-build'], function(){
  var num = new Date().getTime();
  gulp.src('./dist/public/scripts/scripts.min.js')
    .pipe(rename("scripts.min"+num.toString()+".js"))
    .pipe(gulp.dest("./dist/public/scripts"));

  gulp.src('./dist/public/styles/styles.min.css')
    .pipe(rename("styles.min"+num.toString()+".css"))
    .pipe(gulp.dest("./dist/public/styles"));    

  gulp.src(["./dist/public/scripts/scripts.min.js", "./dist/public/styles/styles.min.css", "./dist/public/styles/styles.css"])
    .pipe(clean());

  gulp.src(['./app/index.html'])
    .pipe(preprocess())
    .pipe(replace("scripts.js","scripts.min"+num.toString()+".js"))
    .pipe(replace("styles.css","styles.min"+num.toString()+".css"))
    .pipe(gulp.dest("./dist"));
});



gulp.task('default', ['browserify-client', 'styles', 'server', 'watch']);



