/**
 *  AddNewCard.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React from 'react'
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { View, Text, TouchableOpacity, } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { StatusBar } from 'expo-status-bar';
import { Image } from '@rneui/themed';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function AddNewCard({ navigation }: RootStackScreenProps<'AddNewCard'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Add New Card Renders
  return (
    // Main Container
    <MainContainer style={tw`bg-[#242326]`}>
      {/* Status Bar App */}
      <StatusBar style="auto" />
      {/* Add New Card Header */}
      <View style={tw`flex-col lg:flex-row justify-between items-center mx-[36px] mt-[48px]`}>
        {/* Card */}
        <Text style={[tw`text-gray-100 text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Cards</Text>
        {/* Spend online and offline using your crypto */}
        <Text style={[tw`text-[14px] text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>Spend online and offline using your crypto</Text>
      </View>
      {/* Available Balance and usd 1,200.00 */}
      <View style={tw`flex-row items-center mt-[43px] mx-[24px]`}>
        <View style={tw`flex-1`}>
          {/* Available Balance */}
          <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Available Balance</Text>
          {/* USD 1,200.00 */}
          <Text style={[tw`text-[#FFFFFF] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>USD 1,200.00</Text>
        </View>
        {/* Hide Button */}
        <TouchableOpacity
          style={tw`bg-[#2F2E32] rounded-[8px]`}>
          <Text style={[tw`text-[#CDFB51] text-[14px] px-[16px] py-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Hide</Text>
        </TouchableOpacity>
      </View>
      {/* Virtual Portcard Card */}
      <TouchableOpacity
        onPress={() => navigation.navigate("CardNavigation")}
        style={[tw`flex-col lg:flex-row rounded-[20px] border-[2px] mt-[49px] ml-[31px] mr-[30px]`, { borderColor: '#CDFB51' }]}>
        <View style={tw`flex-row items-center justify-between`}>
          {/* 01.Portcard Image One */}
          <Image
            source={{ uri: "https://i.ibb.co/s2q9jQg/Logo.png" }}
            containerStyle={tw`w-[72px] h-[24px] ml-[24px] mt-[28px]`} />
          {/* 02. Portcard Image Two */}
          <Image
            source={{ uri: "https://i.ibb.co/zGkrxMd/credit-card-1.png" }}
            containerStyle={tw`w-[32px] h-[32px] mr-[24px] mt-[24px]`} />
        </View>
        {/* Virtual Card  */}
        <View style={tw`flex-row items-center justify-between mb-[16px]`}>
          <View style={tw`mt-[95px] ml-[24px]`}>
            {/* Virtual Card */}
            <Text style={[tw`text-[#A2A1A2] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Virtual Card</Text>
            {/* Adeleye Adewale */}
            <Text style={[tw`text-[#F3F3F3] text-[16px] mt-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Adeleye Adewale</Text>
          </View>
          {/* Portcard Image */}
          <Image
            source={{ uri: "https://i.ibb.co/pZHvgry/brand-1.png" }}
            containerStyle={tw`w-[48px] h-[28px] rounded-full mt-[115px] mr-[24px]`} />
        </View>
      </TouchableOpacity>
      {/* Add New Card Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Add New Card</Text>
      </TouchableOpacity>
    </MainContainer>
  )
}