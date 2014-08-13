/*jslint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),
        loginpage = Page.create({

            getInvalidLoginError: function () {
                return this.driver.findElement(this.by.css("label.error"));
            },

            login: function (username, password) {
                this.waitForLoad();
                this.driver.findElement(this.by.id("uid")).sendKeys(username);
                this.driver.findElement(this.by.id("pwd")).sendKeys(password);
                this.driver.findElement(this.by.id("login-button")).click();
            },

            waitForLoad: function () {
                return this.waitForElement(this.by.id("uid"));
            }
        });

    module.exports = loginpage;

}());

