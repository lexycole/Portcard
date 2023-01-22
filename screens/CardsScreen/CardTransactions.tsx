/**
 *  CardNavigation.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { Divider, Image } from '@rneui/themed';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function CardTransactions({ navigation }: RootStackScreenProps<'CardTransactions'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Card Transactions Render
  return (
    <MainContainer style={tw`bg-[#242326]`}>
      {/* Status Bar Screen */}
      <StatusBar style="auto" />
      <View style={tw`flex-row items-center justify-between`}>
        {/* Navigate Back Button */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-24 pt-[48px] pl-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/*Transfer */}
        <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
          Cards Transactions
        </Text>
        <View style={tw`justify-end`}></View>
      </View>
      {/* Send your asset to your USD wallet */}
      <Text style={[tw`text-[#A2A1A2] text-center ml-[45px]`, { fontSize: 14, fontFamily: 'Rubik_400Regular' }]}>
        Showing your card history
      </Text>

      {/* Card Transactions History */}
      <ScrollView>
        {/* 01. ATM Withdrawal */}
        <View style={tw`flex-row items-center my-[16px] mx-[16px]`}>
          {/* ATM Withdrawal Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/WfVwC3n/Coin-logo-1.png' }}
            style={tw`w-[48px] h-[48px] rounded-full`} />
          <View style={tw`flex-1 pl-[8px]`}>
            {/* ATM Withdrawal Text */}
            <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>ATM Withdrawal</Text>
            {/* DATE */}
            <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Jun 30.</Text>
          </View>
          {/* ATM Withdrawal Amount */}
          <Text style={[tw`text-gray-100 text-[16px] text-[#E40101]`, { fontFamily: 'Rubik_400Regular' }]}>1,200 USD</Text>
        </View>
        {/* Divider */}
        <Divider style={tw`mx-[16px]`} />
        {/* 02. Deposit */}
        <View style={tw`flex-row items-center my-[16px] mx-[16px]`}>
          {/* Deposit Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/smqjbS4/Coin-logo-1.png' }}
            style={tw`w-[48px] h-[48px] rounded-full`} />
          <View style={tw`flex-1 pl-[8px]`}>
            {/* Deposit Text */}
            <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Deposit</Text>
            {/* Deposit Date */}
            <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Jun 30.</Text>
          </View>
          {/* Deposit Amount */}
          <Text style={[tw`text-gray-100 text-[16px] text-[#219653]`, { fontFamily: 'Rubik_400Regular' }]}>4,812 USD</Text>
        </View>
        {/* Divider */}
        <Divider style={tw`mx-[16px]`} />
        {/* 03. Deposit */}
        <View style={tw`flex-row items-center my-[16px] mx-[16px] mb-[578px]`}>
          {/* Deposit Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/smqjbS4/Coin-logo-1.png' }}
            style={tw`w-[48px] h-[48px] rounded-full`} />
          <View style={tw`flex-1 pl-[8px]`}>
            {/* Deposit Text */}
            <Text style={[tw`text-white text-base`, { fontFamily: 'Rubik_400Regular' }]}>Deposit</Text>
            {/* Deposit Date */}
            <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Jun 30.</Text>
          </View>
          {/* Deposit Amount */}
          <Text style={[tw`text-gray-100 text-[16px] text-[#219653]`, { fontFamily: 'Rubik_400Regular' }]}>5,200 USD</Text>
        </View>
      </ScrollView>
    </MainContainer>
  )
}
