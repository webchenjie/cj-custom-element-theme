const path = require('path')
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const cssWrap = require('gulp-css-wrap')

const customThemeName = '.kf' // 添加的命名空间

gulp.task('css-wrap', function() {
	return gulp.src(path.resolve('./theme/index.css')) // 找需要添加命名空间的css文件，支持正则表达式
		.pipe(cssWrap({ selector: customThemeName })) // 添加命名空间
		.pipe(cleanCSS()) // 优化 css 如压缩等
		.pipe(gulp.dest('dist')) // 输出目录
})
