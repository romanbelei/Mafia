// import style from './Button.module.css';

export const Button = ({ name, text, onClick }) => {
  return (
    <form className={name}>
      <button type="button" onClick={() => onClick()}>
        {text}
      </button>
    </form>
  );
};
