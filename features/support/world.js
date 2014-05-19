//require('selenium-webdriver')
//var World = function World(callback) {
//    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
//};
//exports.World = World;

var pc = require('protractor-cucumber');

var steps = function() {
    var seleniumAddress = 'http://localhost:4444/wd/hub';
    var options = { browser : 'chrome', timeout : 100000 };
    this.world = pc.world(seleniumAddress, options);

    this.After(function(callback) {
        this.quit(callback);
    });
};

module.exports = steps;