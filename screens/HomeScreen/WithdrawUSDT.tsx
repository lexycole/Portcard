/**
 * WithdrawUSDT.tsx
 * 
 * Created By Portcard Team 2022/2023
 */

import React, { } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import tw from 'twrnc';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';
import WithdarwUsdtSelectList from '../../components/SelectList/WithdrawUsdtSelectList';


export default function WithdrawUSDT({ navigation }: RootStackScreenProps<'WithdrawUSDT'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Withdraw USDT Renders
  return (
    // Bottom Sheet Modal Provider
    <SafeAreaView style={tw`bg-[#242326] flex-1`}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Screen Header */}
      <View style={tw`flex-row justify-between items-center`}>
        {/* Navigate back to previous screen */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-24 top-[48px] ml-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Screen Title */}
        <View style={tw`flex-col lg:flex-row mt-[48px]`}>
          <Text style={[tw`text-gray-100 text-center`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
            Withdraw USDT
          </Text>
          <Text style={[tw`text-[#A2A1A2] text-center mt-[4px]`, { fontSize: 14, fontFamily: 'Rubik_400Regular' }]}>
            Send your Tether to crypto address
          </Text>
        </View>
        <View></View>
      </View>
      {/* Address Field */}
      <View style={tw`p-5`}>
        <View>
          <Text style={[tw`text-gray-100 text-[14px] mt-[48px]`, { fontFamily: 'Rubik_400Regular' }]}>Address</Text>
          <View style={[tw`w-[364px] h-[56px] flex-row justify-between rounded-[8px] mt-[6px]`, { backgroundColor: '#2F2E32' }]}>
            {/* Address text input */}
            <TextInput
              placeholder="Paste address"
              placeholderTextColor="#A2A1A2"
              style={tw`ml-[16px] text-[12px]`}
            />
            {/* QR Code Icon */}
            <TouchableOpacity style={tw`flex-row items-center mr-[18px]`}>
              <MaterialCommunityIcons name="qrcode" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Select Network */}
        <View>
          <Text style={[tw`text-gray-100 text-[14px] mt-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Network</Text>
          <WithdarwUsdtSelectList />

        </View>
        {/* Amount */}
        <View>
          <View style={tw`flex-row items-center justify-between`}>
            {/* Address */}
            <Text style={[tw`text-gray-100 text-[14px] mt-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Address</Text>
            {/* 1,200,000 Available */}
            <Text style={[tw`text-[#A2A1A2] text-[14px] mt-[16px] mr-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>1,200,000 Available</Text>
          </View>
          <View style={[tw`w-[364px] h-[56px] flex-row justify-between rounded-[8px] mt-[6px]`, { backgroundColor: '#2F2E32' }]}>
            {/* Amount Text input */}
            <TextInput
              placeholder="Enter amount"
              placeholderTextColor="#A2A1A2"
              style={tw`ml-[16px] text-[12px]`}
            />
            {/* USDT AND MAX text */}
            <View style={tw`flex-row items-center`}>
              {/* USDT */}
              <Text style={[tw`text-gray-100 px-[8px] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>USDT</Text>
              {/* MAX */}
              <Text style={[tw`text-[#CDFB51] pr-[16px] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Max</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Withdraw Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ProcessingWithdraw")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}