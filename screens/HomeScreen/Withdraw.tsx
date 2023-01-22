/**
 * Withdraw.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import tw from 'twrnc';
import React, { useCallback, useRef, useMemo, } from 'react';
import { TouchableOpacity, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { Image } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import SpendingHistoryFlatlist from '../../components/Flatlist/SpendingHistoryFlatlist';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";


export default function Withdraw({ navigation }: RootStackScreenProps<'Withdraw'>) {
  // Ref
  const withdrawBottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '45%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    withdrawBottomSheetModalRef.current?.present();
  }, []);
  //  Handle Sheet Changes
  const handleSheetChanges = useCallback((index: number) => {
    withdrawBottomSheetModalRef.current?.snapToIndex(index);
  }, []);
  // Handle Close Press
  const handleClosePress = useCallback(() => {
    withdrawBottomSheetModalRef.current?.close();
  }, []);


  // Backdrop Element
  const BackdropElement = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        opacity={0.7}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ), []);


  //  Withdraw Fund ref
  const withdrawFundbottomSheetModalRef = useRef<BottomSheetModal>(null);
  // Withdraw Fund variables
  const withdrawFundSnapPoints = useMemo(() => ['25%', '60%'], []);
  // Withdraw Fund callbacks
  const handleWithdrawFundPresentModalPress = useCallback(() => {
    withdrawFundbottomSheetModalRef.current?.present();
  }, []);
  //  Withdraw Fund Handle Sheet Changes
  const withdrawFundHandleSheetChanges = useCallback((index: number) => {
    withdrawFundbottomSheetModalRef.current?.snapToIndex(index);
  }, []);
  //  Withdraw Fund Handle Close Press
  const withdrawFundHandleClosePress = useCallback(() => {
    withdrawFundbottomSheetModalRef.current?.close();
  }, []);


  // Renders Views
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
                // onPress={handleWithdrawFundPresentModalPress}
                style={tw`w-[164px] h-[48px] rounded-[16px] py-[12px] px-[37.5px] bg-[#CDFB51]`}>
                <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Fund Prt</Text>
              </TouchableOpacity>
            </View>
            {/* Withdraw Button */}
            <View style={tw`flex-row justify-end mt-[12px] px-[6px]`}>
              <TouchableOpacity
                onPress={handlePresentModalPress}
                style={tw`w-[162px] h-[48px] rounded-[16px] py-[12px] px-[37.5px] bg-white`}>
                <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Spending History Container */}
        <View style={tw`flex-row items-center pt-[40px]`}>
          <View style={tw`flex-1 mx-[16px]`}>
            <Text style={[tw`text-white text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Spending History</Text>
            {/* Show all wallet */}
            <Text style={[tw`font-bold text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Showing your wallet history</Text>
          </View>
        </View>
        {/* Spending history */}
        <View style={tw`mt-[8px] mb-[119px]`}>
          <SpendingHistoryFlatlist />
        </View>
        {/* 01. Bottom Modal Sheet */}
        <BottomSheetModal
          ref={withdrawBottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={BackdropElement}
          backgroundComponent={({ style }) => <View style={[style, tw`bg-[#242326]`, { borderTopLeftRadius: 24, borderTopRightRadius: 24 }]} />}
          onChange={handleSheetChanges}
        >
          <View style={style.contentContainer}>
            <View>
              <View style={tw`mt-[32px] flex-row items-center justify-between px-4`}>
                {/* <View style={{width:50}}></View> */}
                <View style={tw`justify-start`}></View>
                <Text style={[tw`text-gray-100 text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw</Text>
                {/* Close Button */}
                <MaterialCommunityIcons
                  name='close-circle-outline'
                  size={25} color='#CDFB51'
                  onPress={handleClosePress} />
              </View>
              {/* Choose how you wish to withdraw your funds. */}
              <Text style={[tw`flex-row text-center text-[14px] pt-[4px] pb-[48px] text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>Choose how you wish to withdraw your funds.</Text>
              {/* Crypto Assets and Pat 2 Views */}
              <View style={tw`mx-[25px]`}>
                {/* Crypto Assets Card */}
                <TouchableOpacity
                  onPress={handleWithdrawFundPresentModalPress}>
                  <View style={tw`flex-row items-center w-[364px] h-[64px] bg-[#2F2E32] rounded-[8px]`}>
                    {/* Crypto Assets Image */}
                    <Image
                      source={{ uri: 'https://i.ibb.co/F6P58yX/coins-1.png' }}
                      style={tw`w-[32px] h-[24px] ml-[16px] my-[20px]`} />
                    <View style={tw`flex-1 pl-[16px]`}>
                      <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Crypto Assets</Text>
                      <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw your funds to external wallet</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* Pat 2 */}
                <TouchableOpacity onPress={() => navigation.navigate("Root")}>
                  <View style={tw`flex-row items-center w-[364px] h-[64px] bg-[#2F2E32] mt-[16px] rounded-[8px]`}>
                    <Image
                      source={{ uri: 'https://i.ibb.co/F6P58yX/coins-1.png' }}
                      style={tw`w-[32px] h-[24px] ml-[16px] my-[20px]`} />
                    <View style={tw`flex-1 pl-[16px]`}>
                      <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Pat2</Text>
                      <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Send funds to a Pat user using their ID</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheetModal>

        {/* 02 Withdraw Fund Bottom Modal Sheet  */}
        <BottomSheetModal
          ref={withdrawFundbottomSheetModalRef}
          index={1}
          snapPoints={withdrawFundSnapPoints}
          backdropComponent={BackdropElement}
          backgroundComponent={({ style }) => <View style={[style, tw`bg-[#242326]`, { borderTopLeftRadius: 24, borderTopRightRadius: 24 }]} />}
          onChange={withdrawFundHandleSheetChanges}>
          <View style={style.contentContainer}>
            <View>
              <View style={tw`mt-[33px] flex-row items-center justify-between px-4`}>
                <View style={tw`justify-start`}></View>
                {/* Withdraw Fund Title */}
                <Text style={tw`text-gray-100 text-[24px]`}>Withdraw Fund</Text>
                {/* Close Circle outline */}
                <MaterialCommunityIcons
                  name='close-circle-outline'
                  size={25} color='#CDFB51'
                  onPress={withdrawFundHandleClosePress} />
              </View>
              {/* Choose crypto you wish to withdraw funds on */}
              <Text style={tw`flex-row text-center text-[14px] pt-[4px] pb-[48px] text-[#A2A1A2]`}>Choose crypto you wish to withdraw funds on.</Text>
              {/* USDT Tether */}
              <TouchableOpacity onPress={() => navigation.navigate("WithdrawUSDT")}>
                <View style={tw`flex-row items-center bg-[#2F2E32] rounded-[8px] w-[364px] h-[64px] mx-[25px]`}>
                  <Image
                    source={{ uri: 'https://i.ibb.co/nrtc05W/image-4.png' }}
                    style={tw`w-[32px] h-[32px] ml-[16px]`} />
                  <View style={tw`flex-row items-center px-[12px]`}>
                    <Text style={tw`text-gray-100 text-[16px]`}>USDT</Text>
                    <Text style={tw`text-[#A2A1A2] text-[12px] ml-[8px]`}>Tether</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* USDC USD coin */}
              <TouchableOpacity onPress={() => navigation.navigate("WithdrawUSDT")}>
                <View style={tw`flex-row items-center bg-[#2F2E32] rounded-[8px] w-[364px] h-[64px] mx-[25px] mt-[8px]`}>
                  <Image
                    source={{ uri: 'https://i.ibb.co/8M1vFGv/image-4-1.png' }}
                    style={tw`w-[32px] h-[32px] ml-[16px]`} />
                  <View style={tw`flex-row items-center px-[12px]`}>
                    <Text style={tw`text-gray-100 text-[16px]`}>USDC</Text>
                    <Text style={tw`text-[#A2A1A2] text-[12px] ml-[8px]`}>USD coin</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* BUSD Binance USD */}
              <TouchableOpacity onPress={() => navigation.navigate("WithdrawUSDT")}>
                <View style={tw`flex-row items-center bg-[#2F2E32] rounded-[8px] w-[364px] h-[64px] mx-[25px] mt-[8px]`}>
                  <Image
                    source={{ uri: 'https://i.ibb.co/n05M5Hb/image-4-2.png' }}
                    style={tw`w-[32px] h-[32px] ml-[16px]`} />
                  <View style={tw`flex-row items-center px-[12px]`}>
                    <Text style={tw`text-gray-100 text-[16px]`}>BUSD</Text>
                    <Text style={tw`text-[#A2A1A2] text-[12px] ml-[8px]`}>Binance USD</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* DAI Maker DAO */}
              <TouchableOpacity onPress={() => navigation.navigate("WithdrawUSDT")}>
                <View style={tw`flex-row items-center bg-[#2F2E32] rounded-[8px] w-[364px] h-[64px] mx-[25px] mt-[8px]`}>
                  <Image
                    source={{ uri: 'https://i.ibb.co/sJS8cJ5/image-4-3.png' }}
                    style={tw`w-[32px] h-[32px] ml-[16px]`} />
                  <View style={tw`flex-row items-center px-[12px]`}>
                    <Text style={tw`text-gray-100 text-[16px]`}>DAI</Text>
                    <Text style={tw`text-[#A2A1A2] text-[12px] ml-[8px]`}>MakerDao</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#242326"
  },
});