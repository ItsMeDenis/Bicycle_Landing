import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';// minimaze css
import webpcss from 'gulp-webpcss'; // вывод webp img
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиазапросов

const saas = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>"
				}))
		)
		.pipe(app.plugins.replace(/@img\//g, '../images/'))
		.pipe(saas({
			outputStyle: 'expanded'
		}))

		// группировка медиа-запросов
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupCssMediaQueries()
			)
		)
		//----------------------------------------

		// Работа с webp изображениями 
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss(
					{
						webpClass: ".webp",
						noWebpClass: ".no-webp"
					}
				)
			)
		)
		//-------------------------------------

		// Автопрефиксер и его настройки 
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: true
				})
			)
		)
		//----------------------------------------


		// Генерирует несжатый файл, закоментировать если не нужно его генерить
		.pipe(app.gulp.dest(app.path.build.css))
		// ---------------------------------------

		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss()
			)
		)// сжимает файл сss

		.pipe(rename({
			extname: ".min.css"
		}))

		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
}