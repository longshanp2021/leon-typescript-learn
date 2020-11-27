const { src, dest, parallel, series, watch } = require("gulp");
const del = require("del");
const ts = require("gulp-typescript");

function cleanDist(cb) {
    del.sync(["dist/**"]);
    cb();
}


function compileTs(cb) {
    const tsProject = ts.createProject("tsconfig.json");
    tsProject.src()
        .pipe(tsProject())
        .on('error', err => {
            cb();
        })
        .pipe(dest("dist"))
        .on('end', cb);
}

function copyJavscript(cb) {
    src("src/**/*.js")
        .on('error', cb)
        .pipe(dest("dist")).on('end', cb);
}


function watchAndReCompile(cb) {
    watch(['src/**/*.ts', 'tsconfig.json'], { ignoreInitial: true }, series(compileTs, copyJavscript)).on('end', cb);
}

exports.default = series(cleanDist, compileTs, copyJavscript, watchAndReCompile);

