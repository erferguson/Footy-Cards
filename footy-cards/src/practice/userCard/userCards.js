import React from 'react'
import styles from './userCard.scss';

import { UserCard } from 'react-ui-cards';

function userCards () {
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
      <div className='title-container'>
        <h2>user Cards</h2>
      </div>
        <div className='card-container' >
            <p>Front - user Card</p>
        <UserCard
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
        />
        </div>
        {/* <div className={styles['card-container']}>
            <p>Back - user Card</p>
        <UserCard
          float
          header='https://i.imgur.com/w5tX1Pn.jpg'
          // avatar='https://i.imgur.com/uDYejhJ.jpg'
          // name='Justin Case'
          // name={data.players[0].name}
          // positionName={data.players[0].position}
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
        />
        </div> */}
    </header>
  </div>
);
}

export default userCards