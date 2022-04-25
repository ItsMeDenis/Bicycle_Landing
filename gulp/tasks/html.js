import fileinclude from "gulp-file-include"; // import lib include
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // webp обертка для картинок
import versionNumber from "gulp-version-number";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "HTML",
					message: "Error: <%= error.message %>"
				}))
		)
		.pipe(fileinclude()) // выполняем действие сборки (соберет index.html с учетом подключенных файлов
		// через синтаксис @@include)

		.pipe(app.plugins.replace(/@img\//g, 'images/'))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpHtmlNosvg()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					'value': '%DT%',
					'append': {
						'key': '_v',
						'cover': 0,
						'to': ['css', 'js',]
					},
					'output': {
						'file': 'gulp/version.json'
					}
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
}