import classes from './profile-form.module.css';
import { useRef } from 'react';

function ProfileForm(props) {
  const newPasswordInput = useRef();
  const oldPasswordInput = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredNewPassword = newPasswordInput.current.value;
    const enteredOldPassword = oldPasswordInput.current.value;

    props.onChangePassword(enteredOldPassword, enteredNewPassword);


    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    console.log(data);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordInput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
