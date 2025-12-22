import React from 'react';
import CharContext from './CharContext';
import A from './A';

const CharContainer = () => {
  return (
    <CharContext.Provider value={{color:"blue", fontSize:"50px"}}>
      <A />
    </CharContext.Provider>
  )
};

export default CharContainer;