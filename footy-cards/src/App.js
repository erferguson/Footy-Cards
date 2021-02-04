import logo from './logo.svg';
import './App.css';

import { FlippingCard,FlippingCardFront,FlippingCardBack,} from 'react-ui-cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>This is Footy Cards</div>
        <FlippingCard>
          <FlippingCardBack>
            Content that will be displayed on the back of the card
          </FlippingCardBack>
          <FlippingCardFront>
            Content that will be displayed on the front of the card
          </FlippingCardFront>
        </FlippingCard>
      </header>
    </div>
  );
}

export default App;
