import React from 'react'

function Navbar() {
  return (
    <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}
        {/* <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink> */}
        <a href='/'>Home</a>
        <a href='about'>About</a>
        <a href='/'>Sign Out</a>
    </nav>
  )
}

export default Navbar