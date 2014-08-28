exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['clients/CreateClientSpec.js', 'login/LoginSpec.js'],
//    specs: ['login/LoginSpec.js']
    capabilities: {
        'browserName': ['phantomjs']
    }
}