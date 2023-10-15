import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import Styles from './Home.module.css';

const Home = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // `imageSrc` contains the captured image data URL
    console.log(imageSrc);

    // Now, you can save or process the captured image as needed
    // For example, you can send it to a server, display it on the page, or save it to local storage.
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture} className={`Styles.captureButton`}>capture button</button>
    </div>
  );
};

export default Home;
