/*jshint node: true */
/*global element: false */
/*global by: false */


(function () {
    'use strict';

    var Page = require('./BasePage'),
        homePageNavBar = require('./HomePageNavBar'),
        homepage = Page.create({

            navbar: homePageNavBar,

            isDisplayed: function () {
                return element(by.id("main")).isDisplayed();
            }

        });
    module.exports = homepage;
}());