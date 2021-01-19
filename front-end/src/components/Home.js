import React, { useState, useEffect } from "react";
import Store from "./Store";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Home = () => {
  const [stores, setStores] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [steps, setsteps] = useState(0);
    const [stepArr, setStepArr] = useState(["Enjoy our coffee ;)",
        "Fresh vegetables",
        "Fresh fruit",
        "More than 20 types of bakery products ;)",
        "Designed by logiCoder",
        "enjoy!! ^_^"])
    const [picArr, setpicArr] = useState(["https://sw23966.smartweb-static.com/upload_dir/pics/slider2.w1240.h440.fill.jpg",
    "https://www.f-covers.com/cover/fruits-and-vegetables-facebook-cover-timeline-banner-for-fb.jpg",
        "https://timelinecovers.pro/facebook-cover/download/tropical-fruits-with-strawberries-facebook-cover.jpg",
        "https://lh3.googleusercontent.com/proxy/ZyP88W_Y3t_xZRNvLJEb2oSGJFBXmF712uez4LtdpBFTIKRIQ-5nVTBM_vdFxa57YRoCIMfthMjUEbuD-x6ZBctUHvqSJBXirs8b",
        
        "https://coverfiles.alphacoders.com/503/50382.jpg",
        "https://www.f-covers.com/cover/happy-blue-smile-baby-blue-facebook-cover-timeline-banner-for-fb.jpg",
      ])

  useEffect(() => {
    getAllStores();
  }, []);
setTimeout(()=>{if(steps!==(stepArr.length-1)){ let i = steps + 1; setsteps(i)}},5000)
  const getAllStores = () => {
    axios
      .get("http://localhost:5000/allstore")
      .then((response) => {
        setStores(response.data);  
      })
      .catch((error) => {
        throw error;
      });
  };

  const getOrders = async () => {
    const user = jwt_decode(localStorage.getItem("token"));
    let data = { user_id: user.user_id };
    axios
      .get(`http://localhost:5000/getorder/${user.user_id}`)
      .then((response) => {
        setOrderList(response.data);
        localStorage.setItem("order", JSON.stringify(response.data));
        getOrders();
      })
      .catch((error) => {
        throw error;
      });
  };

  const getSpecificStores = (e) => {
    const user = jwt_decode(localStorage.getItem("token"));
    let data = { store_category: e.target.name };
    axios
      .post("http://localhost:5000/specificstore", data)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        throw error;
      });
  };

  const renderStores = stores.map((store) => (
    <Link
      className="link"
      to={{
        pathname: `/infostore/${store.store_id}`,
        state: store,
      }}
      style={{ textDecoration: "none" }}
    >
      <Store data={store} />
    </Link>
  ));


  return (
    <div>
      {/* {user?( <div></div>):()} */}
      <div className="store-category">
        <button
          className="category"
          style={{ marginLeft: "7px" }}
          onClick={getAllStores}
        >
          All
        </button>
        <button
          className="category"
          name="Groceries"
          onClick={getSpecificStores}
        >
          Groceries
        </button>
        <button className="category" name="Bakery" onClick={getSpecificStores}>
          Bakery
        </button>
        <button className="category" name="Coffee" onClick={getSpecificStores}>
          Coffee
        </button>
        <button className="category" name="Flowers" onClick={getSpecificStores}>
          Flowers
        </button>
      </div>
      <ul className="" style={{textAlign:"center",marginTop:"100px",marginRight:"50px"}} > <li className="list-group-item list-group-item-action ">
                <div>
        <div className=" col p-1 mb-2 bg-success text-white rounded-pill " >
                        {stepArr[steps]}
                    </div>
                    <div 
>
                        <img
                            src={picArr[steps]}
                            alt="pic"
                            className=" "
                            style={{width:"100%",height:"auto"}}
                        ></img>{" "}
                        <button onClick={() =>{if(steps!==0){ let i = steps - 1; setsteps(i)}}} > previous</button>
                        <button onClick={() => {if(steps!==(stepArr.length-1)){ let i = steps + 1; setsteps(i)}}} >next</button>
                    </div>
                </div>
            </li></ul>
      <div className="category" className="store-container2">
        {renderStores}
      </div>
    </div>
  );
};

export default Home;
