/**
 * ProcessingWithdraw.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React from 'react'
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { Image } from '@rneui/themed';
import MainContainer from '../../components/Containers/MainContainer';
import { TouchableOpacity, View, Text, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function ProcessingWithdraw({ navigation }: RootStackScreenProps<'ProcessingWithdraw'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Processing Withdraw Renders
  return (
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Navigate back button */}
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw`w-full h-24 top-[52px] `}>
        <AntDesign name='arrowleft' size={35} color='#ffffff' />
      </TouchableOpacity>
      {/* Withdrawal Processing Image */}
      <View style={tw`items-center mt-[120px]`}>
        <Image
          source={{ uri: 'https://i.ibb.co/Z8RxT87/success.png' }}
          style={tw`w-[120px] h-[120px]`} />
      </View>
      {/* USDT Amount  */}
      <Text style={[tw`text-[24px] text-gray-100 text-center mt-[58px] text-[#CDFB51]`, { fontFamily: 'Rubik_400Regular' }]}>1,200 USDT</Text>
      {/* Withdrawal Processing */}
      <Text style={[tw`text-[24px] text-gray-100 text-center mb-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdrawal is processing</Text>
      {/* You will recieve an a notification... */}
      <Text style={[tw`text-[16px] text-[#A2A1A2] text-center mx-[17px]`, { fontFamily: 'Rubik_400Regular' }]}>You will receive an a notification once the withdrawl is completed.</Text>
      {/* Estimated Completion time:2022-08-15 */}
      <Text style={[tw`text-[14px] text-[#F3F3F3] text-center absolute bottom-30 left-10`, { fontFamily: 'Rubik_400Regular' }]}>Estimated completion time: 2022-08-15 12:43.10</Text>
      {/* View History Button*/}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}> View History </Text>
      </TouchableOpacity>
    </MainContainer>
  )
}
