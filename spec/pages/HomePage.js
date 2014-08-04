var BasePage = require('./BasePage');

homepage = new BasePage();

homepage.openCreateClientPage = function() {
    this.driver.findElement({"id":"main-menu-left"}).findElement({"linkText": "Clients"}).click();
}

homepage.waitForLoad = function() {
    this.driver.wait(function() {
        return this.driver.findElement(by.id("main-menu-left")).then(function(element) {
            return element.isDisplayed();
        });
    }, 3000);
}

module.exports = homepage;