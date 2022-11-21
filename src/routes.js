const routes = require('express').Router();

var _ = require('lodash');

routes.post('/api', function(req, res) {

});

routes.get('/', function(req, res) {
    res.status(301).redirect("/index.html")
});



module.exports = routes;