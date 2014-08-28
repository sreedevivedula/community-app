/*jslint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),
        loginpage = Page.create({

            go : function () {
                driver.get(this.appConfig.baseURL);
            },

            invalidLoginError: {
                get: function() { return driver.findElement(by.css("label.error")); }
            },

            login: function (username, password) {
                this.waitForLoad();
                driver.findElement(by.id("uid")).sendKeys(username);
                driver.findElement(by.id("pwd")).sendKeys(password);
                driver.findElement(by.id("login-button")).click();
            },

            waitForLoad: function () {
                this.waitForElement(by.id("uid"));
            }
        });

    module.exports = loginpage;

}());

