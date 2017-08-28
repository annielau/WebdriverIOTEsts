//webdriverio.page.js
var Page=require('./page')
var webdriverioPage = Object.create(Page, {
  
    homeLink: {get: function(){ return browser.element('a[href="/home.html"]')}},
    guideLink: {get: function(){ return browser.element('a[href="/guide.html"]')}},
    apiLink: {get: function(){ return browser.element('*=API')}},
    contributingLink: {get: function(){ return browser.element('a[href="/contribute.html"]')}},
    searchControl: {get: function(){ return browser.element('input.ds-input')}},
    selectorContent: {get: function(){ return browser.element('#Selectors')}},
    improveDoc: {get: function(){ return browser.element('a.btn.icon-edit.improve')}},
    suggestionControl: {get: function(){ return browser.element('#ds-dataset-1')}},
 
});

module.exports = webdriverioPage;