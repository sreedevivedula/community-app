/*jshint node: true */

(function () {
    'use strict';

    var Page = require('./BasePage'),
        clientsPage = Page.create({

            createClient: function(clientData) {
                this.waitForLoad_();
            },

            waitForLoad_: function() {
            }

        });
    module.exports = clientsPage;
}());