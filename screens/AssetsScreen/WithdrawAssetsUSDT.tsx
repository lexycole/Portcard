/**
 *  WithdrawAssetsUSDT.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { StatusBar } from 'expo-status-bar';
import WithdarwAssetUsdtSelectList from '../../components/SelectList/WithdrawAssetUsdtSelectList';


export default function WithdrawAssetsUSDT({ navigation }: RootStackScreenProps<'WithdrawAssetsUSDT'>) {
  // Withdraw Assets USDT Renders
  return (
    <MainContainer style={tw`bg-[#242326]`}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      <View style={tw`flex-row items-center justify-between`}>
        {/* Navigate Back Button */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-24 top-[66px] pl-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Withdraw USDT */}
        <Text style={[tw`text-gray-100 mt-[66px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
          Withdraw USDT
        </Text>
        <View style={tw`justify-end`}></View>
      </View>
      {/* Send your Tether to crypto address */}
      <Text style={[tw`text-[#A2A1A2] text-center mt-[4px] ml-[45px]`, { fontSize: 14, fontFamily: 'Rubik_400Regular' }]}>
        Send your Tether to crypto address
      </Text>
      {/* Address */}
      <View style={tw`mx-[16px]`}>
        {/* Address Title */}
        <Text style={[tw`text-gray-100 text-[14px] mt-[48px]`, { fontFamily: 'Rubik_400Regular' }]}>Address</Text>
        <View style={[tw`flex-row items-center justify-between p-3 rounded-[8px] mt-[6px]`, { backgroundColor: '#2F2E32', fontFamily: 'Rubik_400Regular' }]}>
          <View>
            {/* Address Text Input */}
            <TextInput
              placeholder="Paste Address"
              keyboardType="default"
              placeholderTextColor='#A2A1A2'
              style={[tw`text-[#A2A1A2] w-[100px]`, { fontFamily: 'Rubik_400Regular' }]}
            />
          </View>
          {/* QR Code */}
          <View>
            <AntDesign name='qrcode' size={20} color='#FFFFFF' />
          </View>
        </View>
      </View>
      {/* Network */}
      <Text style={[tw`text-gray-100 text-[14px] mx-[16px] mt-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Network</Text>
      {/* Select Network */}
      <WithdarwAssetUsdtSelectList />
      {/* Amount */}
      <View style={tw`flex-row items-center justify-between`}>
        {/* Amount */}
        <Text style={[tw`text-gray-100 text-[14px] mx-[12px] mt-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Amount</Text>
        {/* 1,200,000 Available */}
        <Text style={[tw`text-[#A2A1A2] text-[14px] mt-[16px] mr-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>1,200,000 Available</Text>
      </View>
      {/* Amount Text Input */}
      <View style={[tw`p-4 flex-row justify-between rounded-[8px] mx-[12px] mt-[6px]`, { backgroundColor: '#2F2E32' }]}>
        <View>
          <TextInput
            placeholder="Enter amount"
            keyboardType="numeric"
            placeholderTextColor='#A2A1A2'
            style={[tw`text-[#A2A1A2] w-[100px]`, { fontFamily: 'Rubik_400Regular' }]} />
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          {/* USDT */}
          <Text style={[tw`text-gray-100 text-[12px] px-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>USDT</Text>
          {/* Max */}
          <Text style={[tw`text-[#CDFB51] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Max</Text>
        </View>
      </View>
      {/* Make sure the address your are sending... */}
      <Text style={[tw`text-[8px] text-center text-gray-100 absolute bottom-25 mx-[72px]`, { fontFamily: 'Rubik_400Regular' }]}>Make sure the address your are sending to is a USDT address with a matching network. Crypto sent to another address can't be recovered.</Text>
      {/* Withdraw */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ProcessingAssetsWithdrawal')}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw</Text>
      </TouchableOpacity>
    </MainContainer>
  )
}