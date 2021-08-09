const { series, src, dest, watch } = require('gulp');
const gulp = require('gulp');
const sass = require("gulp-sass")(require("node-sass"));

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

function watchFiles() {
    watch('src/scss/**/*.scss', mcss) //* busaca dentro de la carpeta actual. **/* ya busca todos los archivos de todas las carpetas hijos
}

exports.css = css;
exports.mcss = mcss;
exports.watchFiles = watchFiles;