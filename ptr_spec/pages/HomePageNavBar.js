/*jslint node: true */
/*global element: false */
/*global by: false */


(function () {
    'use strict';

    var Page = require('./BasePage'),

        homepagenavbar = Page.create({

            get userdropdown() {

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
