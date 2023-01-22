/**
 *  SecuritySettings.tsx
 * 
 * Created By Portcard Team 2022/2023
 */

import * as React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Switch } from 'react-native';
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { Icon, Image } from '@rneui/themed';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function SecuritySettings({ navigation }: RootStackScreenProps<'SecuritySettings'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }


  // Security Settings Render
  return (
    <SafeAreaView style={{ backgroundColor: "#242326" }}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={tw`flex-row justify-between items-center`}>
        {/* Navigate back */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-24 top-[48px] left-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Security Settings Text */}
        <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
          Security Settings
        </Text>
        <View style={tw`justify-end`}></View>
      </View>
      {/* 2FA authentication Container */}
      <View style={tw`bg-[#2F2E32] rounded-[16px] mx-[24px] mt-[24px]`}>
        <View style={tw`flex-row items-center ml-[16px] mt-[24.19px]`}>
          {/* 2FA Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/VJg47c7/authentication-1.png' }}
            style={tw`w-[24px] h-[24px]`} />
          <View style={tw`flex-1 pl-[12px]`}>
            {/* 2-Factor Authenticator Text */}
            <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>2-Factor Authenticator</Text>
            {/* We recommened you turn on at least one 2fa Text */}
            <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>We recommened you turn on at least one 2fa</Text>
          </View>
        </View>
        {/* 01.Email and SMS 2FA Authentication Row */}
        <View style={tw`flex-row items-center justify-between mt-[16px]`}>
          {/* 001. Email Authentication */}
          <TouchableOpacity style={tw`flex-row items-center bg-[#242326] rounded-[8px] ml-[16px]`}>
            <View style={tw`mt-[16px] ml-[16px] mb-[30px]`}>
              <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Email</Text>
              <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Authentication</Text>
            </View>
            {/* Icon chevron-right */}
            <View style={tw`my-[32.64px] mr-[8px] ml-[40.22px]`}>
              <Icon name='chevron-right' size={24} color='#A2A1A2' />
            </View>
          </TouchableOpacity>
          {/* 002. SMS Authentication */}
          <TouchableOpacity style={tw`flex-row items-center bg-[#242326] rounded-[8px] mr-[16px]`}>
            <View style={tw`mt-[16px] ml-[16px] mb-[30px]`}>
              <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>SMS</Text>
              <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Authentication</Text>
            </View>
            {/* Icon chevron-right */}
            <View style={tw`my-[32.64px] mr-[8px] ml-[27.22px]`}>
              <Icon name='chevron-right' size={24} color='#A2A1A2' />
            </View>
          </TouchableOpacity>
        </View>
        {/* 02. App and Biometric 2fa Authentication Row */}
        <View style={tw`flex-row items-center justify-between mt-[8px] mb-[24px]`}>
          {/* 003. App Authentication */}
          <TouchableOpacity style={tw`flex-row items-center bg-[#242326] rounded-[8px] ml-[16px]`}>
            <View style={tw`mt-[16px] ml-[16px] mb-[30px]`}>
              {/* App Text */}
              <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>App</Text>
              {/* Authentication Text */}
              <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Authentication</Text>
            </View>
            {/* Icon chevron-right */}
            <View style={tw`my-[32.64px] mr-[8px] ml-[40.22px]`}>
              <Icon name='chevron-right' size={24} color='#A2A1A2' />
            </View>
          </TouchableOpacity>
          {/* 004. Biometric Authentication */}
          <TouchableOpacity style={tw`flex-row items-center bg-[#242326] rounded-[8px] mr-[16px]`}>
            <View style={tw`mt-[16px] ml-[16px] mb-[30px]`}>
              {/* Biometric */}
              <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Biometric</Text>
              {/* Authentication */}
              <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Authentication</Text>
            </View>
            {/* Icon chevron-right */}
            <View style={tw`my-[32.64px] mr-[8px] ml-[27.22px]`}>
              <Icon name='chevron-right' size={24} color='#A2A1A2' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Face ID Switch Row */}
      <View style={tw`flex-row items-center mt-[24px] mx-[24px]`}>
        <View style={tw`flex-1`}>
          {/* Face ID */}
          <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Face ID</Text>
          {/* Using face ID to Unlock your app */}
          <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Using face ID to Unlock your app</Text>
        </View>
        <View>
          {/* FACE ID SWITCH */}
          <Switch style={tw`w-[44px] h-[24px]`} />
        </View>
      </View>
      {/* Account Activity Row */}
      <View style={tw`flex-row items-center ml-[24px] mr-[32px] mt-[26px]`}>
        <View style={tw`flex-1`}>
          <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Account Activity</Text>
        </View>
        {/* chevron-right Icon */}
        <Icon name='chevron-right' size={24} color='#A2A1A2' />
      </View>
      {/* Change Password Row */}
      <View style={tw`flex-row items-center ml-[24px] mr-[32px] mt-[26px] mb-[400px]`}>
        {/* Change Password Text */}
        <View style={tw`flex-1`}>
          <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Change Password</Text>
        </View>
        <Icon name='chevron-right' size={24} color='#A2A1A2' />
      </View>
    </SafeAreaView>
  )
}