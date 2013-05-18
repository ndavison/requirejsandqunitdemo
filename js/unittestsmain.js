"use strict";

require.config({
    paths: {
        'QUnit': 'libs/qunit'
    },
    shim: {
       'QUnit': {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
           }
       } 
    }
});

// require the unit tests.
require(
    ['QUnit', 'tests/dummyTest', 'tests/dummyTest2'],
    function(QUnit, dummyTest, dummyTest2) {
        
        // run the tests.
        dummyTest.run();
        dummyTest2.run();
        
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);