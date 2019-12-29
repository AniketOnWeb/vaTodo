// import React, { useState } from "react";
// import Setting from "../../assets/svg/setting.svg";
// import SettingOverlay from "./Overlays/SettingOverlay";

// export const Settings = () => {
//   const [rotateClass, setRotateClass] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);

//   return (
//     <>
//       <span>
//         <img
//           src={Setting}
//           alt="setting"
//           className={`navbar__elements navbar__elements-setting ${
//             rotateClass
//               ? "navbar__elements-setting-activeRotation"
//               : "navbar__elements-setting-reverseRotation"
//           }`}
//           onClick={() => {
//             setRotateClass(!rotateClass);
//             setShowSettings(!showSettings);
//           }}
//         />
//         {showSettings && <SettingOverlay />}
//       </span>
//     </>
//   );
// };
