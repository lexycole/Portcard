/**
 *  TransferredSuccessfully.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React from 'react'
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { Image } from '@rneui/themed';
import MainContainer from '../../components/Containers/MainContainer';
import { TouchableOpacity, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function TransferredSuccessfully({ navigation }: RootStackScreenProps<'TransferredSuccessfully'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Transferred Successfully Renders
  return (
    <MainContainer style={tw`bg-[#242326]`}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Image Transferred Successfully */}
      <View style={tw`rounded-full relative items-center mt-[196px]`}>
        <Image
          source={{ uri: 'https://i.ibb.co/Z8RxT87/success.png' }}
          style={tw`w-[120px] h-[120px]`} />
      </View>
      {/* 1,200 USDT */}
      <Text style={[tw`text-center text-[#CDFB51] text-[24px] mt-[70px]`, { fontFamily: 'Rubik_400Regular' }]}>1,200 USDT</Text>
      {/* Transferred Successful */}
      <Text style={[tw`text-gray-100 text-center text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Transferred Successfully</Text>
      {/* You will have the equivalent */}
      <Text style={[tw`text-sm text-center text-gray-100 mt-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>You will have the equvalent in your wallet now.</Text>
      {/* Close Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
          <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Close</Text>
      </TouchableOpacity>
    </MainContainer>
  )
}
