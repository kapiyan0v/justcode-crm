

const { series, watch, src, dest, parallel } = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')(require('node-sass'))
// const del = require('del')
// Статичный сервер
function server(cb) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    watch('./*.html', browserSyncReload)
    watch('./pages/*.html', browserSyncReload)
    watch('./sass/*.scss', series(styles, browserSyncReload))
    cb()
}
function browserSyncReload(done) {
    browserSync.reload()
    done()
}
// Задача перевода scss в css
function styles() {
    return src('./sass/**/*.scss').pipe(sass().on('error',sass.logError)).pipe(dest('./css/'))
}
// задача по обнулению css файла
// function clean() {
//     return del([
//         './css/main.css'
//     ])
// }
exports.default = parallel(server, styles)