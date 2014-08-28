/*jshint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),
        homePageNavBar = require('./HomePageNavBar'),
        homepage = Page.create({

            navbar: homePageNavBar,

            waitForLoad: function () {
                return this.waitForElement(by.id("main"));
            },

            isDisplayed: function () {
                var isDisplayed;
                this.waitForLoad().then(null, function(error) {
                    return false;
                });
                // Join a couple of element promises and return
                return driver.findElement(by.id("main")).isDisplayed();
            }

        });
    module.exports = homepage;
}());