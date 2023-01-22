/**
 *  TransactionHistory.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React from 'react';
import { TouchableOpacity, SafeAreaView, Text, View } from 'react-native';
import tw from 'twrnc';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { RootStackScreenProps } from '../../types';
import { Image } from '@rneui/themed';
import TransactionHistoryFlatlist from '../../components/Flatlist/TransactionHistoryFlatlist';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function TransactionHistory({ navigation }: RootStackScreenProps<'TransactionHistory'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Transaction History Render
  return (
    // Safe Area View
    <SafeAreaView style={tw`bg-[#242326]`}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Header Row*/}
      <View style={tw`flex-row items-center mx-[16px] mt-[48px]`}>
        {/* Wallet  */}
        <Image
          source={{ uri: 'https://i.ibb.co/rmTRxDT/Ellipse-7.png' }}
          style={tw`w-[40px] h-[40px] rounded-full`} />
        <View style={tw`flex-1 pl-[16px]`}>
          {/* Main Wallet */}
          <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Main Wallet</Text>
          {/* Wallet Address */}
          <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>0x3456...AAd6</Text>
        </View>
        {/* History */}
        <MaterialCommunityIcons style={tw`px-[20px]`} size={25} name='clock-outline' color='#A2A1A2' />
        {/* Notification */}
        <AntDesign name='bells' size={25} color='#00CCBB' style={tw`text-[#A2A1A2]`} />
      </View>

      {/* Wallet Detail Container */}
      <View style={tw`bg-[#2F2E32] mt-[24px] ml-[16px] mr-[16px] p-[24px] rounded-lg items-center`}>
        {/* Portcard image */}
        <Image source={{ uri: 'https://i.ibb.co/QJ46FpB/Coin-logo.png' }} style={tw`mt-[24px] mb-[8px] h-[32px] w-[32px] rounded`} />
        {/* Amount in USD  */}
        <Text style={[tw`pt-[8px] text-center text-xl text-white text-[32px]`, { fontFamily: 'Rubik_400Regular' }]}>$1,200,050.00</Text>
        {/* Total Value  */}
        <Text style={[tw`mt-[4px] text-[12px] text-white mb-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Total Value (Prt)</Text>
        {/* Buttons Row */}
        <View style={tw`flex-row justify-between`}>
          {/* Withdraw Button */}
          <View style={tw`mt-[12px] px-[6px]`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("FundWallet")}
              style={tw`w-[164px] h-[48px] rounded-[16px] py-[12px] px-[37.5px] bg-[#CDFB51]`}>
              <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Fund Wallet</Text>
            </TouchableOpacity>
          </View>
          {/* Send Wallet Button */}
          <View style={tw`flex-row justify-end mt-[12px] px-[6px]`}>
            <TouchableOpacity
              style={tw`w-[162px] h-[48px] rounded-[16px] py-[12px] px-[37.5px] bg-white`}>
              <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Transaction History Container */}
      <View style={tw`flex-row items-center pt-[40px]`}>
        <View style={tw`flex-1 mx-[16px]`}>
          <Text style={[tw`text-white text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Transaction History</Text>
          {/* Show all wallet */}
          <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Showing your wallet history</Text>
        </View>
        {/* View All pressable text*/}
        <TouchableOpacity
          style={tw`mx-[16px]`}
          onPress={() => navigation.navigate("SpendingHistory")}>
          <Text style={[tw`text-[#CDFB51] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}> View all</Text>
        </TouchableOpacity>
      </View>
      {/* Transaction history FlatList Container*/}
      <View style={tw`mb-[119px]`}>
        <TransactionHistoryFlatlist />
      </View>
    </SafeAreaView>
  )
}
