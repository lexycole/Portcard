// import React, { useState } from "react";
// import CitiesDropDown from "./CitiesDropDown";
// // import DropDown from "./CitiesDropDown";
// import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


// const Menu: React.FC = (): JSX.Element => {
//   const [showDropDown, setShowDropDown] = useState<boolean>(false);
//   const [selectCity, setSelectCity] = useState<string>("");
//   const cities = () => {
//     return ["Hong Kong", "London", "New York City", "Paris"];
//   };

//   /**
//    * Toggle the drop down menu
//    */
//   const toggleDropDown = () => {
//     setShowDropDown(!showDropDown);
//   };

//   /**
//    * Hide the drop down menu if click occurs
//    * outside of the drop-down element.
//    *
//    * @param event  The mouse event
//    */
//   const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
//     if (event.currentTarget === event.target) {
//       setShowDropDown(false);
//     }
//   };

//   /**
//    * Callback function to consume the
//    * city name from the child component
//    *
//    * @param city  The selected city
//    */
//   const citySelection = (city: string): void => {
//     setSelectCity(city);
//   };

//   return (
//     <View>
//       <View>
//         <View>
//           {selectCity
//             ? `You selected ${selectCity} for your travel destination`
//             : "Select your travel destination"}
//         </View>
//       </View>
//       <TouchableOpacity
//         style={{backgroundColor: 'orange', margin:10}}
//         // style={[showDropDown ? "active" : undefined]}
//         onPress={(): void => toggleDropDown()}
//         // onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)
//         // }
//       >
//         <View>{selectCity ? "Select: " + selectCity : "Select ..."} </View>
//         {showDropDown && (
//           <CitiesDropDown
//             cities={cities()}
//             showDropDown={false}
//             toggleDropDown={(): void => toggleDropDown()}
//             citySelection={citySelection}
//           />
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Menu;
