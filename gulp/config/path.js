//получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;// путь к папке с результатом
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/images/`,// путь изображений
		fonts: `${buildFolder}/fonts/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`, // путь куда передается найденые html
		files: `${buildFolder}/files/`, // путь куда передаються фалы из src/files
	}, //сборка 
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/images/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`, // находим все файлы с разрешением .html в src без учета корневых папок
		files: `${srcFolder}/files/**/*.*`,// / ** говорит о том что мы смотрим все вложенные папки в files *.*- сообщает что мы берем абсолютно файлы с любым названием и расширением
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},// исходные файлы 
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`, // путь служения
	}, // наблюдение  
	clean: buildFolder, // очистка созданной директории 
	buildFolder: buildFolder, // путь к сборке
	srcFolder: srcFolder, // путь к исходным файлам
	rootFolder: rootFolder, // путь или название главной папки (получаем в начале документа)
	ftp: ``, // для доступа к папкам на удаленных серверах
}

