import './App.css';

// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Search from "./components/Search";
import Staff from "./components/Staff";
import Admin from "./components/Admin";
import Update from './components/Update';
import UpdateStaff from './components/UpdateStaff';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='search' element={<Search />} />
          <Route path='staff' element={<Staff />} />
          <Route path='admin' element={<Admin />} />
          <Route path='update' element={<Update/>} />
          <Route path='updateStaff' element={<UpdateStaff/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
