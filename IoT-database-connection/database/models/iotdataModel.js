const mongoose = require('mongoose');

const iotdataSchema = new mongoose.Schema({temperature: Number, humidity: Number}, {timestamps: true, toObject:{
    transform: function(doc,ret,options){
        ret.id = ret._id;
        delete ret.__v;
        return ret;
    }
}})

module.exports = mongoose.model('IotData', iotdataSchema);