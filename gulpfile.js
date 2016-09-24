const gulp = require('gulp');
const tsConfig = require('tsconfig-glob');

gulp.task('tsconfig', () => {  
    return tsConfig({
        configPath: ".",
        cwd: process.cwd(),
        indent: 2
    });
});

gulp.task('watch', function () {  
    const tsConfigFile = require('./tsconfig.json');
    gulp.watch(tsConfigFile.filesGlob, ['tsconfig'])
      .on('change', reportChange);
});

function reportChange(event) {  
    console.log(`File ${event.path} was ${event.type}, running tasks...`);
}