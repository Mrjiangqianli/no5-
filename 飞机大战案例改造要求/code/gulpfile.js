/**
 * Created by Administrator on 2017/7/4 0004.
 */

/*var obj = {
    removeComments: true, //清除 HTML 注释
    collapseWhitespace: true, //压缩 HTML
    collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> <input checked/> ==>

    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的 type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的 type="text/css"
    minifyJS: true, //压缩页面 JS
    minifyCSS: true //压缩页面 CSS
};*/


/*var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
gulp.task('cssTask',function () {
    gulp.src('css/!*')
        .pipe(minifyCss())
        .pipe(gulp.dest('src/css'));
});
gulp.task('default',["cssTask"]);*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.task('jsTask',function () {
    gulp.src('js/bullet.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/js'));
});
gulp.task('default',["jsTask"]);
