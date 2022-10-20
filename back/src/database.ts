import mongoose from "mongoose";
import config from "./config";

(async () => {

    user: config.MONGO_USER
    pass: config.MONGO_PASSWORD 


    await mongoose.connect('mongodb://localhost/mern-database');
    console.log('database is connected') 

})()



/*import mongoose, { ConnectionOptions } from 'mongoose'

(async () => {

    const mongooseOptions: ConnectionOptions = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
    const db = await mongoose.connect('mongodb://localhost/mern-database', mongooseOptions);
    console.log('database is connected to:', db.connection.name)
}) () */

