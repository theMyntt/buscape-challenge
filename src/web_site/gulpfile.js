const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const connect = require("gulp-connect");

const paths = {
  html: ["*.html", "src/controllers/**/*.html", "src/components/**/*.html"],
  scripts: ["src/app.js", "src/controllers/**/*.js", "src/components/**/*.js"],
  styles: "src/styles/**/*.scss",
};

gulp.task("html", () =>
  gulp
    .src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload()),
);

gulp.task("scripts", () =>
  gulp
    .src(paths.scripts)
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload()),
);

gulp.task("scss", () =>
  gulp
    .src(paths.styles)
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("main.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload()),
);

gulp.task("angular", () =>
  gulp.src("node_modules/angular/angular.min.js").pipe(gulp.dest("dist/libs")),
);

gulp.task("serve", () =>
  connect.server({
    root: "dist",
    livereload: true,
    port: 8080,
  }),
);

gulp.task("watch", () => {
  gulp.watch(paths.html, gulp.series("html"));
  gulp.watch(paths.scripts, gulp.series("scripts"));
  gulp.watch(paths.styles, gulp.series("scss"));
});

gulp.task(
  "default",
  gulp.series(
    gulp.parallel("html", "scripts", "scss", "angular"),
    gulp.parallel("serve", "watch"),
  ),
);
