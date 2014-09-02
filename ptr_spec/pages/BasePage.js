/*jslint node: true */

(function () {
    'use strict';

    var appConfig = require('../config/MifosxConfig'),
        underscore = require('../../app/bower_components/underscore'),
        BasePage = function () {
            if (this.singleton) {
                return this.singleton;
            }
            this.singleton = this;
            this.appConfig = appConfig;
        };

    BasePage.prototype.create = function (page) {
        return underscore.extend(page, this);
    };

    module.exports = new BasePage();

}());

