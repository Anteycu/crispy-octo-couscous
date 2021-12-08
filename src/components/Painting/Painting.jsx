import s from './Painting.module.css';
import defaultImage from './default.jpg';

const Painting = function ({
  url = defaultImage,
  title,
  author,
  price,
  quantity,
}) {
  return (
    <div className={s.container}>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author.url}>{author.tag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 6 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

export default Painting;
