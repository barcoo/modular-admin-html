var path = require('path');
var config = require('../config');
var debug = require('gulp-debug');

module.exports.task = function(gulp, plugins, paths) {

	gulp.src(paths.app.styles)
    .pipe(debug({title: 'app-styles'}))
		.pipe(plugins.concat('app.scss'))
		.pipe(
			plugins.sass({
				includePaths: [
					path.resolve( config.srcDir ),
					path.resolve( config.npmDir ),
					path.resolve( config.bowerDir ),
				]
			})
			.on('error', plugins.sass.logError)
		)
		.pipe(plugins.autoprefixer())
		.pipe(gulp.dest(config.destDir + '/css'));
};
