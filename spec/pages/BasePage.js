var Config = require('../config/MifosxConfig'),
    webdriver = require('selenium-webdriver');


var BasePage = function() {

    if ( arguments.callee._singletonInstance )
        return arguments.callee._singletonInstance;
    arguments.callee._singletonInstance = this;

    this.config = Config(),
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    this.by = webdriver.By;
    this.wd = webdriver;

}

module.exports = BasePage;