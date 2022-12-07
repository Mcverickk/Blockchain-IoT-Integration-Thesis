const mongoose = require('mongoose');
const mongodb = require('mongodb');
const IotData = require('../database/models/iotdataModel');
const {formatMongoData} = require('../helper/dbHelper');

const ObjectId = mongodb.ObjectId;

module.exports.createIoTData = async (data) => {
    try{
        let iotdata = new IotData({...data});
        let result = await iotdata.save();
        return formatMongoData(result);

    }catch(error){
        console.log('Something went wrong ==> Service => createTweet ',error)
        throw new Error(error);
    }
}