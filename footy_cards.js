
// json validated at jsonlint.com //

const data = {
    "players" : [
        {
        "name": "Christian Pulisic",
        "position": "Midfield",
        "caps": 1
        },
        {
        "name": "player2",
        "position": "position2",
        "caps": "caps2"
        },
        {
        "name": "player3",
        "position": "position3",
        "caps": "caps3"
        },
        {
        "name": "player4",
        "position": "position4",
        "caps": "caps4"
        },
        {
        "name": "player5",
        "position": "position5",
        "caps": "caps5"
        },
        {
        "name": "player6",
        "position": "position6",
        "caps": "caps6"
        },
        {
        "name": "player7",
        "position": "position7",
        "caps": "caps7"
        },
        {
        "name": "player8",
        "position": "position8",
        "caps": "caps8"
        },
        {
        "name": "player9",
        "position": "position9",
        "caps": "caps9"
        },
        {
        "name": "player10",
        "position": "position10",
        "caps": "caps10"
        },
        {
        "name": "player11",
        "position": "position11",
        "caps": "caps11"
        }
    ]
}

function getData(){

    console.log(data.players)

    let playerList = data.players

    playerList.forEach(function( val, i){

        let name = val.name
        console.log(name)

        let position = val.position
        console.log(position)

        let caps = val.caps
        console.log(caps)
    })
}
getData()
