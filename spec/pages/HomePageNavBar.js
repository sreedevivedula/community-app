/*jslint node: true */
/*global driver: false */
/*global by: false */

(function () {
    'use strict';

    var Page = require('./BasePage'),

        homepagenavbar = Page.create({

            // Page Elements
            get userdropdown() {

                    return {
                        open: function () {
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

