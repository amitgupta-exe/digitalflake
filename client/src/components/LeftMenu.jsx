import React from 'react';
import {Link} from 'react-router-dom'

const LeftMenu = () => {
  return (
    <main>
      <div className="left-menu">

      <Link to={"/home"}>Home</Link>
      <Link to={"/categories"}>categories</Link>
      <Link to={"/products"}>Products</Link>

      </div>
    </main>
  )
}

export default LeftMenu