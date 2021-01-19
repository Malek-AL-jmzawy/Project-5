import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Home1 = () => {
    const [steps, setsteps] = useState(0);
    const [stepArr, setStepArr] = useState(["First of all wear a mask keep safe ;)",
        "register then login", "if you want to have a store create it after hovring my account at the nav bar",
        "fill the inputs then submitt",
        "if you want to place an order select your favorite store from home page a great list of stores you'll find ;)",
        "add the quantity then submitt",
        "if you want have a job and be part from our big family just you need to hover at my account and select login as a dilevaryman",
        "enjoy!! ^_^"])
    const [picArr, setpicArr] = useState(["https://previews.123rf.com/images/pushnova/pushnova2004/pushnova200400031/145121250-stay-safe-lettering-keep-healthy-with-cute-planet-earth-in-medical-mask-quarantine-precaution-to-sta.jpg",
        "https://thumbnail.imgbin.com/18/4/11/email-icon-login-icon-9hLbXDZc_t.jpg",
        "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-store-icon-image_1128274.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6PYjw5fzs3c70IEjyZzpcjuvaCp7jKv4mw&usqp=CAU",
        "https://img.icons8.com/cotton/2x/purchase-order.png",
        "https://thumbs.dreamstime.com/b/icon-department-animals-make-order-checkout-online-shopping-e-commerce-concept-outline-label-emblem-store-websites-179071587.jpg",
        "https://image.freepik.com/free-vector/cute-happy-delivery-man-delivers-package-scooter-cartoon-character-illustration-icon-design-isolated_92289-1111.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDtjU3Cn00xAVXJKPJCxSc5ybetQt4xeaBA&usqp=CAU"])

    return (
        <div className="homePage">
            <div></div>
            <div className="row g-3" style={{height:"500px",border:"green solid 1px",marginTop:"100px",marginBottom:"100px"
            ,marginLeft:"150px",marginRight:"150px",textAlign:"center",justifyContent:"center",backgroundColor:" rgba(0, 0, 0, 0.25)",
            backgroundImage:"url(https://wallpaperaccess.com/full/93391.jpg)",backgroundRepeat:"none",backgroundRepeat:"no-repeat",
            boxShadow:"4px 4px 4px 4px black",
            backgroundSize:"cover"}}>
              <Link to="/Login" className="nav-link">
              <h1>Login</h1>
              </Link>
            <p>Dont have an account yet</p>
              <Link to="/register" className="nav-link">
              <h1>Register</h1>
              </Link>
            </div>

            <ul className="rounded-pill" style={{marginLeft:"180px",marginRight:"180px"}} > <li className="list-group-item list-group-item-action login-container2">
                <div>How to use our site
        <div className=" col p-1 mb-2 bg-success text-white rounded-pill "style={{marginLeft:"18px",marginRight:"18px"}} >
                        {stepArr[steps]}
                    </div>
                    <div>
                        <img
                            src={picArr[steps]}
                            alt="pic"
                            className="pPic rounded mx-auto d-block"
                        ></img>{" "}
                        <button onClick={() => { let i = steps - 1; setsteps(i) }} > previous</button>
                        <button onClick={() => { let i = steps + 1; setsteps(i) }} >next</button>
                    </div>
                </div>
            </li></ul>
        </div>
    )
}
export default Home1