import React, { useState, useEffect } from "react";
import Styles from "./MainAnim.module.css";
import axios from 'axios';

const MainAnim = () => {
  const [imgslist, setImgsList] = useState([]);
  // let [imageCounter, setImageCounter] = useState(0)

  const fetchImages = async () => {
    try{
      const url =
        "https://static.toiimg.com/thumb/msid-98627667,width-1280,resizemode-4/98627667.jpg";
      
            const newImage = {
              url: url,
              top:
                Math.floor(Math.random() * (window.innerHeight -200)) + "px",
              left:
                Math.floor(Math.random() * (window.innerWidth - 200)) + "px",
              randomn: Math.floor(Math.random() * (200 - 70 + 1)) + 70
            };
            console.log(newImage, );
      setImgsList((prev) => [...prev, newImage]);
      // setarrylen(arrylen++);
      // const response = await axios.get("backend ka endpoint");
      // if(response.status === 200){
      //   setImgsList((prev)=> [...prev, response.data])
      // }
    }catch(error){
        console.log(error)
      }
  };

  useEffect(() => {
    const intervalvar = setInterval(fetchImages, 1000);

    return () => clearInterval(intervalvar);
  }, []);

  return (
    <div className={`${Styles.mainanim_container}`}>
      {imgslist.map((item, index) => (
        <img
          key={index}
          className={`${Styles.image}`}
          src={item.url}
          alt=""
          style={{ top: item.top, left: item.left, width: item.randomn, height: item.randomn }}
        />
      ))}
    </div>
  );
};

export default MainAnim;
