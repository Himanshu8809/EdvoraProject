import React from 'react';
import { Navbar } from './Navbar';
import { Product } from './Product';

export const HomePage = (props) => {
  return (
    <div>
    <div className='container-fluid mt-0'>

        <Navbar setPagetype={props.setPagetype} pagetype = {props.pagetype} userId={props.userId} setuserId={props.setuserId}/>
    </div>
        <div className='mt-5'>

        <Product/>
        </div>
    </div>
  )
}
