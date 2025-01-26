import * as React from 'react';
import { useState } from 'react';
import rotate from '../utils/rotate';

const IndexPage = () => {
  const [detPlayers, setDetPlayers] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [players, setPlayers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [willRotate, setWillRotate] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState('');
  const handleOnClick = (e) => {
    setCurrentPlayer('');
    setIsDisabled(isDisabled ? !isDisabled : isDisabled);
    setCurrentPlayer(parseInt(e.target.id.slice(5)));

    const playerExists = players.filter(
      (player) => player.position === parseInt(e.target.id.slice(5))
    );
    // console.log('pl', playerExists);

    document.getElementById('initials').value =
      playerExists.length !== 0 ? playerExists[0].name : '';

    document.getElementById('initials').focus();
    console.log('index', parseInt(e.target.id.slice(5)) - 1);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);

    let updatedPlayers = players;
    // console.log('pre', updatedPlayers);

    const re = /\b[a-zA-Z]/g;

    const newPlayer = {
      name: e.target[0].value,
      position: currentPlayer,
      initials: e.target[0].value.match(re).join(''),
    };

    const playerExists = updatedPlayers.findIndex(
      (player) => player.position === newPlayer.position
    );
    if (playerExists !== -1) {
      updatedPlayers.splice(playerExists, 1);
      // console.log('post', updatedPlayers);
      updatedPlayers.push(newPlayer);
      // console.log('post2', updatedPlayers);
    } else {
      updatedPlayers.push(newPlayer);
    }
    // updatedPlayers.push(newPlayer);
    // console.log('new', newPlayer);

    setPlayers(updatedPlayers.sort((a, b) => a.position - b.position));
    document.forms[0].reset();
    setIsDisabled(!isDisabled);
  };

  const rotatePlayers = () => {
    document.forms[0].reset();
    let rotatedPlayers = players;
    rotatedPlayers = rotate(rotatedPlayers);
    setPlayers(rotatedPlayers);
    setWillRotate(!willRotate);
  };

  return (
    <main>
      <h1>
        Just <span className='teamColor'>Plans</span>
      </h1>
      <div className='court'>
        {detPlayers.map((playerz, index) => (
          <div className={'spot spot-' + (index + 1)} key={index}>
            <div
              className='player'
              onClick={handleOnClick}
              onTouchStart={handleOnClick}
              id={'spot-' + (index + 1)}
            >
              <span
                className='playerInitials'
                onClick={handleOnClick}
                onTouchStart={handleOnClick}
                id={'spat-' + (index + 1)}
              >
                {players.findIndex(
                  (player) => player.position - 1 === index
                ) !== -1
                  ? players.filter((player) => player.position - 1 === index)[0]
                      .initials
                  : ''}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            type='text'
            id='initials'
            name='initials'
            placeholder={'Enter Player ' + currentPlayer + ' Name'}
            disabled={isDisabled}
          />
          <button type='submit' disabled={isDisabled}>
            Add Player
          </button>
        </form>
        <button onClick={rotatePlayers}>Rotate</button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Just Plans</title>;
