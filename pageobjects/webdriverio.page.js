//webdriverio.page.js
var Page=require('./page')
var webdriverioPage = Object.create(Page, {
  
    guideLink: {get: function(){ return browser.element('a[href="/guide.html"]')}},
    apiLink: {get: function(){ return browser.element('*=API')}},
    contributingLink: {get: function(){ return browser.element('a[href="/contribute.html"]')}},
    searchControl: {get: function(){ return browser.element('input.ds-input')}},
    //searchTextBox: {get: function(){ return browser.element('input[name="search"]')}},
 
});

module.exports = webdriverioPage;