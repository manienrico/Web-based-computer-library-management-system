import Axios from 'axios'
import React,{useState,useEffect} from 'react'

function Update() {
    //updating clients
const [nameUpdate, setNameUpdate] = useState('')
const [addressUpdate, setAddressUpdate] = useState('')
const [ageUpdate, setAgeUpdate] = useState(0)
const [computerUpdate, setComputerUpdate] = useState('')
const [purposeUpdate, setPurposeUpdate] = useState('')
const [durationUpdate, setDurationUpdate] = useState(0)
const [paymentUpdate, setPaymentUpdate] = useState(0)

const [clientList, setClientList] = useState([])

//updates
const updateClient = ()=>{
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

    Axios.put(`http://localhost:3001/update`,
    {
      id: id,
      name: nameUpdate,
      address:  addressUpdate,
      age:  ageUpdate,
      computer: computerUpdate,
      purpose:  purposeUpdate,
      duration: durationUpdate,
      payment:  paymentUpdate
    }).then((response)=>{
      console.log('updated')
    })
    // getClient()
}

const getClient = ()=>{
  Axios.get('http://localhost:3001/client').then((response)=>{
    setClientList(response.data)
  })
}

useEffect(() => {
  getClient()
}, [updateClient]);


  return (
    <div>
        <nav>
            <a href='/staff/'>Back to Home</a>
        </nav>
        <label>Name</label><input onChange={(event)=>{setNameUpdate(event.target.value)}} type='text' placeholder='Full name' id='name' name='name' 
          />
          <label>Address</label><input onChange={(event)=>{setAddressUpdate(event.target.value)}} type='text' placeholder='Along Old Portbell rd.' id='address' name='address' />
          <label>Age</label><input onChange={(event)=>{setAgeUpdate(event.target.value)}} type='number' placeholder='In yrs.' id='age' name='age' />
          <label>Computer</label><input onChange={(event)=>{setComputerUpdate(event.target.value)}} type='text' placeholder='PC001' id='computer' name='computer' />
         
          <label>Purpose</label>
            <select id='purpose' name='purpose' onChange={(event)=>{setPurposeUpdate(event.target.value)}}>
              <option>Social Media</option>
              <option>E-Mail</option>
              <option>Ms Office</option>
              <option>Internet surfing</option>
              <option>Other</option>
            </select>
          
          <label>Duration</label><input onChange={(event)=>{setDurationUpdate(event.target.value)}} type='number' placeholder='In mins.' id='duration' name='duration' />
          <label>Amount Paid</label><input onChange={(event)=>{setPaymentUpdate(event.target.value)}} type='number' placeholder='UG shs.' id='payment' name='payment' />
          <div className='btn'><button onClick={updateClient}>Update Client</button></div>
    </div>
  )
}

export default Update