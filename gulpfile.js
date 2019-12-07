const gulp = require('gulp');
const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync');

function css() {
    return src('./css/*')
        .pipe(sass())
        .pipe(dest('css/'));
}

function html() {
    return src('./index.html')
        .pipe(dest('build/'));
}

function images() {
    return src('./images/*')
        .pipe(dest('build/images/'));
}

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        port: 3000
    });

    done();
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}


function watchFiles(done) {
    gulp.watch(
        './css/*',
        gulp.series(css, browserSyncReload)
    );   
    done();

    gulp.watch(
        './*.html',
        gulp.series(html, browserSyncReload)
    );
    done();
}

const build = gulp.series(css, html, images);
const watch = gulp.parallel(watchFiles, browserSync);
const buildAndWatch = gulp.series(build, watch);

exports.build = build;
exports.css = css;
exports.watch = watch;

exports.default = buildAndWatch;