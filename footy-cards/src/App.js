import styles from './styles.scss';
import './App.css';

import { UserCard, FlippingCard,FlippingCardFront,FlippingCardBack,} from 'react-ui-cards';

function App() {
  const data = {
    "players" : [
        {
        "name": "Christian Pulisic",
        "position": "Midfield",
        "caps": 1
        },
      ]
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <div>This is Footy Cards</div>
        
        </div>
        <div className={styles['card-container']}>
        <UserCard
          float
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://i.imgur.com/uDYejhJ.jpg'
          name='Justin Case'
          positionName='Software Developer'
          stats={[
            {
              name: 'followers',
              value: 21
            },
            {
              name: 'following',
              value: 37
            },
            {
              name: 'posts',
              value: 117
            }
          ]}
        />
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
              <td>{data.players[0].name}</td>
              <td>{data.players[0].position}</td>
              <td>{data.players[0].caps}</td>
            </tr>
          </table>
            Bottom of front-card
          </FlippingCardFront>
        </FlippingCard>
      </header>
    </div>
  );
}

export default App;
