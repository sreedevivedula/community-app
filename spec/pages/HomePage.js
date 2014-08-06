var Page = require('./BasePage');
var homePageNavBar = require('./HomePageNavBar');

homepage = Page.create({

    navbar: homePageNavBar,

    getMifosXLogo: function() {
        return this.driver.findElement(this.by.id("main"));
    },

    waitForLoad: function() {
        this.waitForElement(this.by.id("main"));
    }

});

module.exports = homepage;