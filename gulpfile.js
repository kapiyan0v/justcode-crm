

const { series, watch, src, dest, parallel } = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')(require('node-sass'))

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

function styles() {
    return src('./sass/**/*.scss').pipe(sass().on('error',sass.logError)).pipe(dest('./css/'))
}

exports.default = parallel(server, styles)