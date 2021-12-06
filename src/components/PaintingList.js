import Painting from './Painting';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            url={item.url}
            title={item.title}
            author={item.author}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingList;
