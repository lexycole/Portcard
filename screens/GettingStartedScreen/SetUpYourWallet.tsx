import React from 'react';
import { Image } from '@rneui/themed';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';
import { View, Text, TouchableOpacity } from 'react-native';


export default function SetUpYourWallet({ navigation }: RootStackScreenProps<'SetUpYourWallet'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  // //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Set Up Your Wallet Render
  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      <View style={tw`relative items-center mt-[48px] mb-[103px] bg-[#242326]`}>
        <Image
          source={{ uri: "https://i.ibb.co/s2q9jQg/Logo.png" }}
          containerStyle={tw`w-25 h-7`} />
      </View>
      {/* Wallet Image */}
      <Image
        source={{ uri: 'https://i.ibb.co/dfg6YFZ/Map.png' }}
        style={tw`w-full h-[170px]`} />
      {/* Set up your Wallet */}
      <Text style={[tw`text-gray-100 text-[32px] mb-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Set up your Wallet</Text>
      {/* See your assets and start swaping your tokens... */}
      <Text style={[tw`text-gray-400 text-[16px] mb-[170px]`, { fontFamily: 'Rubik_400Regular' }]}>See your assets and start swaping your tokens to Port token for your Portcard anywhere in the world.</Text>
      {/* Create a new wallt or Import wallet butons */}
      <View style={tw`flex-row items-center justify-between bg-[#242326] mb-[87px] flex-1`}>
        {/* 01. Create a new wallet */}
        <TouchableOpacity
          onPress={() => navigation.navigate("BackupPhraseNewWallet")}>
          <Image
            source={{ uri: 'https://i.ibb.co/D9Rmg3h/Create-Wallet.png' }}
            style={tw`w-[174px] h-[204px]`} />
        </TouchableOpacity>
        {/* Or */}
        <Text style={tw`text-gray-100 text-[16px] font-bold`}>Or</Text>
        {/* 02. Import Wallet Card */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ImportYourWallet")}
          style={{ marginVertical: 10 }}>
          <Image
            source={{ uri: 'https://i.ibb.co/7yZKsNt/Import-wallet.png' }}
            style={tw`w-[174px] h-[204px]`} />
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
}