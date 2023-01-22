/**
 *  CardNavigation.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React, { useCallback, useRef, useMemo } from 'react';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Divider, Icon, Image } from '@rneui/themed';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetModalProvider, } from "@gorhom/bottom-sheet";
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function CardNavigation({ navigation }: RootStackScreenProps<'CardNavigation'>) {
  // ref
  const cardDetailsBottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ['70%', '90%'], []);
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

  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

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

  // Card Navigation Render
  return (
    <BottomSheetModalProvider>
      <MainContainer style={tw`bg-[#242326]`}>
            {/* Screen Status Bar */}
            <StatusBar style="auto" />
            <View style={tw`flex-row items-center justify-between`}>
              {/* Navigate Back Button */}
              <View>
                <TouchableOpacity
                  onPress={navigation.goBack}
                  style={tw`w-full h-24 top-[48px] pl-[16px]`}>
                  <AntDesign name='arrowleft' size={35} color='#ffffff' />
                </TouchableOpacity>
              </View>
              {/*Transfer */}
              <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
                Cards
              </Text>
              <View style={tw`justify-end`}></View>
            </View>
            {/* Virtual Card Container*/}
            <View style={[tw`flex-col lg:flex-row rounded-[20px] border-[2px] mt-[24px] ml-[31px] mr-[30px]`, { borderColor: '#CDFB51' }]}>
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
              {/* Virtual Card content */}
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
            </View>
            {/* Card Navigation */}
            <View style={tw`bg-[#2F2E32] mt-[32px] rounded-[16px] mx-[24px] mb-[255px]`}>
              {/* 01. Card Details */}
              <TouchableOpacity
                onPress={handlePresentModalPress}
                style={tw`flex-row items-center ml-[14px] my-[16px]`}>
                {/* Card Details Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/Zgvq3yJ/Card-Details.png' }}
                  style={tw`w-[32px] h-[32px] rounded-[8px]`} />
                {/* Card Details Text */}
                <View style={tw`flex-1`}>
                  <Text style={[tw`text-gray-100 text-[14px] pl-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Card Details</Text>
                </View>
                {/* Icon chevron right */}
                <View style={tw`mr-[24px]`}>
                  <Icon name='chevron-right' size={24} color='#A2A1A2' />
                </View>
              </TouchableOpacity>
              {/* Divider */}
              <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
              {/* 02. Block Card */}
              <TouchableOpacity
                onPress={() => navigation.navigate("BlockCard")}
                style={tw`flex-row items-center ml-[14px] my-[16px]`}>
                {/* Block Card Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/vPQqFdh/Block-Card.png' }}
                  style={tw`w-[32px] h-[32px] rounded-[8px]`} />
                {/* Block Card */}
                <View style={tw`flex-1`}>
                  <Text style={[tw`text-gray-100 text-[14px] pl-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Block Card</Text>
                </View>
                {/* Icon chevron right */}
                <View style={tw`mr-[24px]`}>
                  <Icon name='chevron-right' size={24} color='#A2A1A2' />
                </View>
              </TouchableOpacity>
              {/* Divider */}
              <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
              {/* 03. Card Transactions */}
              <TouchableOpacity
                onPress={() => navigation.navigate("CardTransactions")}
                style={tw`flex-row items-center ml-[14px] my-[16px]`}>
                {/* Card Transactions Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/rvy5JM6/Card-Transactions.png' }}
                  style={tw`w-[32px] h-[32px] rounded-[8px]`} />
                {/* Card Transactions Text */}
                <View style={tw`flex-1`}>
                  <Text style={[tw`text-gray-100 text-[14px] pl-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Card Transactions</Text>
                </View>
                {/* Icon chevron right */}
                <View style={tw`mr-[24px]`}>
                  <Icon name='chevron-right' size={24} color='#A2A1A2' />
                </View>
              </TouchableOpacity>
              {/* Divider */}
              <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
              {/* 04. Transaction Limit */}
              <TouchableOpacity
                onPress={() => navigation.navigate("TransactionLimit")}
                style={tw`flex-row items-center ml-[14px] my-[16px]`}>
                {/* Transaction Limit Image  */}
                <Image
                  source={{ uri: 'https://i.ibb.co/1LJVdD8/Transaction-Limit.png' }}
                  style={tw`w-[32px] h-[32px] rounded-[8px]`} />
                {/* Transaction Limit Text */}
                <View style={tw`flex-1`}>
                  <Text style={[tw`text-gray-100 text-[14px] pl-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Transaction Limit</Text>
                </View>
                {/* Icon chevron right */}
                <View style={tw`mr-[24px]`}>
                  <Icon name='chevron-right' size={24} color='#A2A1A2' />
                </View>
              </TouchableOpacity>
              {/* Divider */}
              <Divider style={[tw`mx-3`, { backgroundColor: '#CDFB51' }]} />
              {/* 05. Card Security */}
              <TouchableOpacity
                onPress={() => navigation.navigate("CardSecurity")}
                style={tw`flex-row items-center ml-[14px] my-[16px]`}>
                {/* Card Security Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/5RQBJL6/Card-security.png' }}
                  style={tw`w-[32px] h-[32px] rounded-[8px]`} />
                {/* Card Security Text */}
                <View style={tw`flex-1`}>
                  <Text style={[tw`text-gray-100 text-[14px] pl-[12px]`, { fontFamily: 'Rubik_400Regular' }]}> Card Security </Text>
                </View>
                {/* Icon chevron right */}
                <View style={tw`mr-[24px]`}>
                  <Icon name='chevron-right' size={24} color='#A2A1A2' />
                </View>
              </TouchableOpacity>
            </View>
            {/* Card Details Botom Sheet Modal*/}
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
                      {/* 385 */}
                      <Text style={[tw`text-[12px] text-gray-100 ml-[16px] my-[20px]`, { fontFamily: 'Rubik_400Regular' }]}>385</Text>
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
                </View>
            </BottomSheetModal>
      </MainContainer>
    </BottomSheetModalProvider>
  )
}