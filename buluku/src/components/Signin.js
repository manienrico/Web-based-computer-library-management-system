import React,{useState} from 'react'

function Signin() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')




  return (
    <>
      <main>
        <h2>Sign In</h2>
        <section>
          <form action='register'>
            <label>Username</label>
            <input onChange={(e)=>{setUsername(e.target.value)}} type='email' placeholder='xxx@gmail.com'/>
            <label>Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type='password'/>
            <button>Sign In</button>
            <button><a href='home'>Test as Manager</a></button>
            <button><a href='staff'>Test as Staff</a></button>
            <button><a href='admin'>Test as Administrator</a></button>
          </form>
          <span>New users create an account <a href='register'>here</a>.</span>
        </section>

      </main>
      <footer>Enrico Mani ©2022.</footer>
    </>
  )
}

export default Signin