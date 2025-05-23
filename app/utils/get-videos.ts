import { onValue, ref } from "firebase/database";
import { db } from "./firebase";
import VideoData from "../kidwithacamera/VideoData";

export const getVideos = async () => {
  const dataRef = await ref(db, "server/resources/youtubeData");
  await onValue(dataRef, async (snapshot) => {
    const newData = await snapshot.val();
    let objects = [];
    for (const element of newData) {
      let newObject = new VideoData(
        element.id,
        element.title,
        element.thumbnail,
        element.description
      );
      objects.push(newObject);
    }
    return objects;
  });
};
