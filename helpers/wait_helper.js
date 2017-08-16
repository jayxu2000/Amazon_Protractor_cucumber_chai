let Wait = function () {
    this.seatHasSeatNumber = function (element, expectedSeatNumber) {
        return function () {
            return element.getText().then(function (text) {
                let actualSeatNumber = text.split(/\n/)[3] || text;
                return expectedSeatNumber === actualSeatNumber;
            });
        };
    };
};

module.exports = new Wait();


