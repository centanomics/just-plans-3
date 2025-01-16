let justVibes = ['CM', '', 'AR', '', '', '', 'LO', '', '', ''];
console.log(justVibes.slice(0, 3));
console.log(justVibes.slice(3, 5));
console.log(justVibes.slice(5, 8));
console.log(justVibes.slice(8));

//rotate players should return a rotated array

const rotatePlayers = (players) => {
  const rotatedPlayers = ['', '', '', '', '', '', '', '', '', ''];

  //filter out empty spots on the court
  const filterEmptySpots = players.filter((player) => player);
  // console.log(filterEmptySpots);

  //get all players current index
  const playerSpots = [];
  for (let i = 0; i < filterEmptySpots.length; i++) {
    const spot = players.indexOf(filterEmptySpots[i]);
    playerSpots.push(spot);
  }
  // console.log(playerSpots);

  //pop the last player out then unshift them back in
  const lastPlayer = filterEmptySpots.pop();
  filterEmptySpots.unshift(lastPlayer);
  // console.log(filterEmptySpots);

  //put the players back into the array with empty spots
  for (let i = 0; i < playerSpots.length; i++) {
    rotatedPlayers[playerSpots[i]] = filterEmptySpots[i];
  }

  //print rotated players
  console.log('--------');
  console.log(rotatedPlayers.slice(0, 3));
  console.log(rotatedPlayers.slice(3, 5));
  console.log(rotatedPlayers.slice(5, 8));
  console.log(rotatedPlayers.slice(8));

  return rotatedPlayers;
};

justVibes = rotatePlayers(justVibes);
justVibes = rotatePlayers(justVibes);
