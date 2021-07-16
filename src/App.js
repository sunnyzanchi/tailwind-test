import Button from './Button';
import './App.css';

function App() {
  return (
    <div>
      <Button className="block mb-4">Button</Button>
      <Button className="block mb-4" disabled>
        Button
      </Button>
      <Button className="block mb-4" labelOnly>
        Button
      </Button>
      <Button className="block mb-4" secondary>
        Button
      </Button>
      <Button className="block mb-4" tertiary>
        Button
      </Button>
    </div>
  );
}

export default App;
