import { RootStackScreenProps } from '../../types';
import * as React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function TakeASelfie({ navigation }: RootStackScreenProps<'TakeASelfie'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Screen Header */}
      <View style={tw`flex-row justify-between items-center`}>
        {/* Navigate Back */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-24 top-[48px] left-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Screen Title */}
        <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
          Take a Selfie
        </Text>
        <View style={tw`justify-end`}></View>
      </View>
      
      {/* Take a selfie Image Container */}
      <View style={tw`bg-[#2F2E32] rounded-[8px] mt-[116px] mx-[16px]`}>
        {/* Take a selfie Image */}
        <View style={tw`items-center mt-[131px]`}>
          <Image
            source={{ uri: 'https://i.ibb.co/PGkXLgM/Icn.png' }}
            style={tw`w-[88px] h-[118px]`} />
        </View>
        {/* The image should be clear and have your... Text */}
        <Text style={[tw`text-center text-[#A2A1A2] text-[12px] mt-[24px] ml-[37px] mr-[36px] mb-[122px]`, { fontFamily: 'Rubik_400Regular' }]}>The image should be clear and have your face fully inside the frame.</Text>
      </View>
      {/* Get Started Button */}
      <TouchableOpacity
          onPress={() => navigation.navigate("RetakeSelfie")}
          style={tw`py-[16px] px-[15.4px] mt-[32px] mx-[16px] mb-[215px] rounded-[16px] bg-[#CDFB51]`}>
          <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Get Started</Text>
        </TouchableOpacity>
    
    </SafeAreaView>
  );
}