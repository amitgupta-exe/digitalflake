import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <main>
      <div className='header'>
        <h1 className='header-logo'>DigitalFlake</h1>



        <Link to={"/"}>
          <p className='header-profile'>LogOut</p>
        </Link>
      </div>
    </main>
  )
}

export default Header