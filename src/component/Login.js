import React, { useEffect, useState } from "react";

// import PropTypes from "prop-types";

const Login = (props) => {
    const [userData, setuserData] = useState([]);
    // const [userId, setuserId] = useState(localStorage.getItem('userId'));
    useEffect(()=>{
        getData();
    },[])
    const getData = async ()=>{
        await fetch(
            "https://assessment.api.vweb.app/users")
                        .then((res) => res.json())
                        .then((json) => {
                            setuserData(json);
                        });
    }
 return(
 <>
<div className="container">

<select className="form-control" onChange={(event)=>{
    localStorage.setItem('userId', event.target.value);
    props.setuserId(event.target.value);
}} value = {props.userId}>
    <option value="">Select User</option>
    {userData.map((elem, index)=>{
        return(
            <option value={elem.user_id}>{elem.name}</option>
        )
    })}


</select>

</div>




</>
 );
    
}
export default Login;
