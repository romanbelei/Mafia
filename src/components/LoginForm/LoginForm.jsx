import { ReactComponent as LogoIcon } from '../../images/sprite.svg';
import { useState } from 'react';
import style from './LoginForm.module.css';
import { authFireBase } from '../AuthFireBase';

export const LoginForm = ({ text, onClickClose, method }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitUp, setSubmitUp] = useState(false);

  //   const reset = () => {
  //     setEmail('');
  //     setPassword('');
  //   };

  const handleChange = e => {
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value });
    switch (e.currentTarget.name) {
      case 'email':
        return setEmail(e.currentTarget.value);
      case 'password':
        return setPassword(e.currentTarget.value);
      case 'name':
        return setName(e.currentTarget.value);
      default:
        return;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setSubmitUp(true);
    // onClickClose();
  };

  const submitOff = () => {
    setSubmitUp(false);
  };
  if (submitUp && email && password) {
    submitOff();
    onClickClose();
    authFireBase(name, email, password, method);
  }
  return (
    <>
      {/* {submitUp && (
        <AuthFireBase
          email={email}
          password={password}
          closeForm={onClickClose}
          submitOff={submitOff}
          metod="up"
        />
      )} */}
      <div id="registerForm" className={style.backdrop}>
        <form className={style.registerForm} onSubmit={handleOnSubmit}>
          <button
            className={style.registerModalCloseBtn}
            type="button"
            aria-label="закриття модального вікна"
            onClick={() => onClickClose()}
          >
            <LogoIcon />
          </button>
          <input
            className={style.registerFormInput}
            type="name"
            name="name"
            value={name}
            id="registerName"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            className={style.registerFormInput}
            type="email"
            name="email"
            value={email}
            id="registerEmail"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            className={style.registerFormInput}
            type="password"
            name="password"
            value={password}
            id="registerPassword"
            placeholder="Пароль"
            onChange={handleChange}
            required
          />
          <button type="submit" id="signUp" className={style.registerFormBtn}>
            {text}
          </button>
        </form>
      </div>
    </>
  );
};
