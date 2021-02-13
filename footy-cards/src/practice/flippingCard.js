import React from 'react'
import styles from '../styles.scss';

import { FlippingCard,FlippingCardFront,FlippingCardBack,} from 'react-ui-cards';

function flippingCard (){

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
          <div>
            <header>
              <div>
                <div>flipping Card</div>
              </div>
              <FlippingCard>

                <FlippingCardFront>
                <div className={styles['card-container']}>
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
                </div>
                </FlippingCardFront>
                
                <FlippingCardBack>
                <div className={styles['card-container']}>
                    <p>Content that will be displayed on the back of the card</p>
                </div>
                </FlippingCardBack>

              </FlippingCard>
            </header>
        </div>
    )
}

export default flippingCard