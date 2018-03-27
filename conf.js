exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'home/specs/login.spec.js',
        'registration/specs/*.spec.js'
    ],
    onPrepare: function() {
        //browser.manage().window().setSize(1600, 1000);
    },
    restartBrowserBetweenTests: true
};
