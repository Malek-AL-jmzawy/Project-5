import React, { Component } from 'react'
import { BrowserRouter as Router , Route, Link } from "react-router-dom"; 

const Header=()=> {
   
        return (
       
           <div className="container">    

        <nav className=" navheader">    

          <div className="" >    

            <ul className="navbar-nav ">    

              <li className="nav-item">    
            <Link to='/Login' className="nav-link">Login</Link>    

              </li>    

              <li className="nav-item">    

                <Link to='/register' className="nav-link">Register</Link>    

              </li>    

               
            </ul>    

          </div>    

        </nav> <br />   
            </div>
        )
    
}

export default Header
