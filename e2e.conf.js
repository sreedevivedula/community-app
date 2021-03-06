// A small suite to make sure the cucumber framework works.
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'cucumber',

    // Spec patterns are relative to this directory.
    specs: [
        'features/*.feature'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '8000'),

    params: {
        login: {
            user: 'Jane',
            password: '1234'
        }
    },

    cucumberOpts: {
        require: 'features/step_definitions',
        tags: '@dev',
        format: 'summary'
    }
};
