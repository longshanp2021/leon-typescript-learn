const { src, dest, parallel, series, watch } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const del = require("del");


function cleanDist(cb) {
    del.sync(["dist/**"]);
    cb();
}//cleanDist


function compileTs(cb) {
    tsProject.src()
        .pipe(tsProject())
        .on('error', err => {
            cb();
        })
        .js.pipe(dest("dist"))
        .on('end', cb);
}//compileTs


function watchAndReCompile(cb) {
    watch('src/**/*.ts', { ignoreInitial: true }, series(compileTs)).on('end', cb);
}//watchAndReCompile

exports.default = series(cleanDist, compileTs, watchAndReCompile);

