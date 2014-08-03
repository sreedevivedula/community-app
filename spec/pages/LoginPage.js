var BasePage = require('./BasePage');

loginpage = new BasePage();

loginpage.login = function(username, password) {

    var driver = this.driver;
    var by = this.by;

    driver.get(this.config.baseURL);
    driver.wait(function() {
        return driver.findElement(by.id("uid")).then(function(element) {
            return element.isDisplayed();
        });
    }, 3000);
    driver.findElement(by.id("uid")).sendKeys(username);
    driver.findElement(by.id("pwd")).sendKeys(password);
    driver.findElement(by.id("login-button")).click();

};

loginpage.loginAsAdmin = function() {

    this.login(this.config.adminUsername, this.config.adminPassword);

};

module.exports = loginpage;