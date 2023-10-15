import React, {useState} from 'react';
import Styles from './UserForm.module.css';
import axios from 'axios';

const defaultinput = {
  name: "",
  message: "",
  image: "",
}
const UserForm = (props) => {
  const [userinput, setUserinput] = useState(defaultinput);
  const [thankyou, setThankyou] = useState(false)

  const inputchangehandler = (key, value) => {
    setUserinput({...userinput, [key]: value})
  }

  const formsubmithandler = async (e) => {
    e.preventDefault();
    try{
      const data = new FormData();
      data.append("name", userinput.name);
      data.append("message", userinput.message);
      data.append("image", props.passedimg);
      for (const pair of data.entries()) {
        console.log(pair[0], pair[1]);
      }
      const postuser = await axios.post("https://rich-cyan-cobra-wrap.cyclic.app/upload", data);
      if(postuser.status === 200){
        console.log(postuser)
        setThankyou(true)
        setUserinput(defaultinput)
      } else {
        console.log("something went wrong!!")
      }
    }catch(error){
      console.log("error")
    }
  }
  return (
    <>
      <div className={`${Styles.userform_main}`}>
        {!thankyou ? <form action="" className={`${Styles.userform_form}`} onSubmit={formsubmithandler}>
          <div className={`${Styles.user_imgdiv}`}>
            <img
              src={props.passedimg ? props.passedimg : ""}
              alt="your selfie"
            />
          </div>
          <div className={`${Styles.form_subdiv}`}>
            <label htmlFor="" className={`${Styles.form_label}`}>
              Name
            </label>
            <input type="text" id="name" name="" className={`${Styles.form_input}`} onChange={(e)=> inputchangehandler("name", e.target.value)}/>
          </div>
          <div className={`${Styles.form_subdiv}`}>
            <label htmlFor="" className={`${Styles.form_label}`}>
              Message
            </label>
            <textarea row="10" type="text" className={`${Styles.form_input}`} onChange={(e)=>inputchangehandler("message", e.target.value)} />
          </div>
          <button className={`${Styles.submitbtn}`} type="submit ">Submit</button>
        </form> : <h1>Thank you!</h1> }
      </div>
    </>
  );
}

export default UserForm