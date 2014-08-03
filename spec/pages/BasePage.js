var Config = require('../config/MifosxConfig'),
    webdriver = require('selenium-webdriver');

var BasePage = function() {

    var config = Config(),
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    var by = webdriver.By;

    return {
        driver : driver,
        by: by,
        config: config
    }
};

module.exports = BasePage;