var _ = require('lodash');
var Bookmarks = require('../models/bookmarks.model.js');

module.exports = function (app) {


    app.post('/bookmarks', function (req, res) {
        var newBookmarks = new Bookmarks(req.body);

        newBookmarks.save(function (err) {
            if (err) {
                res.json({ info: 'error during Bookmarks create', error: err });
            }
            res.json({ info: 'Bookmarks created successfully' });
        });
    });

    app.get('/bookmarks', function (req, res) {
        Bookmarks.find(function (err, Bookmarkss) {
            if (err) {
                res.json({ info: 'error finding the bookmark', error: err });
            }
            res.json([Bookmarkss]);
        });
    });

    app.get('/bookmarks/:id', function (req, res) {

        Bookmarks.findById(req.params.id, function (err, bookmark) {
            if (err) {
                res.json({ info: 'error finding the bookmark', error: err });
            }
            if (Bookmarks) {
                res.json({ info: 'Bookmarks found successfully', data: bookmark });
            } else {
                res.json({ info: 'Bookmarks not found' });
            }
        });
    });

    app.put('/bookmarks/:id', function (req, res) {
        Bookmarks.findById(req.params.id, function (err, bookmark) {
            if (err) {
                res.json({ info: 'error when trying to find the bookmark', error: err });
            }
            if (Bookmarks) {
                _.merge(Bookmarks, req.body);
                Bookmarks.save(function (err) {
                    if (err) {
                        res.json({ info: 'error during the bookmarks update', error: err });
                    }
                    res.json({ info: 'Bookmarks updated successfully' });
                });

            } else {
                res.json({ info: 'Bookmarks not found' });
            }
        });
    });

    app.delete('/bookmarks/:id', function (req, res) {
        Bookmarks.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                res.json({ info: 'Error when deleting', error: err });
            }
            res.json({ info: 'Bookmarks deletet successfully' });
        });
    });
};