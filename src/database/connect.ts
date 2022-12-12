import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const api_key = process.env.MONGO_API_KEY

mongoose.connect(`${api_key}`)

let db = mongoose.connection;

export default db