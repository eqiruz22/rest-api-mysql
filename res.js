'use strict';

const ok = (values, res) => {
    var data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
}

module.exports = ok;