/**
 *  AccountInformationOrKYC.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { Image } from '@rneui/themed';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function AccountInformationOrKYC({ navigation }: RootStackScreenProps<'AccountInformationOrKYC'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Account Information Or KYC Render
  return (
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Screen Header */}
      <View style={tw`flex-row justify-between items-center`}>
        {/* Navigation Back */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-22 top-[48px] left-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Screen Title - Account Information */}
        <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
          Account Information
        </Text>
        <View style={tw`justify-end`}></View>
      </View>
      {/* Acoount Profile Picture and Badge */}
      <View style={tw`flex-row justify-between items-center bg-[#242326] mt-[12px]`}>
        {/* <View style={tw`w-15`}></View> */}
        {/* Profile Image */}
        <View style={tw`mt-[40px] ml-[175px] items-center bg-[#242326]`}>
          <Image
            source={{ uri: 'https://i.ibb.co/RhLLsPy/user-circle-2.png' }}
            style={tw`w-[62px] h-[62px]`} />
        </View>
        {/* Tier 1 Text */}
        <View style={tw`rounded-lg   items-center justify-end bg-[#CDFB51] pl-[6px] pr-[10px] relative -right-4`}>
          <Text style={[tw`text-[12px] px-[12px] py-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Tier 1</Text>
        </View>
      </View>
      {/* Profile Picture Text */}
      <Text style={[tw`text-gray-100 text-center text-[12px] mt-[9px]`, { fontFamily: 'Rubik_400Regular' }]}>Profile Picture</Text>
      {/* First Name Text */}
      <Text style={[tw`text-gray-100 text-[14px] ml-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>First Name</Text>
      {/* First Name Text Input Field */}
      <View style={[tw`flex-row items-center justify-between rounded-[8px] mt-[6px] mx-[16px]`, { backgroundColor: '#2F2E32' }]}>
        <TextInput
          placeholder="Enter first name"
          keyboardType="default"
          placeholderTextColor='#A2A1A2'
          style={[tw`my-[20px] ml-[16px] w-full`, { fontFamily: 'Rubik_400Regular' }]}
        />
      </View>
      {/* Last Name Text */}
      <Text style={[tw`text-gray-100 text-[14px] ml-[24px] mt-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Last Name</Text>
      {/* First Name Text Input Field */}
      <View style={[tw`flex-row items-center justify-between rounded-[8px] mt-[6px] mx-[16px]`, { backgroundColor: '#2F2E32' }]}>
        <TextInput
          placeholder="Enter last name"
          keyboardType="default"
          placeholderTextColor='#A2A1A2'
          style={[tw`my-[20px] ml-[16px] w-full`, { fontFamily: 'Rubik_400Regular' }]}
        />
      </View>
      {/* KYC Documents */}
      <Text style={[tw`text-gray-100 text-[14px] mt-[40px] ml-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>KYC Documents</Text>
      {/* To start using our services you need to complete atleast one of the following */}
      <Text style={[tw`text-[#A2A1A2] text-[8px] ml-[16px] mt-[4px] mb-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>To start using our services you need to complete atleast one of the following</Text>
      {/*  KYC Documents List*/}
      {/* 01. Take A Selfie */}
      <TouchableOpacity
        onPress={() => navigation.navigate("TakeASelfie")}>
        <View
          style={tw`flex-row items-center rounded-[8px] bg-[#2F2E32] mx-[16px]`}>
          {/* Take A Selfie Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/cc1kdZf/Vector.png' }}
            style={tw`w-[16px] h-[16px] my-[20px] ml-[16px]`} />
          {/* Take A Selfie Text */}
          <View style={tw`flex-1 pl-[16px]`}>
            <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Take A Selfie</Text>
          </View>
          {/* chevron-right */}
          <View style={tw`mr-[16px] my-[21.64px]`}>
            <MaterialCommunityIcons name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </View>
      </TouchableOpacity>
      {/* 02. Identity Card */}
      <TouchableOpacity
        onPress={() => navigation.navigate("IdentityCard")}>
        <View style={tw`flex-row items-center rounded-[8px] bg-[#2F2E32] mx-[16px] mt-[8px]`}>
          {/* Identity Card Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/5vHBw6r/vector-1.png' }}
            style={tw`w-[16px] h-[16px] my-[20px] ml-[16px]`} />
          {/* Identity Card Text */}
          <View style={tw`flex-1 pl-[16px]`}>
            <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Identity Card</Text>
          </View>
          {/* Chevron-right */}
          <View style={tw`mr-[16px] my-[21.64px]`}>
            <MaterialCommunityIcons name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </View>
      </TouchableOpacity>
      {/* 03. Proof of Address */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ProofOfAddress")}>
        <View style={tw`flex-row items-center rounded-[8px] bg-[#2F2E32] mx-[16px] mt-[8px] mb-[238px]`}>
          {/* Identity Card Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/5vHBw6r/vector-1.png' }}
            style={tw`w-[16px] h-[16px] my-[20px] ml-[16px]`} />
          {/* Identity Card Text */}
          <View style={tw`flex-1 pl-[16px]`}>
            <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Proof of Address</Text>
          </View>
          {/* Chevron-right */}
          <View style={tw`mr-[16px] my-[21.64px]`}>
            <MaterialCommunityIcons name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </View>
      </TouchableOpacity>
    </MainContainer>
  )
}
