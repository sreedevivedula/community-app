/*jshint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),
        homePageNavBar = require('./HomePageNavBar'),
        clientsContainer = require('./ClientsContainer'),
        homepage = Page.create({

            navbar: homePageNavBar,

            clientsContainer: clientsContainer,

            waitForLoad: function () {
                return this.waitForElement(this.by.id("main"));
            },

            isDisplayed: function () {
                var isDisplayed;
                this.waitForLoad().then(null, function(error) {
                    return false;
                });
                // Join a couple of element promises and return
                return this.driver.findElement(this.by.id("main")).isDisplayed();
            }

        });
    module.exports = homepage;
}());