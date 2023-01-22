/**
 *  Cards.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React, { useCallback, useRef, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../../types';
import { Image } from '@rneui/themed';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Cards({ navigation }: RootStackScreenProps<'Cards'>) {
  // Create Card Bottom Sheet Modal ref
  const createCardBottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '45%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    createCardBottomSheetModalRef.current?.present();
  }, []);
  //  Snap points are used to define the height of the bottom sheet
  const handleSheetChanges = useCallback((index: number) => {
    createCardBottomSheetModalRef.current?.snapToIndex(index);
  }, []);
  // Close BottomSheet
  const handleClosePress = useCallback(() => {
    createCardBottomSheetModalRef.current?.close();
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
    ), [])


  // Cards Renders
  return (
    <BottomSheetModalProvider>
      {/* Safe Area View */}
      <MainContainer style={tw`bg-[#242326]`}>
        {/* Screen Status Bar */}
        <StatusBar style="auto" />
        {/* Screen Header */}
        <View style={tw`flex-col lg:flex-row justify-between items-center mt-[48px]`}>
          {/* Cards */}
          <Text style={[tw`text-gray-100 text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Cards</Text>
          {/* Spend online and offline using ... */}
          <Text style={[tw`text-[14px] text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>Spend online and offline using your crypto</Text>
        </View>
        {/* Card Image */}
        <View style={tw`items-center mt-[72px]`}>
          <Image
            source={{ uri: "https://i.ibb.co/n0gXpJq/Card.png" }}
            style={tw`w-[237.69px] h-[274.22px]`} />
        </View>
        {/* Physical & Virtual Card */}
        <Text style={[tw`text-[24px] text-gray-100 mx-[16px] mt-[92.77px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>Physical & Virtual Card</Text>
        {/* Withdraw from ATM. pay on POS and shop online with your card. */}
        <Text style={[tw`text-[12px] text-[#A2A1A2] mx-[16px] mt-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw from ATM. pay on POS and shop online with your card.</Text>
        {/* CTA Button Create Card*/}
        <TouchableOpacity
          onPress={handlePresentModalPress}
          style={tw`pt-[16px] pl-[16px] pb-[16px] pr-[16px] mt-[40px] mx-[16px] mb-[216px] rounded-[16px] relative bg-[#CDFB51]`}>
          <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Create Card</Text>
        </TouchableOpacity>
        {/* Virtual and Physical Card Bottom Sheet Model */}
        <BottomSheetModal
          ref={createCardBottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={BackdropElement}
          backgroundComponent={({ style }) => <View style={[style, tw`bg-[#242326]`, { borderTopLeftRadius: 24, borderTopRightRadius: 24 }]} />}
          onChange={handleSheetChanges}>
          <ScrollView style={tw`bg-[#242326]`}>
            <View style={tw`flex-row justify-between items-center mt-[32px] px-[16.38px]`}>
              <View></View>
              {/* Card Type */}
              <View>
                <Text style={[tw`text-gray-100`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
                  Card Type
                </Text>
              </View>
              {/* Close Circle */}
              <MaterialCommunityIcons
                name='close-circle-outline'
                size={25} color='#CDFB51'
                onPress={handleClosePress} />
            </View>
            {/* Choose the type of card you want to create */}
            <Text style={[tw`text-center text-[#A2A1A2] mt-[4px]`, { fontFamily: 'Rubik_400Regular' }]}>
              Choose the type of card you want to create.
            </Text>
            {/* Virtual Card */}
            <TouchableOpacity
              onPress={() => navigation.navigate("VirtualCard")}>
              <View style={tw`flex-row items-center mx-[32px] mt-[48px] bg-[#2F2E32] rounded-[8px]`}>
                {/* Virtual Card Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/9NxRfpz/Group-1.png' }}
                  style={tw`w-[48px] h-[32px] rounded-[4px] ml-[16px] my-[16px]`} />
                <View style={tw`flex-1 pl-[16px]`}>
                  {/* Virtual Card Title */}
                  <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Virtual Card</Text>
                  {/* Use your card to pay for utilities and shop ...*/}
                  <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Use your card to pay for utilities and shop online</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* Physical Card */}
            <TouchableOpacity
              onPress={() => navigation.navigate("AddNewCard")}>
              <View style={tw`flex-row items-center mx-[32px] mt-[16px] bg-[#2F2E32] rounded-[8px]`}>
                {/* Physical Card Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/9NxRfpz/Group-1.png' }}
                  style={tw`w-[48px] h-[32px] rounded-[4px] ml-[16px] my-[16px]`} />
                <View style={tw`flex-1 pl-[16px]`}>
                  {/* Physical Card Title */}
                  <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Physical Card</Text>
                  {/* Withdraw from ATM, pay on POS with your ... */}
                  <Text style={[tw`text-[#A2A1A2] text-[8px] pr-[25px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw from ATM, pay on POS with your card. Delivery cost vary based on location</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </BottomSheetModal>
      </MainContainer>
    </BottomSheetModalProvider>
  );
}