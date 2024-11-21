import {ref, set} from "firebase/database";
import {db} from '../../app/utils/firebase'
const {google} = require('googleapis')

const service = google.youtube('v3');
export default async function handler(req, res) {
    const funcVal = await getPlaylistData()
    let response = await JSON.parse(funcVal);
    const items = response.data.items;
    try {
        let videos = [];
        items.forEach((element) => {
            let vidId = element["contentDetails"]["videoId"];
            let title = element["snippet"]["title"];
            let thumbnail = element["snippet"]["thumbnails"]["standard"]["url"];
            let description = element["snippet"]["description"];
            let obj = {
                id: vidId,
                title: title,
                thumbnail: thumbnail,
                description: description,
            };
            videos.push(obj);
        })
        await set(ref(db, 'server/resources/youtubeData'), videos);
    }
    catch (err) {
        console.log(err.statusCode + " : " + err);
    }
    return res.status(200).json({"message": "Success"})
}

async function getPlaylistData() {
    return new Promise((resolve, reject) => {
        service.playlistItems.list({
            key: process.env.API_KEY,
            part: "snippet,contentDetails,status",
            playlistId: process.env.UPLOADS_ID,
            maxResults: 12
        }, async function(err, res) {
            if (err) {
                console.log("The API returned an error: " + err);
                return;
            }
            let playlistItems = res.data.items;
            if (playlistItems.length == 0) {
                console.log("No playlistItems found");
            } else {
                console.log('This channel\'s latest video is: ' + playlistItems[0].snippet.title)
                // console.log(playlistItems)
            }
            let response = JSON.stringify(res)
            resolve(response)
        })
    })
}