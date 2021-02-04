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
        <div>
        <div>This is Footy Cards</div>
        
        </div>
        
        <FlippingCard>
          <FlippingCardBack>
            Content that will be displayed on the back of the card
          </FlippingCardBack>
          <FlippingCardFront>
          <table style={ {border: "1px solid red"} }>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Caps</th>
            </tr>
            <tr>
              <td>CP</td>
              <td>Midfield</td>
              <td>1</td>
            </tr>
          </table>
            Content that will be displayed on the front of the card
          </FlippingCardFront>
        </FlippingCard>
      </header>
    </div>
  );
}

export default App;
