/*jslint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),
        loginpage = Page.create({

            invalidLoginError: element(by.css("label.error")),

            login: function (username, password) {
                element(by.id("uid")).sendKeys(username);
                element(by.id("pwd")).sendKeys(password);
                element(by.id("login-button")).click();
            },

            go: function () {
                browser.get(this.appConfig.baseURL);
            }

        });

    module.exports = loginpage;

}());

