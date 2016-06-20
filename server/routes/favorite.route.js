var _ = require('lodash');
var Favorite = require('../models/favorite.model.js');

module.exports = function (app) {


    app.post('/favorite', function (req, res) {
        var newFavorite = new Favorite(req.body);

        newFavorite.save(function (err) {
            if (err) {
                res.json({ info: 'error during Favorite create', error: err });
            }
            res.json({ info: 'Favorite created successfully' });
        });
    });

    app.get('/favorite', function (req, res) {
        Favorite.find(function (err, Favorites) {
            if (err) {
                res.json({ info: 'error finding the Favorites', error: 'err' });
            }
            res.json({ info: 'found the Favorites', data: Favorites });
        });
    });

    app.get('/favorite:id', function (req, res) {
        Favorite.findById(req.params.id, function (err, Favorite) {
            if (err) {
                res.json({ info: 'error finding the Favorite', error: 'err' });
            }
            if (Favorite) {
                res.json({ info: 'Favorite found successfully', data: Favorite });
            } else {
                res.json({ info: 'Favorite not found' });
            }
        });
    });

    app.put('/favorite/:id', function (req, res) {
        Favorite.findById(req.params.id, function (err, Favorite) {
            if (err) {
                res.json({ info: 'error when trying to find the Favorite', error: err });
            }
            if (Favorite) {
                _.merge(Favorite, req.body);
                Favorite.save(function (err) {
                    if (err) {
                        res.json({ info: 'error during the Favorite update', error: err });
                    }
                    res.json({ info: 'Favorite updated successfully' });
                });

            } else {
                res.json({ info: 'Favorite not found' });
            }
        });
    });

    app.delete('/favorite/:id', function (req, res) {
        Favorite.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                res.json({ info: 'Error when deleting', error: err });
            }
            res.json({ info: 'Favorite deletet successfully' });
        });
    });
};