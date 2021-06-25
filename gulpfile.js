const gulp = require("gulp");
const gulp_shell = require("gulp-shell");

//compile golang
gulp.task(
  "go-path",
  gulp_shell.task(["export GOPATH=/home/aybjax/dox/golang_rest/roman_numerals"])
);

gulp.task(
  "install-binary",
  gulp.series("go-path"),
  gulp_shell.task(["go install github.com/aybjax/server"])
);

// tell install-binary is dep for restart-supervisor
gulp.task(
  "restart-supervisor",
  gulp.series("install-binary"),
  gulp_shell.task(["sudo supervisorctl restart goserver"])
);

gulp.task("watch", () => {
  // watch source code change
  gulp.watch(
    "./src/github.com/aybjax/server/*",
    gulp.series("install-binary", "restart-supervisor")
  );
});

gulp.task("default", gulp.series("watch"));
