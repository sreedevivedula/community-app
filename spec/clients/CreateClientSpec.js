var loginpage = require('../pages/LoginPage');
var homepage = require('../pages/HomePage');
var ClientData = require('../data/ClientData');

describe("A Client", function() {

    beforeEach(function() {
        clientdata = new ClientData();
        console.log(clientdata.validClient);
    });

    it("Should be created when mandatory fields are all filled!", function() {
        loginpage.loginAsAdmin();
        homepage.openCreateClientPage();
//            .openCreateClientPage().createClient(clientdata.validClient);
//        clientResults =
//            homepage.openClientsListPage().filterClient(clientdata.validClient.firstName);

        console.log("Execute this after Login!");
    })
})