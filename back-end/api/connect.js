import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const URI = process.env.DB_URI;
const client = new MongoClient(URI);
await client.connect();

export const db = client.db('dbSpotify');

//const artistsCollection = await db.collection('Artists').find({}).toArray();
//console.log(artistsCollection);