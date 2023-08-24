import React from 'react'
import './SearchBarStyle.scss'

const SearchBar = () => {
  return (
    <div id="SearchBar" className='flex flex-h flex-h-spacing'>
        <ul className='flex flex-align'>
          <li className='active'>Rechercher un Golf</li>
          <li>Espace abonné</li>
        </ul>
        <div className='SearchBox flex center justify'>
          <input type="text" placeholder="Rechercher ..." />
        </div>
    </div>
  )
}

export default SearchBar