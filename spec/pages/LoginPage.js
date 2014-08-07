var Page = require('./BasePage');
    homepage = require('./HomePage'),
    logindata = require('../data/LoginData');

loginpage = Page.create({

    getInvalidLoginError: function() {
        return this.driver.findElement(this.by.css("label.error"));
    },

    login: function(username, password) {
        this.waitForLoad();
        this.driver.findElement(this.by.id("uid")).sendKeys(username);
        this.driver.findElement(this.by.id("pwd")).sendKeys(password);
        this.driver.findElement(this.by.id("login-button")).click();
    },

    waitForLoad: function() {
        this.waitForElement(this.by.id("uid"));
    }

});

module.exports = loginpage;