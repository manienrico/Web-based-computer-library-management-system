import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import '../App.css'

  

function Staff() {
  //adding clients
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState(0)
  const [computer, setComputer] = useState('')
  const [purpose, setPurpose] = useState('')
  const [duration, setDuration] = useState(0)
  const [payment, setPayment] = useState(0)

  const [clientList, setClientList] = useState([])

      

  


  const addClient =()=>{
    
    Axios.post('http://localhost:3001/create',{
      name:name,
      address:address,
      age:age,
      computer:computer,
      purpose:purpose,
      duration:duration,
      payment:payment
  }).then(()=>{
    // console.log('successful.')
    setClientList([...clientList,
      {
        name:name,
        address:address,
        age:age,
        computer:computer,
        purpose:purpose,
        duration:duration,
        payment:payment
      }])
      getClient()
  })
  
  }

  const getClient = ()=>{
    Axios.get('http://localhost:3001/client').then((response)=>{
      setClientList(response.data)
    })
  }


  const deleteClient=(e)=>{

    let id = e.target.getAttribute('data-target')

    Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
      console.log('Deleted!!!!')
      getClient()
    })
  }

  useEffect(() => {
    getClient()
  }, []);

  




  return (
    <div className='App'>
      <nav>
        <a>Profile</a>
        <button><a href='/'>Sign Out</a></button>
      </nav>
    This is the Staff page.
      <div className='container'>
      <div className='Menu'>The Staff menu.</div>
      <section className='staff-section'>
        
          <label>Name</label><input onChange={(event)=>{setName(event.target.value)}} type='text' placeholder='Full name' id='name' name='name' 
          />
          <label>Address</label><input onChange={(event)=>{setAddress(event.target.value)}} type='text' placeholder='Along Old Portbell rd.' id='address' name='address' />
          <label>Age</label><input onChange={(event)=>{setAge(event.target.value)}} type='number' placeholder='In yrs.' id='age' name='age' />
          <label>Computer</label><input onChange={(event)=>{setComputer(event.target.value)}} type='text' placeholder='PC001' id='computer' name='computer' />
         
          <label>Purpose</label>
            <select id='purpose' name='purpose' onChange={(event)=>{setPurpose(event.target.value)}}>
              <option>Social Media</option>
              <option>E-Mail</option>
              <option>Ms Office</option>
              <option>Internet surfing</option>
              <option>Other</option>
            </select>
          
          <label>Duration</label><input onChange={(event)=>{setDuration(event.target.value)}} type='number' placeholder='In mins.' id='duration' name='duration' />
          <label>Amount Paid</label><input onChange={(event)=>{setPayment(event.target.value)}} type='number' placeholder='UG shs.' id='payment' name='payment' />
          <div className='btn'><button onClick={addClient}>Add Client</button></div>
        
      </section>

      {/* <section>
        <Update />
      </section> */}

      {/* Clients table from db for the CRUD operatons */}
      <main>
        <h2>Staff</h2>
        {/* <button onClick={getClient}>See Clients</button> */}
            <table>
              <thead>
                {/* <th>Client ID</th> */}
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>Computer</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Payment</th>
              </thead>
              <tbody>
              {clientList.map((val, key)=>{
                return(
                  <>
                <tr>
                  {/* <td>{val.clientID}</td> */}
                  <td>{val.clientName}</td>
                  <td>{val.clientAddress}</td>
                  <td>{val.clientAge}</td>
                  <td>{val.computer}</td>
                  <td>{val.purpose}</td>
                  <td>{val.duration}</td>
                  <td>{val.payment}</td>
                  <td className='crud'><a href={`/update?id=${val.clientID}`}>Update</a></td>
                  <td className='crud' data-target={val.clientID} onClick={deleteClient}>Delete</td>
                </tr>
                </>
                )
              })}
              </tbody>
            </table>

        
      </main>

      <section>Extra shit.</section>
      </div>
    </div>
  )
}

export default Staff