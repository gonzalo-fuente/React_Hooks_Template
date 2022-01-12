import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }
  return (
    <div className="add-song">
      <h3>Add a Song</h3>
      <form className='add-song' onSubmit={handleSubmit}>
        <label>Song name:</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type='submit' value='Add Song' />
      </form>
    </div>
  );
}
 
export default NewSongForm;