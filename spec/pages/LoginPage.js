/*jslint node: true */
/*global driver: false */
/*global by: false */


(function () {
    'use strict';

    var Page = require('./BasePage'),
        loginpage = Page.create({

            // UI Elements
            get invalidLoginError() {
                return driver.findElement(by.css("label.error"));
            },

            // Page Services
            go : function () {
                driver.get(this.appConfig.baseURL);
            },

            waitForLoad: function () {
                this.waitForElement(by.id("uid"));
            },

            login: function (username, password) {
                this.waitForLoad();
                driver.findElement(by.id("uid")).sendKeys(username);
                driver.findElement(by.id("pwd")).sendKeys(password);
                driver.findElement(by.id("login-button")).click();
            }

        });

    module.exports = loginpage;

}());

