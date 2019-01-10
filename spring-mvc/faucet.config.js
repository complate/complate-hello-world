"use strict";

module.exports = {
	watchDirs: ["./views"],
	js: [{
		source: "./src/main/views/index.js",
		target: "./src/main/resources/templates/complate/views.js",
		exports: "render",
		esnext: {
			exclude: ["classnames"]
		},
		jsx: { pragma: "createElement" }
	}]
};
