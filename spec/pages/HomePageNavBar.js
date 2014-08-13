/*jslint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),

        homepagenavbar = Page.create({

            getUserDropdown: function () {
                var driver = this.driver,
                    by = this.by;

                return {
                    getLogOut: function () {
                        return driver.findElement(by.id("logout"));
                    }
                };
            },

            getUserDropDownLink: function () {
                return this.driver.findElement(this.by.id("user-dropdown"));
            },

            logout: function () {
                this.getUserDropDownLink().click();
                this.getUserDropdown().getLogOut().click();
            }

        });

    module.exports = homepagenavbar;
}());

