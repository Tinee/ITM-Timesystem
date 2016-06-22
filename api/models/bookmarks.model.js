var mongoose = require('mongoose');

var bookmarkSchema = mongoose.Schema({
    bookmarkTitle: String,
    employeeId: Number,
    occupation: { id: String, text: String },
    activity: { id: Number, text: String },
    customer: { id: Number, name: String },
    agreement: { id: Number, text: String },
    tax: { id: Number, text: String },
    service: { id: String, text: String },
    project: { id: String, text: String },
    created: { type: Date, default: Date.now },
    icon: String,
    color: String
},
    {
        versionKey: false
    });

module.exports = mongoose.model('Bookmark', bookmarkSchema);