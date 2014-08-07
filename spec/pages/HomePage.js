var Page = require('./BasePage');
var homePageNavBar = require('./HomePageNavBar');

homepage = Page.create({

    navbar: homePageNavBar,

    waitForLoad: function() {
        this.waitForElement(this.by.id("main"));
    },

    isDisplayed: function() {
        this.waitForLoad();
        // Join a couple of element promises and return
        return this.driver.findElement(this.by.id("main")).isDisplayed();
    }

});

module.exports = homepage;