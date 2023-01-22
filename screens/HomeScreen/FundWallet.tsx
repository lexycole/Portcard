/**
 * FundWallet.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React, { useCallback, useRef, useMemo, } from 'react';
import tw from 'twrnc';
import { TouchableOpacity, SafeAreaView, Text, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { Image } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import SpendingHistoryFlatlist from '../../components/Flatlist/SpendingHistoryFlatlist';


export default function FundWallet({ navigation }: RootStackScreenProps<'FundWallet'>) {
  // ref
  const fundWalletbottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '45%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    fundWalletbottomSheetModalRef.current?.present();
  }, []);
  // handle Sheet Changes
  const handleSheetChanges = useCallback((index: number) => {
    fundWalletbottomSheetModalRef.current?.snapToIndex(index);
  }, []);
  // Close Press
  const handleClosePress = useCallback(() => {
    fundWalletbottomSheetModalRef.current?.close();
  }, []);

  const BackdropElement = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        opacity={0.7}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ), [])

  // Renders views
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={tw`bg-[#242326]`}>
        {/* App Status Bar */}
        <StatusBar style="auto" />
        {/* Header Row*/}
        <View style={tw`flex-row items-center ml-[16px] mr-[19px] mt-[48px]`}>
          {/* Wallet Image */}
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
          <Text style={[tw`pt-[8px] text-center text-xl text-white text-[32px]`, { fontFamily: 'Rubik_400Regular' }]}>$0.00</Text>
          {/* Total Value  */}
          <Text style={[tw`mt-[4px] text-[12px] text-white mb-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Total Value (Prt)</Text>
          {/* Buttons Row */}
          <View style={tw`flex-row justify-between`}>
            {/* Fund Wallet Button */}
            <View style={tw`mt-[12px] px-[6px]`}>
              <TouchableOpacity
                onPress={handlePresentModalPress}
                style={tw`w-[164px] h-[48px] rounded-[16px] py-[12px] px-[37.5px] bg-[#CDFB51]`}>
                <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Fund Prt</Text>
              </TouchableOpacity>
            </View>
            {/* Withdraw Button */}
            <View style={tw`flex-row justify-end mt-[12px] px-[6px]`}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Withdraw")}
                style={tw`w-[162px] h-[48px] rounded-[16px] py-[12px] px-[37.5px] bg-white`}>
                <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Spending History Container */}
        <View style={tw`flex-row items-center pt-[40px]`}>
          <View style={tw`flex-1 mx-[16px]`}>
            <Text style={tw`text-white text-[16px]`}>Spending History</Text>
            {/* Show all wallet */}
            <Text style={tw`text-[#A2A1A2] text-[8px]`}>Showing your wallet history</Text>
          </View>
        </View>
        {/*Spending history Flat list*/}
        <View style={tw`mt-[8px] mb-[119px]`}>
          <SpendingHistoryFlatlist />
        </View>
        {/* Fund Wallet Bottom Modal Sheet  */}
        <BottomSheetModal
          ref={fundWalletbottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={BackdropElement}
          backgroundComponent={({ style }) => <View style={[style, tw`bg-[#242326]`, { borderTopLeftRadius: 24, borderTopRightRadius: 24 }]} />}
          onChange={handleSheetChanges}>
          <View style={tw`bg-[#242326]`}>
            {/* Fund Wallet Header */}
            <View>
              <View style={tw`mt-[32px] flex-row items-center justify-between px-4`}>
                <View style={tw`justify-start`}></View>
                {/* Fund Wallet title */}
                <Text style={[tw`text-gray-100 text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Fund Wallet</Text>
                {/* Close Button */}
                <MaterialCommunityIcons
                  name='close-circle-outline'
                  size={25} color='#CDFB51'
                  onPress={handleClosePress} />
              </View>
              {/* Choose how you want wallet */}
              <Text style={[tw`flex-row text-center text-[14px] pt-[4px] pb-[56px] text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>Choose how you wish to fund your wallet.</Text>
              <View style={tw`mx-[25px]`}>
                {/* Crypto Assets button */}
                <TouchableOpacity onPress={() => navigation.navigate("CryptoAsset")}>
                  <View style={tw`flex-row items-center w-[364px] h-[64px] bg-[#2F2E32] rounded-[8px]`}>
                    {/* Crypto Assets Image */}
                    <Image
                      source={{ uri: 'https://i.ibb.co/F6P58yX/coins-1.png' }}
                      style={tw`w-[32px] h-[24px] ml-[16px] my-[20px]`} />
                    {/* style={tw`w-[55px] h-[42px]`} /> */}
                    {/* Crypto asset description */}
                    <View style={tw`flex-1 pl-[16px]`}>
                      <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Crypto Assets</Text>
                      <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Fund wallet by deposit from external wallet</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* Pat 2 button*/}
                <TouchableOpacity onPress={() => navigation.navigate("Root")}>
                  <View style={tw`flex-row items-center w-[364px] h-[64px] mt-[16px] bg-[#2F2E32] rounded-[8px]`}>
                    {/* Pat 2 Image */}
                    <Image
                      source={{ uri: 'https://i.ibb.co/F6P58yX/coins-1.png' }}
                      style={tw`w-[32px] h-[24px] ml-[16px] my-[20px]`} />
                    {/* Pat 2 Description */}
                    <View style={tw`flex-1 pl-[16px]`}>
                      <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Pat2</Text>
                      <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Receive funds using your ID</Text>
                    </View>
                    {/* Coming Soon button */}
                    <TouchableOpacity style={tw`bg-[#56613A] p-[8px] mr-[16px] rounded-[16px]`}>
                      {/* Coming Soon text                  */}
                      <Text style={[tw`text-center text-[#CDFB51] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Coming Soon</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  )
}