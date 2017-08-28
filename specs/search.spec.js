var assert = require ('assert');
var expect = require('chai').expect;
var WebdriverIOPage = require('../pageobjects/webdriverio.page');

describe('search functionallity', function(){
	it('should exist a search control', function(){
		browser.url('/');
		//browser.waitForElementPresent('WebdriverIOPage.searchControl',9999999);
		expect(WebdriverIOPage.searchControl.isExisting()).to.be.true;

	});

	it('should display the suggestion control after look for a word', function(){
 		browser.url('/');
 		WebdriverIOPage.searchControl.setValue('mocha');
 		browser.isExisting('WebdriverIOPage.suggestionControl');
	});

	it('should display the right page after look for a word', function(){
		browser.url('/');
		WebdriverIOPage.searchControl.setValue('selectors');
		WebdriverIOPage.searchControl.keys('Enter');
		expect(WebdriverIOPage.searchControl.isExisting()).to.be.true;
	});

	it('should display an error text after looking an unexisting content', function(){
		browser.url('/');
		WebdriverIOPage.searchControl.setValue('ññññ');
		expect(' No results found for query').to.be.exist;
	})

});