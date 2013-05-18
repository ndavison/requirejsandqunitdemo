"use strict";

define(
    ['libs/dummylib'],
    function(dummyLib) {
        
        var run = function() {
            test('dummyLib should return the sum of the two supplied numbers.', function() {
                equal(dummyLib(1,1), 2, 'The return should be 2.');
                equal(dummyLib(-2,1), -1, 'The return should be -1.');
            });
        };
        
        return {run: run}
    }
);