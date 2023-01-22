/**
 *  FundedSuccessful.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React from 'react';
import tw from 'twrnc';
import { TouchableOpacity, View } from 'react-native';
import { RootStackScreenProps } from '../../types';
import { Image, Text } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import MainContainer from '../../components/Containers/MainContainer';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function FundedSuccessful({ navigation }: RootStackScreenProps<'FundedSuccessful'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Funded Successful Renders
  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Fund Image */}
      <View style={tw`rounded-full items-center mt-[196px]`}>
        <Image
          source={{ uri: 'https://i.ibb.co/Z8RxT87/success.png' }}
          style={tw`w-[120px] h-[120px]`} />
      </View>
      {/* Fund Amount & 1,200 USDT */}
      <Text style={[tw`text-[#CDFB51] mt-[74px] text-center text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>1,200 USDT <Text style={tw`text-gray-100 text-[24px]`}>Funded</Text></Text>
      {/* You funds has been added to your card successfully */}
      <Text style={[tw`text-[16px] text-center text-[#A2A1A2] mt-[8px] mx-[17px]`, { fontFamily: 'Rubik_400Regular' }]}>You funds has been added to your card successfully.</Text>
      {/*Close Button  */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Close</Text>
      </TouchableOpacity>
    </MainContainer>
  )
}