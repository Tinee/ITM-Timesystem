var mongoose = require('mongoose');

var favoriteSchema = mongoose.Schema({
    employee: { id: Number, name: String },
    occupation: { id: String, text: String },
    activity: { id: Number, text: String },
    customer: { id: Number, name: String },
    agreement: { id: Number, text: String },
    tax: { id: Number, text: String },
    service: { id: String, text: String },
    project: { id: String, text: String },
    created: { type: Date, default: Date.now },
    icon: String
},
    {
        versionKey: false
    });

module.exports = mongoose.model('Favorite', favoriteSchema);