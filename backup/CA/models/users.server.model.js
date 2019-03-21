import mongoose from 'mongoose';
// import Products from './products.server.model'
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate')

var userSchema = mongoose.Schema({
    aadhar: String,
    additionalnotes: String,
    billingaddress1: String,
    billingaddress2: String,
    billingcity: String,
    billingcountry: String,
    billingstate: String,
    clientname: String,
    company: String,
    description: String,
    email: String,
    mobile: String,
    pan: String,
    shippingaddress1: String,
    shippingaddress2: String,
    shippingcity: String,
    shippingcountry: String,
    shippingstate: String,
    skypeid: String,
    title: String,
    hash: String
});

userSchema.plugin(findOrCreate);
export default mongoose.model('users', userSchema)