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
        .js.pipe(dest("dist"));
    cb();
}//compileTs


function watchAndReCompile(cb) {
    watch('src/**/*.ts', { ignoreInitial: true }, series(compileTs));
    cb();
}//watchAndReCompile

exports.default = series(cleanDist, compileTs, watchAndReCompile);

