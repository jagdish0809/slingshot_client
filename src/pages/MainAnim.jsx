import React, { useState, useEffect } from "react";
import Styles from "./MainAnim.module.css";
import axios from "axios";
import border from "../assets/border.png";

const MainAnim = () => {
  const [imgslist, setImgsList] = useState([]);

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
          // url: "https://res.cloudinary.com/difgb8jth/image/upload/v1697376847/dyhpgufwztncbd5xg9a2.jpg",
          top: Math.floor(Math.random() * (window.innerHeight - 200)) + "px",
          left: Math.floor(Math.random() * (window.innerWidth - 200)) + "px",
          randomn: Math.floor(Math.random() * (200 - 70 + 1)) + 70,
          loaded: false,
        };
        setImgsList((prev) => [...prev, newImage]);
        // console.log(response.data.imageUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const intervalvar = setInterval(fetchImages, 3000);
    return () => clearInterval(intervalvar);
  }, []);

  return (
    <div className={`${Styles.mainanim_container}`}>
      {imgslist.length > 0
        ? imgslist.map((item, index) => (
            <>
              <img
                key={index}
                className={`${Styles.image}`}
                src={item.url}
                alt=""
                style={{
                  top: item.top,
                  left: item.left,
                }}
              />
              <img
                src={border}
                alt=""
                className={`${Styles.borderimg}`}
                style={{
                  top: `calc(${item.top} - 30px)`,
                  left: `calc(${item.left} - 30px)`,
                }}
              />
            </>
          ))
        : ""}
    </div>
  );
};

export default MainAnim;
