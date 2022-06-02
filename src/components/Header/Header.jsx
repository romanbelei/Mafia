import React, { useState } from 'react';
import style from './Header.module.css';
import { Button } from '../Button';
import { LoginForm } from '../LoginForm';

export function Header() {
  const [modalLoginUp, setModalLoginUp] = useState(false);
  const [modalLoginIn, setModalLoginIn] = useState(false);
  const onClickSingUp = () => {
    setModalLoginUp(true);
  };
  const onClickCloseUp = () => {
    setModalLoginUp(false);
  };

  const onClickSingIn = () => {
    setModalLoginIn(true);
  };
  const onClickCloseIn = () => {
    setModalLoginIn(false);
  };
  return (
    <>
      <header className={style.header} id="header">
        {/* {children} */}
        <h1 className={style.gameName}>МАФІЯ</h1>
        <Button name={style.singIn} text="Bвійти" onClick={onClickSingIn} />
        <Button
          name={style.singUp}
          text="Зареєструватись"
          onClick={onClickSingUp}
        />
      </header>
      {modalLoginUp && (
        <LoginForm onClickClose={onClickCloseUp} text="Зареєструватись" />
      )}
      {modalLoginIn && (
        <LoginForm onClickClose={onClickCloseIn} text="Bвійти" />
      )}
    </>
  );
}
// className = { style.rule }
// className={style.signOutform}
