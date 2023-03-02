import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import '../App.css'

function Admin() {
  const [name,setName] = useState('')
  const [nin, setNin] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [wage, setWage] = useState(0)
  const [responsibility, setResponsibility]= useState('')

  const [staffList,setStaffList] = useState([])
  //  const displayAdminInfo=()=>{
  //   console.log(name+nin+address+age+gender+wage+responsibility)
  // }

  const addStaff=()=>{
    
    Axios.post('http://localhost:3001/createStaff',{
      name:name,
      nin:nin,
      address:address,
      age:age,
      gender:gender,
      wage:wage,
      responsibility:responsibility
    }).then(()=>{
      console.log('successful')
      setStaffList([...staffList,
      {
        name:name,
        nin:nin,
        address:address,
        age:age,
        gender:gender,
        wage:wage,
        responsibility:responsibility
      }])
      getStaff() 
    })

  }
  const getStaff=()=>{
    Axios.get('http://localhost:3001/getStaff').then((response)=>{
      setStaffList(response.data)
    })
  }

  useEffect(() => {
    getStaff()
  }, []);

  const deleteStaff=(e)=>{
    let id = e.target.getAttribute('data-target')

    Axios.delete(`http://localhost:3001/deleteStaff/${id}`).then(()=>{
      console.log('Staff delete complete.')
      
        getStaff() 
    })
  }

  return (
    <>
      <nav>
        <a>Profile</a>
        <button><a href='/'>Sign Out</a></button>
      </nav>
    This is the Admin page.
      {/* Staff table from db for the CRUD operatons */}
      <>
      <>The Admin menu.</>
      
      <section>
        {/* <form> */}
          <label>Name<input onChange={(event)=>{setName(event.target.value)}} type='text' placeholder='Full name' id='name' name='name' /></label>
          <label>NIN<input onChange={(event)=>{setNin(event.target.value)}} type='text' placeholder='NIN' id='nin' name='nin' /></label>
          <label>Address<input onChange={(event)=>{setAddress(event.target.value)}} type='text' placeholder='Along Old Portbell rd.' id='address' name='address' /></label>
          <label>Age<input onChange={(event)=>{setAge(event.target.value)}} type='number' placeholder='In yrs.' id='age' name='age' /></label>
          <label>Gender
            <select onChange={(event)=>{setGender(event.target.value)}} id='gender' name='gender'>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
          </label>
          <label>Wage<input onChange={(event)=>{setWage(event.target.value)}} type='number' placeholder='In UG shs.' id='wage' name='wage' /></label>
          <label>Responsibility Days
            <select onChange={(event)=>{setResponsibility(event.target.value)}} id='responsibility' name='responsibility'>
              <option>Monday to Wednesady</option>
              <option>Thursday to Friday</option>
              <option>Saturday to Sunday</option>
            </select>
          </label>
          <button onClick={addStaff}>Add Staff</button>
        {/* </form> */}
      </section>

      <main>This is the Staff table.
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>NIN</th>
              <th>Address</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Wage</th>
              <th>Work days</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((val,key)=>{
              return(
                <>
                <tr>
                  <td>{val.staffName}</td>
                  <td>{val.staffNin}</td>
                  <td>{val.staffAddress}</td>
                  <td>{val.staffAge}</td>
                  <td>{val.staffGender}</td>
                  <td>{val.wage}</td>
                  <td>{val.workDays}</td>
                  <td className='crud'><a href={`/updateStaff?id=${val.staffID}`}>Update</a></td>
                  <td className='crud' data-target={val.staffID} onClick={deleteStaff}>Delete</td>
                </tr>
                </>
              )
            })}
            
          </tbody>
        </table>
      </main>

      <section></section>

      </>
    </>
  )
}

export default Admin