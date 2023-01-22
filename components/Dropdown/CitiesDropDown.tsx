// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// type CitiesDropDownProps = {
//   cities: string[];
//   showDropDown: boolean;
//   toggleDropDown: Function;
//   citySelection: Function;
// };

// const CitiesDropDown: React.FC<CitiesDropDownProps> = ({
//   cities,
//   citySelection,
// }: CitiesDropDownProps): JSX.Element => {
//   const [showDropDown, setShowDropDown] = useState<boolean>(false);

//   /**
//    * Handle passing the city name
//    * back to the parent component
//    *
//    * @param city  The selected city
//    */
//   const onClickHandler = (city: string): void => {
//     citySelection(city);
//   };

//   useEffect(() => {
//     setShowDropDown(showDropDown);
//   }, [showDropDown]);

//   return (
//     <>
//       <View style={{backgroundColor:'blue', margin:5}}
//       //  className={showDropDown ? 'dropdown' : 'dropdown active'}
//        >
//         {cities.map(
//           (city: string, index: number): JSX.Element => {
//             return (
//               <TouchableOpacity
//                 key={index}
//                 onPress={(): void => {
//                   onClickHandler(city);
//                 }}
//               >
//                 {city}
//               </TouchableOpacity>
//             );
//           }
//         )}
//       </View>
//     </>
//   );
// };

// export default CitiesDropDown;


// // import React, { FC, ReactElement, useRef, useState } from 'react';
// // import {
// //   FlatList,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   Modal,
// //   View,
// // } from 'react-native';
// // // import { Icon } from 'react-native-elements';
// // import { Icon } from '@rneui/themed';


// // interface Props {
// //   label: string;
// //   data: Array<{ label: string; value: string }>;
// //   onSelect: (item: { label: string; value: string }) => void;
// // }

// // const Dropdown: FC<Props> = ({ label, data, onSelect }) => {
// //   const DropdownButton = useRef();
// //   const [visible, setVisible] = useState(false);
// //   const [selected, setSelected] = useState(undefined);
// //   const [dropdownTop, setDropdownTop] = useState(0);

// //   const toggleDropdown = (): void => {
// //     visible ? setVisible(false) : openDropdown();
// //   };

// //   const openDropdown = (): void => {
// //     DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
// //       setDropdownTop(py + h);
// //     });
// //     setVisible(true);
// //   };

// //   const onItemPress = (item: any): void => {
// //     setSelected(item);
// //     onSelect(item);
// //     setVisible(false);
// //   };

// //   const renderItem = ({ item }:any): ReactElement<any, any> => (
// //     <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
// //       <Text>{item.label}</Text>
// //     </TouchableOpacity>
// //   );

// //   const renderDropdown = (): ReactElement<any, any> => {
// //     return (
// //       <Modal visible={visible} transparent animationType="none">
// //         <TouchableOpacity
// //           style={styles.overlay}
// //           onPress={() => setVisible(false)}
// //         >
// //           <View style={[styles.dropdown, { top: dropdownTop }]}>
// //             <FlatList
// //               data={data}
// //               renderItem={renderItem}
// //               keyExtractor={(item, index) => index.toString()}
// //             />
// //           </View>
// //         </TouchableOpacity>
// //       </Modal>
// //     );
// //   };

// //   return (
// //     <TouchableOpacity
// //       ref={DropdownButton}
// //       style={styles.button}
// //       onPress={toggleDropdown}
// //     >
// //       {renderDropdown()}
// //       <Text style={styles.buttonText}>
// //         {(selected && selected.label) || label}
// //       </Text>
// //       <Icon style={styles.icon} type="font-awesome" name="chevron-down" />
// //     </TouchableOpacity>
// //   );
// // };


// // const styles = StyleSheet.create({
// //   button: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#efefef',
// //     height: 50,
// //     zIndex: 1,
// //   },
// //   buttonText: {
// //     flex: 1,
// //     textAlign: 'center',
// //   },
// //   icon: {
// //     marginRight: 10,
// //   },
// //   dropdown: {
// //     position: 'absolute',
// //     backgroundColor: '#fff',
// //     width: '100%',
// //     shadowColor: '#000000',
// //     shadowRadius: 4,
// //     shadowOffset: { height: 4, width: 0 },
// //     shadowOpacity: 0.5,
// //   },
// //   overlay: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   item: {
// //     paddingHorizontal: 10,
// //     paddingVertical: 10,
// //     borderBottomWidth: 1,
// //   },
// // });

// // export default Dropdown;