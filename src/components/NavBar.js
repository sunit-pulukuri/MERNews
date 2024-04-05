// import React, { Component } from "react";

// import {Link } from "react-router-dom";
// export default class NavBar extends Component {
//   render() {
//     return (
//       <div >
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark"   >
//           <div className="container-fluid" style={{display:"inline"}}>
//             {/* <a><Link  style={{textDecoration:"none",margin:"4px",color:"white"}} className="navbar-brand" to="#">
//               NewsNigger
//             </Link></a> */}
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//                 <li className="nav-item">
//                   <a><Link style={{textDecoration:"none",margin:"14px",color:"white"}} className="nav-Link active" aria-current="page" to="/home">
//                     Home
//                   </Link>
//                   </a>
//                 </li>
                
//                 <li className="nav-item">
//                   <Link style={{textDecoration:"none",margin:"14px",color:"white"}} className="nav-Link" to="/business">
//                     Business
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link style={{textDecoration:"none",margin:"14px",color:"white"}} className="nav-Link" to="/entertainment">
//                     Entertainment
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link style={{textDecoration:"none",margin:"14px",color:"white"}} className="nav-Link" to="/general">
//                     General
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link style={{textDecoration:"none",margin:"14px",color:"white"}} className="nav-Link" to="/health">
//                     Health
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link style={{textDecoration:"none",margin:"14px",color:"white"}} className="nav-Link" to="/science">
//                     Science
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link style={{textDecoration:"none",margin:"14px",color:"white"}} className="nav-Link" to="/sports">
//                     Sports
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link style={{textDecoration:"none",margin:"14px",color:"white"}} className="nav-Link" to="/technology">
//                     Technology
//                   </Link>
//                 </li>
//               </ul>
              
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }


import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid" style={{ display: "inline" }}>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <li className="nav-item" id="navtop">
                  <Link
                    style={{ textDecoration: "none", margin: "14px", color: "white" }}
                    className="nav-Link active"
                    aria-current="page"
                    to="/general"
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none", margin: "14px", color: "white" }}
                    className="nav-Link"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none", margin: "14px", color: "white" }}
                    className="nav-Link"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none", margin: "14px", color: "white" }}
                    className="nav-Link"
                    to="/general"
                  >
                    General
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none", margin: "14px", color: "white" }}
                    className="nav-Link"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none", margin: "14px", color: "white" }}
                    className="nav-Link"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none", margin: "14px", color: "white" }}
                    className="nav-Link"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none", margin: "14px", color: "white" }}
                    className="nav-Link"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
