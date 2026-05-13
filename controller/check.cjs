const User = require("../model/UserSchema.cjs");
const Connect = require('../model/ConnectToUserDB.cjs');
const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/Dealership")
    } catch (error) {
        console.error(error);
    }
}
connect();
async function check(name) {
    console.log('started');
    const FindUser = await User.findOne({ Name: name });
    console.log('went pass ?');
    if (FindUser) {
        console.log(`name ${FindUser.Name}`)
        console.log(`orders ${FindUser.Orders}`);
        if (FindUser.Orders)
            console.log('truthy ?')
        else
            console.log(' not truthy ?')
    }
    else
        console.log('not founded')
}

check('hussnain');