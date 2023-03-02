import Axios from 'axios'
import React,{useState} from 'react'

function UpdateStaff() {
    const [nameUpdate,setNameUpdate] = useState('')
    const [ninUpdate, setNinUpdate] = useState('')
    const [addressUpdate, setAddressUpdate] = useState('')
    const [ageUpdate, setAgeUpdate] = useState('')
    const [genderUpdate, setGenderUpdate] = useState('')
    const [wageUpdate, setWageUpdate] = useState(0)
    const [responsibilityUpdate, setResponsibilityUpdate]= useState('')

  const updateStaff = ()=>{
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')

    Axios.put(`http://localhost:3001/staffUpdate`,
    {
        id: id,
        name: nameUpdate,
        nin: ninUpdate,
        address: addressUpdate,
        age: ageUpdate,
        gender: genderUpdate,
        wage: wageUpdate,
        responsibility: responsibilityUpdate
    }).then(()=>{
        console.log('Staff successfully updated.')
    })
  }

  return (
    <div>
        <nav>
            <a href='/admin/'>Back to Home</a>
        </nav>
        <div>
        <label>Name<input onChange={(event)=>{setNameUpdate(event.target.value)}} type='text' placeholder='Full name' id='name' name='name' /></label>
          <label>NIN<input onChange={(event)=>{setNinUpdate(event.target.value)}} type='text' placeholder='NIN' id='nin' name='nin' /></label>
          <label>Address<input onChange={(event)=>{setAddressUpdate(event.target.value)}} type='text' placeholder='Along Old Portbell rd.' id='address' name='address' /></label>
          <label>Age<input onChange={(event)=>{setAgeUpdate(event.target.value)}} type='number' placeholder='In yrs.' id='age' name='age' /></label>
          <label>Gender
            <select onChange={(event)=>{setGenderUpdate(event.target.value)}} id='gender' name='gender'>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
          </label>
          <label>Wage<input onChange={(event)=>{setWageUpdate(event.target.value)}} type='number' placeholder='In UG shs.' id='wage' name='wage' /></label>
          <label>Responsibility Days
            <select onChange={(event)=>{setResponsibilityUpdate(event.target.value)}} id='responsibility' name='responsibility'>
              <option>Monday to Wednesady</option>
              <option>Thursday to Friday</option>
              <option>Saturday to Sunday</option>
            </select>
          </label>
          <button onClick={updateStaff}>Update Staff</button>
        </div>
    </div>
  )
}

export default UpdateStaff