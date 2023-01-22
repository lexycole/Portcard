import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from '@rneui/themed';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function WalletCreatedSuccessfully({ navigation }: RootStackScreenProps<'WalletCreatedSuccessfully'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular
  });
  // Fonts Loaded
  if (!fontsLoaded) {
    return null;
  }


  // Wallet Created Successfully Renders
  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Navigate Back Icon */}
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw`w-full h-24 left-[16px] top-[52px] mb-[44px]`}>
        <AntDesign name='arrowleft' size={35} color='#ffffff' />
      </TouchableOpacity>
      {/* Image Container */}
      <View style={tw`items-center`}>
        <Image
          source={{ uri: 'https://i.ibb.co/hRY1qhR/Group-5.png' }}
          style={tw`w-[330px] h-[330px]`} />
      </View>
      {/* Congratulations wallet has been created */}
      <Text style={[tw`text-[32px] text-gray-100 mt-[16px] mb-[8px] pl-[16px] pr-[18px]`, { fontFamily: 'Rubik_400Regular' }]}>Congratulations wallet has been created. </Text>
      {/* You have create a new wallet go to your ... */}
      <Text style={[tw`text-[16px] text-[#A2A1A2] mb-[216px] pl-[16px] pr-[18px]`, { fontFamily: 'Rubik_400Regular' }]}>You have create a new wallet go to your dashboard to see the amazing features you have access to on your PortCard</Text>
      {/* Go to dashboard Call To Action */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Go to dashboard</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}