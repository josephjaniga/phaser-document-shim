'use strict'

// ---
// ---
// ---

var documentObject = {
    'createElement': function () {
        return {width:0, height:0};
    },
};

try {
    module.exports = document || documentObject;
} catch (e) {
    module.exports = documentObject;
}

// ---
