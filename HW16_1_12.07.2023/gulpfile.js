// import pkg from 'gulp';
// import watch from 'gulp-watch';
// import uglify from 'gulp-uglify';
// import gulpBabel from 'gulp-babel';
// import gulpPug from 'gulp-pug';
// import htmlmin from 'gulp-htmlmin';
// import autoprefixer from 'gulp-autoprefixer';

// const { src, dest } = pkg;

// export function puggy() {
//     return src('./public/*.pug')
//       .pipe(gulpPug())
//       .pipe(dest('dist'));
//   }

// gulp.task('scripts', () => {
//     return gulp.src('./public/*.js')
//       .pipe(gulpBabel({ presets: ['@babel/preset-env'] }))
//       .pipe(uglify())
//       .pipe(gulp.dest('dist'));
//   });
  
// gulp.task('html', () => {
//     return gulp.src('./public/*.html')
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('styles', () => {
//     return gulp.src('./public/*.css')
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('watch', () => {
//     gulp.watch('./public/*.js', gulp.series('scripts'));
//     gulp.watch('./public/*.html', gulp.series('html'));
//     gulp.watch('./public/*.css', gulp.series('styles'));
// });

// gulp.task('default', gulp.series('scripts', 'html', 'styles', 'watch'));

import pkg from 'gulp';
import gulpBabel from 'gulp-babel';
import gulpPug from 'gulp-pug';
import htmlmin from 'gulp-htmlmin';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify';

const { src, dest, series, watch } = pkg;

export function puggy() {
  return src('./public/*.pug')
    .pipe(gulpPug())
    .pipe(dest('dist'));
}

export function scripts() {
  return src('./public/*.js')
    .pipe(gulpBabel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(dest('dist'));
}

export function html() {
  return src('./public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

export function styles() {
  return src('./public/*.css')
    .pipe(autoprefixer())
    .pipe(dest('dist'));
}

export function watchFiles() {
  watch('./public/*.js', series(scripts));
  watch('./public/*.html', series(html));
  watch('./public/*.css', series(styles));
}

export default series(scripts, html, styles, watchFiles);
