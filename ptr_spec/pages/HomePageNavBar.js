/*jslint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),

        homepagenavbar = Page.create({

            getUserDropdown: function () {

                var homepagenavbar = this;

                return {
                    open: function() {
                        element(by.id("user-dropdown")).click();
                    },

                    logout: function () {
                        this.open();
                        element(by.id("logout")).click();
                    }
                };
            }

        });

    module.exports = homepagenavbar;
}());
