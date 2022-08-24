const mongoose = require('mongoose');

const dbConnection = () => {
    try{
        mongoose.connect('mongodb://localhost/af_ex_two', () => {
             console.log('Connected to MongoDB');
       });
    } catch (err) {
        console.log(err);
    }
}


module.exports = {dbConnection};