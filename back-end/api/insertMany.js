import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistsArr = artistArray.map((curr) => {
    const {id, ...artistDataWithoutId} = curr;
    return artistDataWithoutId;
});

const newSongsArr = songsArray.map((curr) => {
    const {id, ...songDataWithoutId} = curr;
    return songDataWithoutId;
});

const insertArtists = await db.collection('Artists').insertMany(newArtistsArr);
const insertSongs = await db.collection('Songs').insertMany(newSongsArr);

console.log(insertArtists);
console.log(insertSongs);