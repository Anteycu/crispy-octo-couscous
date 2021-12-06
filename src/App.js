import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

const App = function () {
  return (
    <div>
      <Section title="Top of week">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Best"/>
    </div>
  );
};

export default App;
