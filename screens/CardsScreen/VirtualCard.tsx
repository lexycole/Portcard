/**
 *  VirtualCard.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React, { useCallback, useRef, useMemo } from 'react';
import { RootStackScreenProps } from '../../types';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetModalProvider, } from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Divider, Image } from '@rneui/themed';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { StatusBar } from 'expo-status-bar';
import CardType from '../../components/TabBarView/CardType';


export default function VirtualCard({ navigation }: RootStackScreenProps<'VirtualCard'>) {
  // Card Details ref
  const cardDetailsBottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ['80%', '95%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    cardDetailsBottomSheetModalRef.current?.present();
  }, []);
  //  Snap points are used to define the height of the bottom sheet
  const handleSheetChanges = useCallback((index: number) => {
    cardDetailsBottomSheetModalRef.current?.snapToIndex(index);
  }, []);
  // Close BottomSheet
  const handleClosePress = useCallback(() => {
    cardDetailsBottomSheetModalRef.current?.close();
  }, []);


  // Back drop Element
  const BackdropElement = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        opacity={0.7}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ), []);


  return (
    <BottomSheetModalProvider>
      <MainContainer style={tw`bg-[#242326]`}>
        {/* Status Bar */}
        <StatusBar style="auto" />
        <View style={tw`flex-col lg:flex-row items-center mt-[48px] mb-[32px]`}>
          {/* Virtual Cards */}
          <Text style={[tw`text-gray-100 text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Cards</Text>
          {/* Spend online and offline using your crypto */}
          <Text style={[tw`text-[14px] text-[#A2A1A2] mx-[45px]`, { fontFamily: 'Rubik_400Regular' }]}>Spend online and offline using your crypto</Text>
        </View>
        {/* Card Type Tab View */}
        <CardType />
        {/* Transaction List Container */}
        <ScrollView style={tw`flex-1`}>
          {/* Transaction List */}
          <View style={tw`flex-row items-center justify-between mb-[24px]`}>
            {/* 01. Fund Button */}
            <TouchableOpacity
              onPress={() => { navigation.navigate('FundCard') }}
              style={tw`ml-[91px]`}>
              <View style={tw`items-center rounded-full bg-[#4E5931] px-[12px] py-[12.8px]`}>
                {/* Fund Image */}
                <Image source={{ uri: 'https://i.ibb.co/pfqXR4G/atm-svgrepo-com-1.png' }}
                  style={tw`h-[24px] w-[24px]`} />
              </View>
              {/* Fund Text */}
              <Text style={[tw`text-gray-100 text-center mt-[8px] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}> Fund </Text>
            </TouchableOpacity>
            {/* 02. Withdraw Button */}
            <TouchableOpacity
              onPress={() => { navigation.navigate('Root') }}>
              <View style={tw`flex-col lg:flex-row items-center`}>
                <View style={tw`items-center rounded-full bg-[#4E5931] w-[48px] h-[48px]`}>
                  {/* Fund Image */}
                  <Image source={{ uri: 'https://i.ibb.co/4f9gHth/atm-svgrepo-com2.png' }}
                    style={tw`h-[24px] w-[24px] my-[12px]`} />
                </View>
                {/* Fund Text */}
                <Text style={[tw`text-gray-100 text-center mt-[8px] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}> Withdraw</Text>
              </View>
            </TouchableOpacity>
            {/* 03. Details Button */}
            <TouchableOpacity
              onPress={handlePresentModalPress}
              style={tw`mr-[103px]`}>
              <View style={tw`items-center rounded-full bg-[#4E5931] px-[12px] py-[12.8px]`}>
                {/* Details Image */}
                <Image source={{ uri: 'https://i.ibb.co/FJdzWPJ/details-svgrepo-com.png' }}
                  style={tw`h-[24px] w-[24px]`} />
              </View>
              {/* Details Text */}
              <Text style={[tw`text-gray-100 text-center mt-[8px] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}> Details </Text>
            </TouchableOpacity>
          </View>
          {/* Divider */}
          <Divider style={tw`mx-[16px]`} />
          {/* Transaction History */}
          <View style={tw`flex-row items-center mt-[24px] mx-[16px]`}>
            <View style={tw`flex-1`}>
              {/* Transaction History Text */}
              <Text style={[tw`text-white text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Transaction History</Text>
              {/* Showing your wallet Text */}
              <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Showing your wallet</Text>
            </View>
            {/* View all */}
            <View style={tw`flex-row items-center`}>
              <Text style={[tw`text-gray-100 text-[12px] text-[#CDFB51]`, { fontFamily: 'Rubik_400Regular' }]}>View all</Text>
            </View>
          </View>
          {/* Transaction List  */}
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
          <Divider />
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
            <Text style={[tw`text-gray-100 text-sm text-[#219653]`, { fontFamily: 'Rubik_400Regular' }]}>4,812 USD</Text>
          </View>
          {/* Divider */}
          <Divider />
          {/* 03. Deposit */}
          <View style={tw`flex-row items-center my-[16px] mx-[16px]`}>
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
            <Text style={[tw`text-gray-100 text-sm text-[#219653]`, { fontFamily: 'Rubik_400Regular' }]}>5,200 USD</Text>
          </View>

        </ScrollView>
        {/* Card Details Bottom Sheet Modal */}
        <BottomSheetModal
          ref={cardDetailsBottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={BackdropElement}
          backgroundComponent={({ style }) => <View style={[style, tw`bg-[#242326]`, { borderTopLeftRadius: 24, borderTopRightRadius: 24 }]} />}
        >
          <View style={tw`bg-[#242326]`}>
            <View style={tw`flex-row justify-between items-center mt-[32px] mx-[16.3px]`}>
              <View></View>
              {/* Card Details Title */}
              <View>
                <Text style={[tw`text-gray-100`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
                  Card Details
                </Text>
              </View>
              {/* Close Icon */}
              <MaterialCommunityIcons
                name='close-circle-outline'
                size={25} color='#CDFB51'
                onPress={handleClosePress} />
            </View>
            {/* Card Details fields*/}
            {/* 01.Card Name Field*/}
            <View style={tw`mt-[40px] mx-[32px]`}>
              {/* 01. Card Name Text */}
              <Text style={[tw`text-gray-100 text-[14px] mb-[6px]`, { fontFamily: 'Rubik_400Regular' }]}>Card Name</Text>
              <View style={[tw`flex-row justify-between rounded-[8px]`, { backgroundColor: '#2F2E32' }]}>
                {/* ADELEYE ADELANKE */}
                <Text style={[tw`text-[12px] text-gray-100 ml-[16px] my-[20px]`, { fontFamily: 'Rubik_400Regular' }]}>ADELEYE ADELANKE</Text>
                {/* Copy Button */}
                <TouchableOpacity style={tw`flex-row items-center mr-[16px]`}>
                  <Text style={[tw`text-[#CDFB51] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* 02. Card Number Field*/}
            <View style={tw`mt-[16px] mx-[32px]`}>
              {/* Card Number Text */}
              <Text style={[tw`text-gray-100 text-[14px] mb-[6px]`, { fontFamily: 'Rubik_400Regular' }]}>Card Number</Text>
              <View style={[tw`flex-row justify-between rounded-[8px]`, { backgroundColor: '#2F2E32' }]}>
                <Text style={[tw`text-[12px] text-gray-100 ml-[16px] my-[20px]`, { fontFamily: 'Rubik_400Regular' }]}>4685899023456780</Text>
                {/* Copy Button */}
                <TouchableOpacity style={tw`flex-row items-center mr-[16px]`}>
                  <Text style={[tw`text-[#CDFB51] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* 03. C V C field*/}
            <View style={tw`mt-[16px] mx-[32px]`}>
              <Text style={[tw`text-gray-100 text-[14px] mb-[6px]`, { fontFamily: 'Rubik_400Regular' }]}>CVC</Text>
              <View style={[tw`flex-row justify-between rounded-[8px]`, { backgroundColor: '#2F2E32' }]}>
                {/* 385 */}
                <Text style={[tw`text-[12px] text-gray-100 ml-[16px] my-[20px]`, { fontFamily: 'Rubik_400Regular' }]}>385</Text>
                {/* Copy Button */}
                <TouchableOpacity style={tw`flex-row items-center mr-[16px]`}>
                  <Text style={[tw`text-[#CDFB51] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* 04. Expiry Date Field */}
            <View style={tw`mt-[16px] mx-[32px]`}>
              <Text style={[tw`text-gray-100 text-[14px] mb-[6px]`, { fontFamily: 'Rubik_400Regular' }]}>Expiry Date</Text>
              <View style={[tw`flex-row justify-between rounded-[8px]`, { backgroundColor: '#2F2E32' }]}>
                {/* 385 Text*/}
                <Text style={tw`text-[12px] text-gray-100 ml-[16px] my-[20px]`}>385</Text>
                {/* Copy Button */}
                <TouchableOpacity style={tw`flex-row items-center mr-[16px]`}>
                  <Text style={[tw`text-[#CDFB51] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* 05. Billing Address Field */}
            <View style={tw`mt-[16px] mx-[32px]`}>
              <Text style={[tw`text-gray-100 text-[14px] mb-[6px]`, { fontFamily: 'Rubik_400Regular' }]}>Billing Address</Text>
              <View style={[tw`flex-row justify-between rounded-[8px]`, { backgroundColor: '#2F2E32' }]}>
                {/* 3850 Old Coochs Bridge RD, Newark, DE, US */}
                <Text style={[tw`text-[12px] text-gray-100 ml-[16px] my-[20px]`, { fontFamily: 'Rubik_400Regular' }]}>3850 Old Coochs Bridge RD, Newark, DE, US</Text>
                {/* Copy Button */}
                <TouchableOpacity style={tw`flex-row items-center mr-[16px]`}>
                  <Text style={[tw`text-[#CDFB51] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* 06. Zip Code Field*/}
            <View style={tw`mt-[16px] mx-[32px]`}>
              <Text style={[tw`text-gray-100 text-[14px] mb-[6px]`, { fontFamily: 'Rubik_400Regular' }]}>Zip Code</Text>
              <View style={[tw`flex-row justify-between rounded-[8px]`, { backgroundColor: '#2F2E32' }]}>
                {/* 19713 */}
                <Text style={[tw`text-[12px] text-gray-100 ml-[16px] my-[20px]`, { fontFamily: 'Rubik_400Regular' }]}> 19713</Text>
                {/* Copy Button */}
                <TouchableOpacity style={tw`flex-row items-center mr-[16px]`}>
                  <Text style={[tw`text-[#CDFB51] text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Freeze CTA Button*/}
            <TouchableOpacity
              onPress={() => navigation.navigate('TransferredSuccessfully')}
              style={tw`bg-[#CDFB51] mt-[24px] pt-[16px] pl-[16px] pb-[16px] pr-[16px] mx-[32px] rounded-[16px] flex-row`}>
              <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Freeze Card</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </MainContainer>
    </BottomSheetModalProvider>
  )
}