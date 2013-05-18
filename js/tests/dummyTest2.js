"use strict";

define(
    ['libs/dummylib'],
    function(dummyLib) {
        
        var run = function() {
            test('dummyLib should return the two strings combined together.', function() {
                equal(dummyLib('a','b'), 'ab', 'The return should be "ab".');
            });
        };
        
        return {run: run}
    }
);