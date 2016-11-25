var path = require('path');

var config = require('../config');

var rootDir 	= config.rootDir;
var srcDir 		= config.srcDir;
var destDir 	= config.destDir;

/***********************************************
*		Application script files
************************************************/

	/*
		Specifiing the source this way means:

		"take all .js files except /_main/main.js file
		and then take /_main/main.js file"

		This ensures that main.js file is loaded in the end.
		Ignore context.js files.
	*/

	exports.scripts = [
		srcDir + "/config.js",
		"!" + srcDir + "/_vendor/**"
	];

/***********************************************
*		Application style files
************************************************/

	exports.styles = [
		srcDir + "/_main.scss",
    srcDir + "/_variables.scss",
    srcDir + "/_common/!(animations|chart|images-container|logo|nprogress)/**/*.scss",
    srcDir + "/app/_common/!(editor)/!(customize)/*.scss",
    srcDir + "/app/_common/!(editor)/*.scss",
    srcDir + "/app/app.scss"
	];

/***********************************************
*		Application theme files
************************************************/

	exports.themes = srcDir + "/_themes/blue-theme.scss";

/***********************************************
*		Application template files
************************************************/

	/*
		All template files in application.
		Those should registered as handlebars partials
		in order to use feature like includes or layouts
	*/

  exports.templates = [];
	// exports.templates = srcDir + "/**/*.hbs";

/***********************************************
*		Application page files
************************************************/

	/*
		Each page file represents a page which will be rendered into .html page.
		Pages can extend layouts.

	*/

  exports.pages = [];
	// exports.pages = srcDir + "/**/*-page.hbs";

/***********************************************
*		Application layout files
************************************************/

	/*
		Layouts are used for "wrapping" the content of individual pages with common elements,
		such as the <head></head> and footer sections, which usually contain necessities
		such as <link> and <script> tags.
	*/

  exports.layouts = [];
	// exports.layouts = srcDir + "/**/*-layout.hbs";

/***********************************************
*  	Application handlebars helpers files
************************************************/

	/*
		Handlebars helpers files
		Read more: http://handlebarsjs.com/block_helpers.html
	*/

  exports.helpers = [];
	// exports.helpers = [
	// 	srcDir + "/**/*-helper.js",
	// 	rootDir + '/node_modules/handlebars-layouts/index.js',
	// ];



/***********************************************
*		Application asset files
************************************************/

  exports.assets = [];
	// exports.assets = srcDir + "/_assets/**/*";
