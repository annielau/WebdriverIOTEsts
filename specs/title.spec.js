var assert = require ('assert');
var expect = require('chai').expect;
var WebdriverIOPage = require('../pageobjects/webdriverio.page');

describe('webdriver.io test menue options', function (){
	it('should have the right Homepage title', function(){
		browser.url('/');
		var title= browser.getTitle();
		assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
	});

	it ('should have the right Guide page title', function(){
		WebdriverIOPage.guideLink.click();
		var title= browser.getTitle();
		assert.equal(title,'WebdriverIO - Developer Guide');
	});

	it ('should have the right API page title', function(){
		WebdriverIOPage.apiLink.click();
		var title= browser.getTitle();
		assert.equal(title,'WebdriverIO - API Docs');
	});

	it ('should have the right Contributing page title', function(){
		WebdriverIOPage.contributingLink.click();
		var title= browser.getTitle();
		assert.equal(title,'WebdriverIO - Contributing');
	});
});


