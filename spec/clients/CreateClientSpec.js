var loginpage = require('../pages/LoginPage');

describe("A Client", function() {

    beforeEach(function() {
        loginpage.loginAsAdmin();
        console.log("Execute this after Login!");
    });

    it("Should be created when mandatory fields are all filled!", function() {

    })
})