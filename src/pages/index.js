import * as React from 'react';

const IndexPage = () => {
  return (
    <main>
      <h1>
        Just <span className='teamColor'>Plans</span>
      </h1>
      <div className='court'>
        <div className='spot spot-1'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
        <div className='spot spot-2'>
          <div className='player'>
            <span className='playerInitials'>CM</span>
          </div>
        </div>
        <div className='spot spot-3'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
        <div className='spot spot-4'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
        <div className='spot spot-5'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
        <div className='spot spot-6'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
        <div className='spot spot-7'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
        <div className='spot spot-8'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
        <div className='spot spot-9'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
        <div className='spot spot-10'>
          <div className='player'>
            <span className='playerInitials'></span>
          </div>
        </div>
      </div>
      <div>
        <form>
          <input
            type='text'
            id='initials'
            minlength='2'
            name='initials'
            placeholder='Enter Player Initals'
          />
          <button>Add Player</button>
        </form>
        <button>Rotate</button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Just Plans</title>;
