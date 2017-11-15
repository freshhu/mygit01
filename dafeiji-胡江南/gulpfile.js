
//导入gulp
var gulp = require("gulp");

//使用插件：导入插件
//压缩js：gulp-uglify
var uglify = require("gulp-uglify");
var babel = require('gulp-babel'); //es6转es5

gulp.task("jsTask",function(){
	
	gulp.src("dafeiji-origin/js/enemy.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe( uglify() )
		.pipe( gulp.dest("dafeiji-now/js") );


})

//默认任务
gulp.task("default",["jsTask"]);
