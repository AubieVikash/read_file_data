const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Cusines = new Schema({
    _id: {type: mongoose.ObjectId },
    is_deleted: {type: Boolean},
    id: {type: Number},
    status: {type: Number},
    name: {type: String},
    cusine_image: {type: String}
});


module.exports = mongoose.model("cusines", Cusines);