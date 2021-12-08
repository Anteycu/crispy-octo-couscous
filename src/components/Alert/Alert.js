import s from './Alert.module.css';

function Alert({ text, type }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

export default Alert;
