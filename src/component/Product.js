import React from "react";
import { useEffect, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const Product = () => {
  const [userProduct, setuserProduct] = useState([]);
  const [count, setcount] = useState(1);
  const [data, setdata] = useState({});
  const [dataindex, setdataindex] = useState({});
  const [addCartmodal, setaddcartmodal] = useState(false);

  const togglemodal = () => {
    let addmodel = !addCartmodal;
    setaddcartmodal(addmodel);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch("https://assessment.api.vweb.app/products")
      .then((res) => res.json())
      .then((json) => {
        setuserProduct(json);
      });
  };

  let nextClick = () => {
    let temp = count;
    setcount(temp + 1);
  };
  let prevClick = () => {
    let temp = count;
    count > 1 ? setcount(temp - 1) : setcount(temp);
  };
  return (
    <div>
      <div className="container-fluid row   ">
        {userProduct.map((elem, index) => {
          return (
            <div className="col-3 mt-3 d-flex justify-content-center">
              <div
                className=" bg-light  justify-content-center "
                hidden={
                  count > 1
                    ? index + 1 >= count * 20 || (count - 1) * 20 >= index + 1
                    : index + 1 > count * 20
                }
                // hidden = {index+1  > count*20}
              >
                <div
                  className="card m-1 d-flex justify-content-center text-center"
                  style={{ width: "18rem", height: "20rem" }}
                >
                  <img
                    src={
                      index % 5 === 0
                        ? img1
                        : index % 5 === 1
                        ? img2
                        : index % 5 === 2
                        ? img3
                        : index % 5 === 3
                        ? img4
                        : index % 5 === 4
                        ? img5
                        : ""
                    }
                    className="card-img-top"
                    style={{ width: "18rem", height: "10rem" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {elem.product_id}. {elem.name}
                    </h5>
                    <p className="card-text text-center">
                      Quantity-{elem.stock} , Price-${elem.selling_price}
                    </p>
                    <div className=" d-flex justify-content-center mt-1  ">
                      <button
                        type="button"
                        className="btn btn-dark "
                        onClick={() => {
                          setdata(elem);
                          setdataindex(index);
                          togglemodal();
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" d-flex justify-content-center mt-4 ">
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
          disabled={count >= userProduct.length / 20 ? true : false}
        >
          Next....
        </button>
      </div>
      <Modal
        isOpen={addCartmodal}
        toggle={() => togglemodal()}
        className=""
        size="lg"
      >
        <ModalHeader toggle={() => togglemodal()}>Add to Cart</ModalHeader>
        <ModalBody>
          <div>
            <div className="container-fluid row ">
              <div className="col-6">
                <div class="card" style={{ width: "auto" }}>
                  <img
                    src={
                      dataindex % 5 === 0
                        ? img1
                        : dataindex % 5 === 1
                        ? img2
                        : dataindex % 5 === 2
                        ? img3
                        : dataindex % 5 === 3
                        ? img4
                        : dataindex % 5 === 4
                        ? img5
                        : ""
                    }
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-6" >
                <h5 className="mt-2" style={{marginBottom:"20px"}}>
                  {data.product_id}. {data.name}
                </h5>
                <div className="row">
                  <div className="col-3" style ={{paddingTop:"5px"}}>Quantity-</div>
                  <div className="col-4">
                  <input
                    type={"number"}
                    placeholder={"1"}
                    className="form-control"
                    min="1"
                    max={data.stock}
                  ></input>
                  </div>
                  <div className="col-1"></div>
                  <div className=" col-4" style ={{paddingTop:"5px"}}>Price- ${data.selling_price}</div>
                </div>
                <Button color="primary" className="form-control" onClick={() => togglemodal()} style={{marginTop:"2rem"}}>
                  <b>Add to Cart</b>
                </Button>
              </div>
            </div>
          </div>
        </ModalBody>

        {/* <ModalFooter>

                <Button color="primary" onClick={()=>togglemodal()}>Add to Cart</Button> */}
        {/* <Button color="secondary" onClick={()=>togglemodal()}>Cancel</Button>
          </ModalFooter> */}
      </Modal>
    </div>
  );
};
