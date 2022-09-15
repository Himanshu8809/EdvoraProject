// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Cart } from './component/Cart';
// import Login from './component/Login';
import { HomePage } from './component/HomePage';
import { useState, useEffect } from 'react';
import { Navbar } from './component/Navbar';

function App() {
  const [pagetype, setPagetype] = useState("home");
  const [userId, setuserId] = useState(localStorage.getItem('userId'));
  return (
   <>
  { pagetype ==="home" ?

    <HomePage setPagetype={setPagetype} pagetype = {pagetype} userId={userId} setuserId={setuserId}/>

  : (
    <>
    <Navbar pagetype = {pagetype} setPagetype={setPagetype} userId={userId} setuserId={setuserId}/>
    <Cart setPagetype={setPagetype} pagetype = {pagetype} userId={userId}/>
    </>
  )
  }
   </>
  );
}

export default App;
