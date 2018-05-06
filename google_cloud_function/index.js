var cors = require('cors');
const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
];

// my function
var heroFn = function helloFn(req, res) {
    res.status(200)
        .send(heroes);
};


exports.getHeroes = (req, res) => {
    var corsFn = cors();
    corsFn(req, res, function() {
        heroFn(req, res);
    });

};

