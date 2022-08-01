const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantDetails = new Schema({
    is_deleted: {type: Boolean},
    id: {type: Number},
    status: {type: Number},
    cusines: [{type: Schema.ObjectId, ref: 'cusines'}],
    latitude: {type: Number},
    longitude: {type: Number},
    homeDelivery: {type: String},
    miles: {type: Number},
    isRestaurantVerified: {type: Boolean},
    pos_rest_id: {type: Number},
    minimumOrder: {type: Number},
    maxPeople: {type: Number},
    dineIn: {type: Number},
    name: {type: String},
    email: {type: String},
    mobileNumber: {type: Number},
    tillNumber: {type: Number},
    preparationTimeId: {type: Number},
    openTime: {type: String},
    closeTime: {type: String}
})





module.exports = mongoose.model("restaurantDetails", restaurantDetails)