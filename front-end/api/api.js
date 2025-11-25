import axios from 'axios';

const URL ='https://spotify-backend-e1av.onrender.com';

const resArtists = await axios.get(`${URL}/artists`);
const resSongs = await axios.get(`${URL}/songs`);

export const artistArray = resArtists.data;
export const songsArray = resSongs.data;