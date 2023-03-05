import React from 'react'

const Header = ({hadleToggle}) => {
  return (
    <div className='header'>
        <h1>Note</h1>
        <button className='save' onClick={() => hadleToggle(
            //if darkmode is true set it to false if it is false set it to true 
                                      (previousDarkMode) => !previousDarkMode
        )}>Toggle Mode</button>
    </div>
  )
}

export default Header