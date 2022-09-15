import React from 'react';
import Login from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { Cart } from './Cart';

export const Navbar = (props) => {
  return (
 <div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-light nav fixed-top" >
  <a className="navbar-brand" href="/" style={{marginLeft:"20px",padding:"20px"}}>Edvora</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      {
        (props.pagetype == "home") ? <li className=''>
      <button type="button" class="btn btn-outline-light btn2" onClick={()=>props.setPagetype("cart")} >Your Cart</button>
      </li> : <li className=''>
      <button type="button" class="btn btn-outline-light btn2" onClick={() => props.setPagetype("home")} >Home Page</button>
      </li>
      }
      
      <li className="container  ">
        <Login userId={props.userId}  setuserId={props.setuserId}/>
      </li>
      <li className=" icon ">
      <FontAwesomeIcon icon={faUser}  />
      </li>
   
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    </div>
  )
}
