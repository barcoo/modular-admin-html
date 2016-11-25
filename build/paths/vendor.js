var config = require('../config');

var rootDir 		= config.rootDir;
var srcDir 		= config.srcDir;
var destDir 		= config.destDir;
var bowerDir 		= config.bowerDir;



/*******************************************************************************

	...Few words about vendor files

	For not including all scripts manually we use plugin
	called main-bower-files.

	It returns glob of files based on "main" field in vendor packages "bower.json".
	Orders of files will be as per our bower.json, so if you have some libraries
	that should be loaded on first, just move them upwards in project "bower.json".

	If any of files that you want to access is not listed in vendor package, you can
	define files for that package manually in bower.json "overrides" field.

	For more docs visit.
	https://github.com/ck86/main-bower-files#main-bower-files

	If for any reasons you don't like this approach, and want list your files
	manually, you can just pass manual glob string or array to "src" option

	eg.

	export.scripts: [
		bowerDir + "jquery/dist/jquery.js",
		bowerDir + "angular/jquery.js",
	]

********************************************************************************/



/***********************************************
*		Vendor script files
************************************************/


	exports.scripts = [
		bowerDir + "/jquery/dist/jquery.js",
    bowerDir + "/tether/dist/js/tether.js",
    bowerDir + "/metisMenu/dist/metisMenu.js",
    bowerDir + "/bootstrap/dist/js/bootstrap.js",
    bowerDir + "/responsive-bootstrap-toolkit/dist/bootstrap-toolkit.js",
	];


/***********************************************
*		Vendor style files
************************************************/

	exports.styles = [
    bowerDir + "/bootstrap/dist/css/bootstrap.css",
    bowerDir + "/font-awesome/css/font-awesome.css",
    bowerDir + "/metisMenu/dist/metisMenu.css",
    bowerDir + "/tether/dist/css/tether.css",
    bowerDir + "/tether/dist/css/tether-theme-basic.css"
	];


/***********************************************
*		Vendor assets files
************************************************/

	/*
		All files which are not .js, .css, .less and fonts
	*/

	exports.assets = [];

/***********************************************
*		Vendor font files
************************************************/


	exports.fonts = [
  	bowerDir + "/font-awesome/fonts/fontawesome-webfont.eot",
    bowerDir + "/font-awesome/fonts/fontawesome-webfont.svg"
  ];
