'use strict';

angular.module('e2e-mocks', ['ngMockE2E'])
    .run(function($httpBackend) {
        // Do your mock
    var baseApiUrl = 'http://localhost:8443/mifosng-provider/api/v1/';

//    $httpBackend.whenGET(baseApiUrl + 'students/?searchString=axe&amp;')
//        .respond([axelStudent, femaleStudent]);
//
//    // Don't mock the html views
//    $httpBackend.whenGET(/views\/\w+.*/).passThrough();
//
//    // For everything else, don't mock
//    $httpBackend.whenGET(/^\w+.*/).passThrough();
//    $httpBackend.whenPOST(/^\w+.*/).passThrough();
    });

angular.module('MifosX_Application').requires.push('e2e-mocks');