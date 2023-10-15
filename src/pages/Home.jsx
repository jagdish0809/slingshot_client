import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Styles from './Home.module.css';
import { useNavigate } from 'react-router';

const Home = (props) => {
  const webcamRef = useRef(null);
  const [imgclicked, setImgClicked] = useState(null);
  const navigation = useNavigate()

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc)
    setImgClicked(imageSrc);
  };

  const retakebtnhandler = () => {
    // console.log("retake")
    setImgClicked(null)
  }
  
  const submitbtnhandler = () => {
    props.passimg(imgclicked) 
    navigation("/userregistration");
  }
  return (
    <div className={`${Styles.homepagemain}`}>
      {!imgclicked ? (
        <>
          {/* <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" /> */}
          <div className={`${Styles.webcamContainer}`}>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          </div>
          <button
            onClick={capture}
            className={`${Styles.captureButton}`}
          ></button>
        </>
      ) : (
        <>
          {/* <div className={`${Styles.showimgdiv}`}>
            <img src={imgclicked} alt="" />
            <div className={`${Styles.showimgdivbtns}`}>
              <button
                className={`${Styles.btn} ${Styles.retakbtn}`}
                onClick={retakebtnhandler}
              >
                {" "}
                Retake
              </button>
              <button
                className={`${Styles.btn} ${Styles.confirmbtn}`}
                onClick={submitbtnhandler}
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </div> */}

          <div className={`${Styles.showimgdiv}`}>
            <div className={`${Styles.circularImage}`}>
              <img src={imgclicked} alt="" />
            </div>
            <div className={`${Styles.showimgdivbtns}`}>
              <button
                className={`${Styles.btn} ${Styles.retakbtn}`}
                onClick={retakebtnhandler}
              >
                Retake
              </button>
              <button
                className={`${Styles.btn} ${Styles.confirmbtn}`}
                onClick={submitbtnhandler}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
