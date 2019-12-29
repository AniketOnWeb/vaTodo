// import React, { useState } from "react";
// import styled from "styled-components";
// import firebase from "../../Firebase/firebase";
// import { withRouter } from "react-router-dom";

// const Overlay = styled.div`
//   position: absolute;
//   width: 15rem;
//   right: 3rem;
//   height: 25rem;
//   z-index: 1;
//   border-radius: 3px;
//   background-color: white;
//   border: 1px solid #1abc9c82;
//   box-shadow: 0px 0px 7px 1px #0000001f;
//   text-align: center;

//   li {
//     padding: 1rem;
//   }
// `;
// const SettingOverlay = ({ history }) => {
//   async function Logout() {
//     await firebase.logout();
//     history.replace("/register");
//   }

//   return (
//     <Overlay>
//       <h3>
//         <button onClick={Logout}>Logout</button>
//       </h3>
//     </Overlay>
//   );
// };

// export default withRouter(SettingOverlay);
