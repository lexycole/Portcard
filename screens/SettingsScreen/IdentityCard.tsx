/**
 *  IdentityCard.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import { RootStackScreenProps } from '../../types';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import DropdownSelect from '@niku/react-native-dropdown-select';
import { defaultValue, options } from '../../components/Dropdown/IDdropdown';
import * as ImagePicker from 'expo-image-picker';


export default function IdentityCard({ navigation }: RootStackScreenProps<'IdentityCard'>) {
  // Dropdown state
  const [value, setValue] = useState(defaultValue);

  // Set Image State
  const [image, setImage] = React.useState(null);
  // Pick Image
  const pickImage = async () => {
    // Launch Image Library Async
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    // Cancel if not image is picked
    if (!result.cancelled) {
      setImage
    }
  }

  // Identity Card Render
  return (
    <MainContainer style={{ backgroundColor: "#242326" }}>
      <StatusBar style="auto" />
      {/* screen Header */}
      <View style={tw`flex-row justify-between items-center mt-3`}>
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-22 top-[48px] left-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Identity Card container */}
        <View style={tw`flex-row mt-[48px]`}>
          <Text style={[tw`text-gray-100`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
            Identity Card
          </Text>
        </View>
        <View style={tw`flex-row justify-end`}></View>
      </View>
      {/* We accept only ID card. Driving license or Passport. Text */}
      <View>
        <Text style={[tw`left-5 text-[#A2A1A2] text-center mb-[32px]`, { fontSize: 14, fontFamily: 'Rubik_400Regular' }]}>
          We accept only ID card. Driving license or Passport.
        </Text>
      </View>

      {/* Dropdown Select View */}
      <View>
        <DropdownSelect
          options={options}
          defaultValue={defaultValue}
          value={value}
          onSelectOption={(option) => {
            setValue(option.value as string);
          }}
          onHideDropdown={() => {
            console.log('hide');
          }}
          onShowDropdown={() => {
            console.log('show');
          }}
          buttonWrapperStyle={tw`mx-[16px] mb-[24px]`}
          placeholder={"Choose Identity Type"}
          buttonContainerStyle={[tw`bg-[#2F2E32] text-[16px] border p-4`, { borderRadius: 8, borderColor: '#2F2E32' }]}
          buttonLabelStyle={{ fontSize: 16, color: '#ffffff' }}
          buttonPlaceholderStyle={{ color: '#ffffff' }}
          dropdownStyle={{ backgroundColor: "#242326", borderColor: "#242326" }}
          optionStyle={{ backgroundColor: "#242326", }}
          selectedOptionStyle={{ backgroundColor: "#A2A1A2" }}
          optionLabelStyle={{ fontSize: 16, color: '#ffffff', borderColor: "#242326" }}
          selectedOptionLabelStyle={{ fontSize: 16, color: '#ffffff', borderColor: "#242326" }}
          optionGroupPadding={1}
          buttonIconStyle={{ tintColor: '#ffffff' }}
        />
      </View>

      {/* Front Image Uploading Card */}

      <View style={tw`bg-[#2F2E32] mx-[16px] mb-[16px] border border-dashed border-2 border-lime-900 rounded-[16px]`}>
        {/* {!image ? */}
          <View>
            {/* Front Image Text */}
            <Text style={[tw`text-center text-gray-100 mt-[64px] text-[14px] mb-[4px]`, { fontFamily: 'Rubik_400Regular' }]}>Front Image</Text>
            {/* Upload your front license Image here Text */}
            <Text style={[tw`text-center text-[#A2A1A2] mb-[24px] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Upload your front <Text style={tw`font-bold text-gray-100`}>{value}</Text> Image here</Text>
            {/* Add Front Image Button */}
            <TouchableOpacity
              onPress={pickImage}
              style={[tw`mx-20 p-3 rounded-[8px] border mb-[40px]`, { borderColor: '#CDFB51' }]}>
              <Text style={[tw`text-center text-[#CDFB51] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Add Front Image</Text>
            </TouchableOpacity>
          </View>
          {/* : */}
          <View style={tw`flex-1`}>
            {/* <Image source={{ uri: image }} style={tw`w-[250px] h-[250px] mt-[30px]`} /> */}
            <View style={tw`absolute top-1`}>
              <MaterialCommunityIcons
                name='close-circle-outline'
                size={25} color='#CDFB51'
                onPress={() => { navigation.navigate('IdentityCard') }} />
            </View>
          </View>
        {/* } */}
      </View>

      {/* Picked Image Container */}
       {image && <Image source={{ uri: image }} style={tw`w-[250px] h-[250px] mt-[30px]`} />}
      
      
      {/* Upload ID Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("IdentityCardUploaded")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Upload ID</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}