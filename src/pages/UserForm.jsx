import React from 'react';
import Styles from './UserForm.module.css';

const UserForm = () => {
  return (
    <>
      <div className={`${Styles.userform_main}`}>
        <form action="" className={`${Styles.userform_form}`}>
          <div className={`${Styles.user_imgdiv}`}>
            <img
              src="https://static.toiimg.com/thumb/msid-98627667,imgsize-40206,width-400,resizemode-4/98627667.jpg"
              alt=""
            />
          </div>
          <div className={`${Styles.form_subdiv}`}>
            <label htmlFor="" className={`${Styles.form_label}`}>
              Name
            </label>
            <input type="text" name="" className={`${Styles.form_input}`} />
          </div>
          <div className={`${Styles.form_subdiv}`}>
            <label htmlFor="" className={`${Styles.form_label}`}>
              Company Name
            </label>
            <input type="text" className={`${Styles.form_input}`} />
          </div>
          <div className={`${Styles.form_subdiv}`}>
            <label htmlFor="" className={`${Styles.form_label}`}>
              Phone
            </label>
            <input type="number" className={`${Styles.form_input}`} />
          </div>
          <div className={`${Styles.form_subdiv}`}>
            <label htmlFor="" className={`${Styles.form_label}`}>
              Email
            </label>
            <input type="email" className={`${Styles.form_input}`} />
          </div>
          <button className={`${Styles.submitbtn}`}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default UserForm