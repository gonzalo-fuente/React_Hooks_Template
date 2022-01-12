import React, { useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'All Too Well', id: 1 },
    { title: 'Nightflyer', id: 2 },
    { title: 'Suicide Is Murder', id: 3 }
  ]);

  const [age, setAge] = useState(20);
  
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  
  useEffect(() => {
    console.log('useEffect callback', songs);
  }, [songs]);
  
  useEffect(() => {
    console.log('useEffect callback', age);
  }, [age]);

  return (
    <div className="song-list">
      <h2>TOP 2021 Songs</h2>
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button className='btn' onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
    </div>
  );
}

export default SongList;