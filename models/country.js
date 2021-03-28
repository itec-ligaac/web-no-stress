const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;