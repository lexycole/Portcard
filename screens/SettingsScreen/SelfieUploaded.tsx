/**
 *  SelfieUploaded.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import * as React from 'react';
import { RootStackScreenProps } from '../../types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';

export default function SelfieUploaded({ navigation }: RootStackScreenProps<'SelfieUploaded'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Selfie Uploaded Render
  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Status Bar  */}
      <StatusBar style="auto" />
      {/* Selfie Uploaded Image*/}
      <View style={tw`items-center mt-[199px] mb-[73px] bg-[#242326]`}>
        <Image
          source={{ uri: 'https://i.ibb.co/9HBD9Sx/Group-13.png' }}
          style={tw`w-[88px] h-[118px]`} />
      </View>
      {/* Selfie Uploaded Text */}
      <Text style={[tw`text-[24px] text-center text-gray-100 mb-5`, { fontFamily: 'Rubik_400Regular' }]}>Selfie Uploaded</Text>
      {/* Thank you for uploading your selfie. Your verification is been processed. Text  */}
      <Text style={[tw`text-center text-[16px] text-[#A2A1A2] mb-30 mx-[17px]`, { fontFamily: 'Rubik_400Regular' }]}>Thank you for uploading your selfie. Your verification is been processed.</Text>
      {/* Close Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Close</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}