const dotEnv = require('dotenv');
const connectDB = require('./database/connection');
const data = require('./data.json');
const Service = require('./services/iotdataService')

dotEnv.config();

connectDB();

const result = Service.createIoTData(data);
console.log(result);
