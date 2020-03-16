const { src, dest, parallel, series, watch } = require("gulp");
const del = require("del");
const ts = require("gulp-typescript");

function cleanDist(cb) {
    del.sync(["dist/**"]);
    cb();
}//cleanDist


function compileTs(cb) {
    const tsProject = ts.createProject("tsconfig.json");
    tsProject.src()
        .pipe(tsProject())
        .on('error', err => {
            cb();
        })
        .pipe(dest("dist"))
        .on('end', cb);
}//compileTs


function watchAndReCompile(cb) {
    watch(['src/**/*.ts', 'tsconfig.json'], { ignoreInitial: true }, series(compileTs)).on('end', cb);
}//watchAndReCompile

exports.default = series(cleanDist, compileTs, watchAndReCompile);

