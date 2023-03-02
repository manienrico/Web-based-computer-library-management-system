import React,{useState} from 'react'

function Signup() {
  const [name,setName] = useState('')
  const [usernameReg,setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [passRegConfirm,setPassRegConfirm] = useState('')

  const viewDetails=()=>{
    console.log(name+usernameReg+passwordReg+passRegConfirm)
  }


  return (
    <>
      <h2>Signup</h2>
      <main>
        <section>
          {/* error or success notification area */}
        </section>
        <section>
          {/* <form> */}
            <label>Name</label>
            <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your full name'/>
            <label>Username</label>
            <input onChange={(e)=>{setUsernameReg(e.target.value)}} type='email' placeholder='xxx@gmail.com'/>
            <label>Password</label>
            <input onChange={(e)=>{setPasswordReg(e.target.value)}} type='password'/>
            <label>Confirm password</label>
            <input onChange={(e)=>{setPassRegConfirm(e.target.value)}} type='password' />
            <button onClick={viewDetails}>Signup</button>
          {/* </form> */}
        </section>
        <section>
          <span>Already have an account signin <a href='/'>here</a>.</span>
        </section>
      </main>
    </>
  )
}

export default Signup