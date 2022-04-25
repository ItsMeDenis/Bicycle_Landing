import webpack from "webpack-stream";

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS",
					message: "Error: <%= error.message %>"
				}))
		) // подключаем уведомления об ошибках 

		.pipe(
			webpack({
				mode: app.isBuild ? "production" : "development",
				output: {
					filename: 'app.min.js',
				}
			})
		)
		.pipe(app.gulp.dest(app.path.build.js)) // выгружаем файлы в папку с результатом 
		.pipe(app.plugins.browsersync.stream()); // обновляем браузер
}