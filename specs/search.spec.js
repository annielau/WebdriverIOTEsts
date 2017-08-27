var assert = require ('assert');
var expect = require('chai').expect;
var WebdriverIOPage = require('../pageobjects/webdriverio.page');

describe('search functionallity', function(){
	it('should exist a search control', function(){
		browser.url('/');
		//WebdriverIOPage.searchControl.isExisting();
		expect(WebdriverIOPage.searchControl.isExisting()).to.be.true;

	});
});