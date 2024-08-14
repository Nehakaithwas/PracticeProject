import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'

// Connect to MongoDB
export const connect_DB = async () => {

    try {
        const MongoConnected = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)

        console.log(`\n Mongodb connected with database ${MongoConnected.connection.host}`);

    } catch (err) {
        console.log(`ERROR while connecting with databse : ${err}`)
        process.exit(1);
    }
}
