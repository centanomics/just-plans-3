// let justVibes = [
//   {
//     name: 'Cent Myers',
//     position: 2,
//     initials: 'CM',
//   },
//   {
//     name: 'Andrew Johnson',
//     position: 4,
//     initials: 'AJ',
//   },
//   {
//     name: 'Megan Sides',
//     position: 9,
//     initials: 'MS',
//   },
// ];
// console.log(justVibes);

const rotatePlayers = (players) => {
  let playerSpots = [];
  for (let i = 0; i < players.length; i++) {
    playerSpots.push(players[i].position);
  }
  // console.log(playerSpots);

  const lastSpot = playerSpots.shift();
  playerSpots.push(lastSpot);

  // console.log(playerSpots);

  for (let i = 0; i < players.length; i++) {
    players[i].position = playerSpots[i];
  }
  // console.log(players);

  // console.log(players.sort((a, b) => a.position - b.position));
  return players.sort((a, b) => a.position - b.position);
};

// justVibes = rotatePlayers(justVibes);
// justVibes = rotatePlayers(justVibes);
// justVibes = rotatePlayers(justVibes);

module.exports = rotatePlayers;
