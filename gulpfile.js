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
var uglifyjs = require('gulp-uglifyjs');
var extractor    = require('gulp-extract-sourcemap');
var tojst = require('gulp-tojst');

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
   // .transform("babelify", {})
   // .plugin(resolutions, ['react'])
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('app/public/scripts'))
    .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
    .pipe(livereload());
});

gulp.task('uglify', ['browserify-client'], function() {
  return gulp.src('app/public/scripts/scripts_big.js')
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('app/public/scripts'));
});

gulp.task('styles', function() {
  return gulp.src('app/less/main.less')
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



gulp.task('jst', function () {
  gulp.src('./app/templates/**/*.tpl')
    .pipe(tojst('jst.js', {
      separator: '\n',
      namespace :"templates",
      prettify: true,
      processName : function(templateName){
        // var arrSplit = templateName.split("/");
        // templateName = arrSplit[arrSplit.length-1].replace(".tpl","");

        var arrSplit = [];

        if(templateName.indexOf("\\") != -1){
          arrSplit = templateName.split("\\");
        }
        else {
          arrSplit = templateName.split("/");
        }
        templateName = arrSplit[arrSplit.length-1].replace(".tpl","");
        // console.log(templateName);
        return templateName;
      },
      templateSettings: {
        interpolate: /\{\{(.+?)\}\}/g
      }
    }))
    .pipe(gulp.dest('app/public/templates'));
});

gulp.task('html',function(){
    return gulp.src('app/index.html')
    .pipe(livereload());
});

gulp.task('configjson',function(){
    return gulp.src('config/*.json')
    .pipe(copy("./app/public"))
    .pipe(livereload());
});


gulp.task('watch', function() {
    livereload.listen();
	  gulp.watch(['app/**/*.js',  '!app/public/scripts/scripts.js', '!app/public/scripts/scripts_big.js'], ['browserify-client']);
	  gulp.watch(['app/**/*.less', '!app/public/styles/styles.css'], ['styles']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('config/*.json', ['configjson']);
    gulp.watch('app/templates/**/*', ['jst']);
});


gulp.task('server',function(){
    nodemon({
        'script': 'server.js',
        'ignore': 'public/**/*'
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



gulp.task('default', ['browserify-client', 'jst', 'configjson', 'styles', 'server', 'watch']);
