const { src, dest, watch, series, parallel } = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const concat = require('gulp-concat');

const paths = {
    imagenes : 'src/img/**/*',
    scss : 'src/scss/**/*',
    js : 'src/js/**/*'
}

function css(done) {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./css'))
    done();
};

function mcss(done) {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./css'))
    done();
}

function javascript(done) {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./js'))
    done();
}

function imagenes (done) {
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./img'))

    done();
}

function versionWebp (done) {
    return src('src/img/**/*')
        .pipe(webp())
        .pipe(dest('./img'))
    
    done();
}

function watchFiles() {
    watch('src/scss/**/*.scss', mcss) //* busaca dentro de la carpeta actual. **/* ya busca todos los archivos de todas las carpetas hijos
    watch(paths.js, javascript)
}

exports.css = css;
exports.mcss = mcss;
exports.watchFiles = watchFiles;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.javascript = javascript

exports.default = series(javascript, imagenes, versionWebp, watchFiles)