import {NextResponse} from "next/server";
import {getDatabase, ref, set} from "firebase/database";
import {app, db} from '../../firebase'
const {google} = require('googleapis')

const service = google.youtube('v3');
export async function GET() {
    const res: any = await getPlaylistData()
    const items = res.data.items;
    try {
        let videos:any = [];
        items.forEach((element:any) => {
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
    catch (err:any) {
        console.log(err.statusCode + " : " + err);
    }
    return new Response(JSON.stringify(res.data.items), {
        status: 200
    })
}

async function getPlaylistData() {
    return new Promise((resolve, reject) => {
        service.playlistItems.list({
            auth: process.env.API_KEY,
            part: "snippet,contentDetails,status",
            playlistId: process.env.UPLOADS_ID,
            maxResults: 12
        }, async function(err:any, res:any) {
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
            resolve(res)
        })
    })
}