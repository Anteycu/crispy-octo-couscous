import PaintingList from './components/PaintingList';
import Section from './components/Section';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import Box from './components/Box/Box';
import paintings from './paintings.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = function () {
  return (
    <Container>
      <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
      <Box type="medium" />
      <Box type="large" />
      <Alert text="We lost data Master!" type="success" />
      <Alert text="We lost data Master!" type="warning" />
      <Alert text="We lost data Master!" type="error" />
      <Section title="Top of week">
        <PaintingList items={paintings} />
      </Section>
      <ColorPicker options={colorPickerOptions} />
      <Section title="Best" />
    </Container>
  );
};

export default App;
