import s from './Box.module.css';

function Box({ type = 'medium', classNames = '', styles }) {
  return (
    <div className={`${s[type]} ${classNames}`} style={styles}>
      Box
    </div>
  );
}

export default Box;
