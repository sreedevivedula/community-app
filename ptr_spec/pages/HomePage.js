/*jshint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),
        homePageNavBar = require('./HomePageNavBar'),
        homepage = Page.create({

            navbar: homePageNavBar,

            isDisplayed: function () {
                // Join a couple of element promises and return
                return element(by.id("main")).isDisplayed();
            }

        });
    module.exports = homepage;
}());