/**
 *  IdentityCardUploaded.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import * as React from 'react';
import tw from 'twrnc';
import { RootStackScreenProps } from '../../types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function IdentityCardUploaded({ navigation }: RootStackScreenProps<'IdentityCardUploaded'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  return (
    // Main Container 
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Image Container */}
      <View style={tw`rounded-full relative items-center mt-[196px]`}>
        <Image
          source={{ uri: 'https://i.ibb.co/Z8RxT87/success.png' }}
          style={tw`w-[120px] h-[120px]`} />
      </View>
      {/* Identity Card Uploaded */}
      <Text style={[tw`text-[24px] text-center text-gray-100 mb-5 mt-[70px]`, { fontFamily: 'Rubik_400Regular' }]}>Identity Card Uploaded</Text>
      {/* Thank you for uploading your selfie ... */}
      <Text style={[tw`text-center text-[14px] text-[#A2A1A2] mx-[17px]`, { fontFamily: 'Rubik_400Regular' }]}>Thank you for uploading your selfie. Your verification is been processed.</Text>
      {/* Close Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Close</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}