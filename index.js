'use strict'

// ---
// ---
// ---

var documentObject = {
    'createElement': function () {

        return {
            width:0,
            height:0,
            getContext: function () {

                return {
                    setTransform: function(){},
                    fillRect: function(){},
                    getImageData: function(){

                        return {
                            data: {}
                        };

                    },
                    putImageData: function(){},
                    drawImage: function(){},
                };

            }
        };

    },
};

try {
    module.exports = document || documentObject;
} catch (e) {
    module.exports = documentObject;
}

// ---
