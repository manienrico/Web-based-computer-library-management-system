import React from 'react'
import '../App.css'

function Home() {
  return (
    <>
      <nav>
        <a>Profile</a>
        <a href='/'>Sign Out</a>
      </nav>
      
      <>The Manager menu.</>
      <>
        <section>
          <>
            <input type='text'/>
            <button>Search</button>
          </>
          <>
            <img src='#' alt='dark-mode'/>
          </>
        </section>
        <main>
          {/* Table data to be pulled from the database */}
          This is the Staff Table for the Manager's view.
        </main>
        <section>Extra shit.</section>
      </>
      
      
    </>
  )
}

export default Home