/*jslint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),

        homepagenavbar = Page.create({

            getUserDropdown: function () {
                var homepagenavbar = this;

                return {
                    open: function() {
                        driver.findElement(by.id("user-dropdown")).click();
                    },

                    logout: function () {
                        this.open();
                        homepagenavbar.waitForElement(by.id("logout"));
                        driver.findElement(by.id("logout")).click();
                    }
                };
            }

        });

    module.exports = homepagenavbar;
}());

