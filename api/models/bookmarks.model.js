var mongoose = require('mongoose');

var bookmarkSchema = mongoose.Schema({
    bookmarkTitle: String,
    employeeId: Number,
    occupation: { id: String, text: String },
    activity: { id: Number, description: String },
    customer: { customerId: Number, contractId: Number, name: String },
    agreement: { id: Number, name: String },
    tax: { id: Number, description: String },
    service: { id: String, description: String },
    project: { id: String, name: String },
    created: { type: Date, default: Date.now },
    debit: {description: String, isDebit: Boolean},
    icon: {name: String,color: String},
    color: String
},
    {
        versionKey: false
    });

module.exports = mongoose.model('Bookmark', bookmarkSchema);