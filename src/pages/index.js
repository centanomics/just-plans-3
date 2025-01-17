import * as React from 'react';
import { useState } from 'react';
import rotate from '../utils/rotate';

const IndexPage = () => {
  const [players, setPlayers] = useState([
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
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState('');
  const handleOnClick = (e) => {
    setCurrentPlayer('');
    setIsDisabled(isDisabled ? !isDisabled : isDisabled);
    setCurrentPlayer(parseInt(e.target.id.slice(5)));
    document.getElementById('initials').focus();
    console.log(parseInt(e.target.id.slice(5)) - 1);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    let updatedPlayers = players;
    updatedPlayers[currentPlayer - 1] = e.target[0].value.toUpperCase();
    setPlayers[updatedPlayers];
    document.forms[0].reset();
    setIsDisabled(!isDisabled);
  };

  const rotatePlayers = () => {
    let updatedPlayers = players;
    updatedPlayers = rotate(updatedPlayers);
    setPlayers(updatedPlayers);
  };

  return (
    <main>
      <h1>
        Just <span className='teamColor'>Plans</span>
      </h1>
      <div className='court'>
        <div className='spot spot-1'>
          <div className='player' onClick={handleOnClick} id='spot-1'>
            <span className='playerInitials'>{players[0]}</span>
          </div>
        </div>
        <div className='spot spot-2'>
          <div className='player' onClick={handleOnClick} id='spot-2'>
            <span className='playerInitials'>{players[1]}</span>
          </div>
        </div>
        <div className='spot spot-3'>
          <div className='player' onClick={handleOnClick} id='spot-3'>
            <span className='playerInitials'>{players[2]}</span>
          </div>
        </div>
        <div className='spot spot-4'>
          <div className='player' onClick={handleOnClick} id='spot-4'>
            <span className='playerInitials'>{players[3]}</span>
          </div>
        </div>
        <div className='spot spot-5'>
          <div className='player' onClick={handleOnClick} id='spot-5'>
            <span className='playerInitials'>{players[4]}</span>
          </div>
        </div>
        <div className='spot spot-10'>
          <div className='player' onClick={handleOnClick} id='spot-10'>
            <span className='playerInitials'>{players[9]}</span>
          </div>
        </div>
        <div className='spot spot-9'>
          <div className='player' onClick={handleOnClick} id='spot-9'>
            <span className='playerInitials'>{players[8]}</span>
          </div>
        </div>
        <div className='spot spot-8'>
          <div className='player' onClick={handleOnClick} id='spot-8'>
            <span className='playerInitials'>{players[7]}</span>
          </div>
        </div>
        <div className='spot spot-7'>
          <div className='player' onClick={handleOnClick} id='spot-7'>
            <span className='playerInitials'>{players[6]}</span>
          </div>
        </div>
        <div className='spot spot-6'>
          <div className='player' onClick={handleOnClick} id='spot-6'>
            <span className='playerInitials'>{players[5]}</span>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            type='text'
            id='initials'
            maxLength='2'
            name='initials'
            placeholder={'Enter Player ' + currentPlayer + ' Initals'}
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
