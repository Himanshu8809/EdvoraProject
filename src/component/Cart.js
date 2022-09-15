import React, { useState, useEffect } from "react";

export const Cart = (props) => {
  const [userDetail, setuserDetail] = useState([]);
  const [count, setcount] = useState(1);
  const [countcart, setconutcart] =  useState(0);
  let cartcount = 0;
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await fetch("https://assessment.api.vweb.app/orders ")
      .then((res) => res.json())
      .then((json) => {
        setuserDetail(json);
      });
  };
  useEffect(()=>{

  },[props.userId])

  let nextClick = () => {
    let temp = count;
    setcount(temp + 1);
  };
  let prevClick = () => {
    let temp = count;
    count > 1 ? setcount(temp - 1) : setcount(temp);
  };
  const incCount = ()=>{
    let prevState = countcart;
    setconutcart(prevState +1)
  }

  return (
    <div style={{marginTop : "70px"}} >

      {/* <div className=" d-flex justify-content-start mt-1 ml-2 ">
        <button
          type="button"
          className="btn btn-dark m-2 btn3"
          onClick={() => props.setPagetype("home")}
        >
          Home page
        </button>
      </div> */}
      {/* <div className=" d-flex justify-content-center">
        <h2>Total Order-{userDetail.length}</h2>
      </div> */}

      <div className=" container-fluid row mt-3 ">
        {userDetail.map((elem, index) => {
          return (
           elem.user_id == localStorage.getItem('userId')? 
            <div className="col-3 m-auto d-flex justify-content-center">
              <div
                className=" bg-light justify-content-center"
                hidden={
                  count > 1
                    ? index + 1 >= count * 20 || (count - 1) * 20 >= index + 1
                    : index + 1 > count * 20
                }
              >
                <div
                  class="card m-2 d-flex justify-content-center text-center"
                  style={{ width: "18rem" }}
                >
                  <div class="card-header">Order id-{elem.order_id} </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                    User id-{elem.user_id}
                    </li>
                    <li class="list-group-item">Product id-{elem.product_id}</li>
                    <li class="list-group-item">Quantity-{elem.quantity}</li>
                    <li class="list-group-item">
                      Order Date-{(elem.order_date)}
                    </li>
                  </ul>
                </div>
              </div>
            </div> : <>
              
            </>
          );
        })}
      </div>
      {/* <div className="d-flex justify-content-center">

      {
        

        cartcount==0?<div>Please Add something</div>:<></>
      }
      </div> */}
      <div className=" d-flex justify-content-center m-4 ">
        <button
          type="button"
          className="btn btn-dark m-2 btn1 "
          onClick={prevClick}
          disabled={count <= 1 ? true : false}
        >
          ...Previous
        </button>
        <button
          type="button"
          className="btn btn-dark m-2 btn1"
          onClick={nextClick}
          disabled={count >= userDetail.length / 20 ? true : false}
        >
          Next....
        </button>
      </div>
    </div>
  );
};
