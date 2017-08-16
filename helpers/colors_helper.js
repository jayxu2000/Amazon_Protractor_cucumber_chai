const requestify = require('requestify');

let getColor = function (colorHex) {
    return requestify.get('http://www.thecolorapi.com/id?hex=' + colorHex).then(function (color) {
        return color.getBody().rgb.value;
    });
};

let hexToRgb = function (hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
};

module.exports.convertHexToRgb = getColor;


