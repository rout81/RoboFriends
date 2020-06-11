import React from 'react';

const Searchbox = ({searchChange}) => {
  return (
    <div className="pa2">
      <input onChange={searchChange} type="search" placeholder="Search Robots" className="pa3 ba b--green bg-lightest-green" />
    </div>
  )
}

export default Searchbox;