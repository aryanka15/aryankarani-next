"use client";

import { useEffect, useState } from "react";
import VideoCard from "../VideoCard";
import VideoData from "../VideoData";
import { db } from "../firebase";
import NextImage from "next/image";

import { onValue, ref } from "firebase/database";

export default function KidWithACamera() {
  const [data, setData] = useState([new VideoData()]);
  const [hasFetched, setFetched] = useState(false);
  let src = "/images/kwacimationAlpha";
  if (document.documentElement.clientWidth <= 768) {
    src += "Mobile";
  }
  const fetchData = async () => {
    const dataRef = ref(db, "server/resources/youtubeData");
    onValue(dataRef, (snapshot) => {
      const newData = snapshot.val();
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

      setData(objects);
      setFetched(true);
    });
  };

  function handleScroll() {
    let scrollTop = document.documentElement.scrollTop;
    let maxScrollTop =
      document.getElementsByClassName("animationContainer")[0].scrollHeight -
      window.innerHeight;
    let scrollFraction = scrollTop / maxScrollTop;
    let frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );
    setImg(`${src}/KWACIntro${frameIndex.toString().padStart(3, "0")}.png`);
  }

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        let img = new Image();
        img.src = `${src}/KWACIntro${i.toString().padStart(3, "0")}.png`;
        console.log(img.src);
      }
    };
    preloadImages();
    fetchData();

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasFetched]);

  let [imgSrc, setImg] = useState(`${src}/KWACIntro000.png`);

  const frameCount = 150;

  return (
    <>
      <div className="KidWithACamera flex-col justify-center bg-[url('/images/BackgroundTile.png')]">
        <div className="animationContainer">
          <div className="flex sticky h-screen top-14 justify-center">
            <img
              id="animation"
              src={imgSrc}
              alt="KidWithACamera logo animation"
              className="aspect-video w-screen object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 lg:gap-x-3 gap-y-2 lg:gap-y-3 mx-auto p-3">
          {data?.map((element: VideoData) => (
            <VideoCard key={element.id} data={element}></VideoCard>
          ))}
        </div>
      </div>
    </>
  );
}
