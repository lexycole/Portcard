import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { AntDesign } from '@expo/vector-icons';
import ChooseImportType from '../../components/TabBarView/ChooseImportType';
import { StatusBar } from 'expo-status-bar';
import { RootStackScreenProps } from '../../types';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function ImportYourWallet({ navigation }: RootStackScreenProps<'ImportYourWallet'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Import Your Wallet
  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      <StatusBar style="auto" />
      {/* Go Back Button */}
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw`w-full h-24 left-[16px] top-[52px] mb-[44px]`}>
        <AntDesign name='arrowleft' size={35} color='#ffffff' />
      </TouchableOpacity>
      {/* Import your wallet */}
      <Text style={[tw`mb-[8px] text-[32px] text-gray-100 mx-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Import your wallet</Text>
      {/* Import your wallet with backup phrase or wallet private key. */}
      <Text style={[tw`mb-[40px] text-[16px] text-gray-100 mx-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Import your wallet with backup phrase or wallet private key.</Text>
      {/* Choose Import Type Container */}
      <View style={tw`bg-[#2F2E32] rounded-[12px] px-[16px] mx-[16px] h-[400px]`}>
        <Text style={[tw`text-center text-[12px] text-gray-100 mt-[32px] mb-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Choose Import Type</Text>
        {/* Choose Import Type Tab View */}
        <ChooseImportType />
      </View>

      {/* Import Call To Action */}
      <TouchableOpacity
        onPress={() => navigation.navigate("WalletImportedSuccessfully")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Import</Text>
      </TouchableOpacity>
    </MainContainer>
  )
}