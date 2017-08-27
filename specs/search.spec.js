var assert = require ('assert');
var expect = require('chai').expect;
var WebdriverIOPage = require('../pageobjects/webdriverio.page');

describe('search functionallity', function(){
	it('should exist a search control', function(){
		browser.url('/');
		expect(WebdriverIOPage.searchControl.isExisting()).to.be.true;

	});

	it('should display the right page after look for a word', function(){
		browser.url('/');
		WebdriverIOPage.searchControl.setValue('selectors');
		WebdriverIOPage.searchControl.keys('Enter');
		expect(WebdriverIOPage.searchControl.isExisting()).to.be.true;
	});
});