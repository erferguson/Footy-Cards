import styles from './styles.scss';
import './App.css';

import CardUser from './practice/userCard/userCards'
import FlippedCard from './practice/flippingCard'

// import { UserCard, FlippingCard,FlippingCardFront,FlippingCardBack,} from 'react-ui-cards';

function App() {
  // const data = {
  //   "players" : [
  //       {
  //       "name": "Christian Pulisic",
  //       "position": "Midfield",
  //       "caps": 1
  //       },
  //     ]
  // }

  return (
    <div>
      <header>
        <div>
          <div>This is Footy Cards</div>
        </div>
        <CardUser />
        {/* <FlippedCard /> */}
      </header>
    </div>
  );
}

export default App;
