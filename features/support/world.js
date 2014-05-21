//require('selenium-webdriver')
//var World = function World(callback) {
//    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
//};
//exports.World = World;

var webdriver = require('selenium-webdriver');

var World = function World(callback) {
//    this.browser = new zombie(); // this.browser will be available in step definitions
    this.driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    this.visit = function(url, callback) {
        this.driver.get(url, callback);
    };

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;
