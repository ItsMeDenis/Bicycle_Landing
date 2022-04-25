export const copy = () => {
	return app.gulp.src(app.path.src.files) // получаем доступ к файлам и папкам
		.pipe(app.gulp.dest(app.path.build.files)) // переносим в пункт назначения dest 
}

