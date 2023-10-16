import React, { useState, useEffect } from "react";
import Styles from "./MainAnim.module.css";
import axios from "axios";
import border from "../assets/border.png";

const MainAnim = () => {
  const [imgslist, setImgsList] = useState([]);
  const [imghistory, setImgHistory] = useState([]);

  let histarr = [];

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://rich-cyan-cobra-wrap.cyclic.app/data"
      );
      // console.log(response, "get img response");
      if (
        response.status === 200 &&
        response.data.message != "No data available."
      ) {
        const newImage = {
          url: response.data.imageUrl,
          name: response.data.name,
          message: response.data.message,
          // url: "https://res.cloudinary.com/difgb8jth/image/upload/v1697376847/dyhpgufwztncbd5xg9a2.jpg",
          top: Math.floor(Math.random() * (window.innerHeight - 300)) + "px",
          left: Math.floor(Math.random() * (window.innerWidth - 200)) + "px",
          randomn: Math.floor(Math.random() * (200 - 70 + 1)) + 70,
          loaded: false,

        };
        setImgsList((prev) => [...prev, newImage]);
        histarr.push(newImage);
        localStorage.setItem("img", JSON.stringify(histarr));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const intervalvar = setInterval(fetchImages, 6000);
    return () => clearInterval(intervalvar);
  }, []);

  useEffect(() => {
    const imgshist = JSON.parse(localStorage.getItem("img"));
    console.log(imgshist);
    if (imgshist) {
      setImgHistory(imgshist);
      imgshist.map((item)=> histarr.push(item))
      console.log(histarr)
    }
  }, []);

  return (
    <div className={`${Styles.mainanim_container}`}>
      {imgslist.length > 0
        ? imgslist.map((item, index) => (
            <>
              {/* <img
                key={index}
                className={`${Styles.image}`}
                src={item.url}
                alt=""
                style={{
                  top: item.top,
                  left: item.left,
                }}
              /> */}

              {/*vo border ke img k liye hai */}
              {/* <img
                src={border}
                alt=""
                className={`${Styles.borderimg}`}
                style={{
                  top: `calc(${item.top} - 30px)`,
                  left: `calc(${item.left} - 30px)`,
                }}
              /> */}

              <div
                className={`${Styles.imgandtextdiv}`}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                key={index}
              >
                <img src={item.url} className={`${Styles.img}`} />
                <h1 className={`${Styles.textname}`}>{item.name}</h1>
                <p className={`${Styles.textmessage}`}>
                  {item.message}
                </p>
              </div>
            </>
          ))
        : ""}
      {imghistory.length > 0
        ? imghistory.map((item, index) => (
            <>
              <div
                className={`${Styles.imgandtextdivhist}`}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                key={index}
              >
                <img src={item.url} className={`${Styles.img}`} />
                <h1 className={`${Styles.textname}`}>{item.name}</h1>
                <p className={`${Styles.textmessage}`}>
                  {item.message}
                </p>
              </div>
            </>
          ))
        : ""}
    </div>
  );
};

export default MainAnim;
