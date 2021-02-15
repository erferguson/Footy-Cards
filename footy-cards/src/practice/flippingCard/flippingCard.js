import React from 'react'
import styles from './flippingCard.scss'
import CP from '../images/cp.jpg'

import { UserCard, FlippingCard,FlippingCardFront,FlippingCardBack,} from 'react-ui-cards';

function flippingCard (){

        const data = {
          "players" : [
              {
              "name": "Christian Pulisic",
              "hometown": "Hershey, PA, America",
              "position": "Midfield",
              "club": "Chelsea FC",
              "caps": 1,
              'ntgoals': 99,
              'ntassists': 66,
              'ntcards': 4
              },
            ]
        }
      
        return (
          <div>
            <header>
              <div className='title'>
                <h2>flipping Card</h2>
              </div>
              <FlippingCard className='main-card'>

                <FlippingCardFront>
                <div className=''>
                  <div className='center-image'>
                    <img src={CP}/>
                  </div>
                  <div className='main-table-front'>
                      <p>{data.players[0].name}</p>
                      <p>position: {data.players[0].position}</p>
                      <p>caps: {data.players[0].caps}</p>
                    {/* <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Caps</th>
                    </tr>
                    <tr>
                        <td>{data.players[0].name}</td>
                        <td>{data.players[0].position}</td>
                        <td>{data.players[0].caps}</td>
                    </tr> */}
                    </div>
                    <div className='main-stats'>
                      <p className='p-stats'>goals: {data.players[0].ntgoals}</p>
                      <p className='p-stats'>assists: {data.players[0].ntassists}</p>
                      <p className='p-stats'>cards: {data.players[0].ntcards}</p>
                    </div>
                </div>
                {/* <UserCard
          className='userCard'
          float
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://i.imgur.com/uDYejhJ.jpg'
          // name='Justin Case'
          name={data.players[0].name}
          positionName={data.players[0].position}
          stats={[
            {
              name: 'Caps',
              // value: {data.players[0].caps}
            },
            {
              name: 'Goals',
              // value: {data.players[0].goals}
            },
            {
              name: 'Assists',
              // value: {data.players[0].assists}
            }
          ]}
        /> */}
                </FlippingCardFront>
                
                <FlippingCardBack>
                <div className='main-table-back'>
                  <p>hometown: {data.players[0].hometown}</p>
                  <p>club: {data.players[0].club}</p>
                </div>
                </FlippingCardBack>

              </FlippingCard>
            </header>
        </div>
    )
}

export default flippingCard