import Painting from './components/Painting';
import paintings from './paintings.json';

const App = function () {
  return (
    <div>
      {paintings.map(painting => (
        <Painting
          key={painting.id}
          imageUrl={painting.url}
          title={painting.title}
          author={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))}
    </div>
  );
};

export default App;
