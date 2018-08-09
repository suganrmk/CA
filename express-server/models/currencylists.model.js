import mongoose from 'mongoose';
// import users from './users.server.model'
var Schema = mongoose.Schema;
var CurrencylistsSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    currencylist: Object
});

export default mongoose.model('Currencylists', CurrencylistsSchema)