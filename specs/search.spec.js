var assert = require ('assert');
var expect = require('chai').expect;
var WebdriverIOPage = require('../pageobjects/webdriverio.page');

describe('search functionallity', function(){
	it('should exist a search control', function(){
		browser.url('/');
		expect(WebdriverIOPage.searchControl.isExisting()).to.be.true;

	});

	it('should display the suggestion control after look for a word', function(){
		browser.url('/');
		WebdriverIOPage.searchControl.setValue('mocha');
		browser.waitForExist('#ds-dataset-1', 1000000);
		browser.isExisting('#ds-dataset-1');
		//WebdriverIOPage.searchControl.keys('enter');
	});
});