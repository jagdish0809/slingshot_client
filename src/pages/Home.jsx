import React from 'react';
import Styles from './Home.module.css';
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const Home = () => {
    const handleTakePhoto = (dataUri) => {
        console.log("got herer")
    }
  return (
    <Camera
      onTakePhoto={(dataUri) => {
        handleTakePhoto(dataUri);
      }}
    />
  );
}

export default Home