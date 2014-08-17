/*jslint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),

        homepagenavbar = Page.create({

            getUserDropdown: function () {
                var driver = this.driver,
                    by = this.by;

                return {
                    open: function() {
                        driver.findElement(by.id("user-dropdown")).click();
                    },

                    getLogOut: function () {
                        return driver.findElement(by.id("logout"));
                    }
                };
            },

            getClientsDropDown: function() {
                var homepageNavBar = this;
                var driver = this.driver,
                    by = this.by;

                return {
                    open: function() {
                        homepageNavBar.waitForElement(by.css("ul#main-menu-left > li:nth-of-type(1) > a"));
                        driver.findElement(by.css("ul#main-menu-left > li:nth-of-type(1) > a")).
                            click().then(null, function(error){
                                console.log("Could not drop down Clients: Failed with " + error.message);
                        });
                    },

                    openClients: function () {
                        this.open();
                        driver.findElement(by.css("ul#main-menu-left > li:nth-of-type(1) > " +
                            "ul > li:nth-of-type(1) > a")).click().then(null, function(error) {
                            console.log("Could not open clients: Failed with " + error.message);
                        });
                    }
                };

            },

            logout: function () {
                this.getUserDropDown().open();
                this.getUserDropdown().getLogOut().click();
            }

        });

    module.exports = homepagenavbar;
}());

