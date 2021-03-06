/*global jasmine, require, process*/
const Jasmine = require('jasmine'),
	SpecReporter = require('jasmine-spec-reporter').SpecReporter,
	jrunner = new Jasmine(),
	runJasmine = function () {
		'use strict';
		let filter;
		process.argv.slice(2).forEach(option => {
			if (option === 'full') {
				jasmine.getEnv().clearReporters();
				jasmine.getEnv().addReporter(new SpecReporter({
					displayStacktrace: 'all'
				}));
			}
			if (option.match('^filter=')) {
				filter = option.match('^filter=(.*)')[1];
			}
		});
		jrunner.loadConfig({
			'spec_dir': 'specs',
			'spec_files': [
				'core/**/*[sS]pec.js'
			],
			'helpers': [
				'helpers/**/*.js'
			]
		});
		jrunner.execute(undefined, filter);
	};

runJasmine();
