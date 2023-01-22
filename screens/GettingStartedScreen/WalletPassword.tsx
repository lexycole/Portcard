import React, { useState } from 'react';
import tw from 'twrnc';
import { Text, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../../types';
import MainContainer from '../../components/Containers/MainContainer';
import { AntDesign } from '@expo/vector-icons';
import WalletPasswordTextInput from '../../components/Inputs/WalletPasswordTextInput';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function WalletPassword({ navigation }: RootStackScreenProps<'WalletPassword'>) {
  // Password state 
  const [password, setPassword] = useState('');
  // Confirm Password state
  const [confirmPassword, setConfirmPassword] = useState('');
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  // Fonts Loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Navigate Back Icon */}
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw`w-full h-24 left-[16px] top-[52px] mb-[44px]`}>
        <AntDesign name='arrowleft' size={35} color='#ffffff' />
      </TouchableOpacity>
      {/* Set password to secure your wallet */}
      <Text style={[tw`text-gray-100 text-[32px] mb-[8px] ml-[16px] mr-[18px]`, { fontFamily: 'Rubik_400Regular' }]}>Set password to secure your wallet</Text>
      {/* Keep your passwords private and never share password with anyone. */}
      <Text style={[tw`text-[#A2A1A2] text-[16px] mb-[48px] ml-[16px] mr-[18px]`, { fontFamily: 'Rubik_400Regular' }]}>Keep your passwords private and never share password with anyone.</Text>
      {/* Password Text Input */}
      <WalletPasswordTextInput
        label="Password"
        icon="lock"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        keyboardType="email-address"
        isPassword={true}
        style={{ marginBottom: 15.0, marginLeft: 16, marginRight: 18, fontFamily: 'Rubik_400Regular' }}
      />
      {/* Confirm Password Text Input */}
      <WalletPasswordTextInput
        label="Confirm Password"
        icon="lock"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        isPassword={true}
        style={{ marginLeft: 16, marginRight: 18, fontFamily: 'Rubik_400Regular' }}
      />
      {/* Password Tips */}
      {/* Tips for Strong Password */}
      <Text style={[tw`text-[8px] text-[#CDFB51] mt-[21px] ml-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Tips for Strong Password</Text>
      {/* * At least 8 characters- the more characters, the better */}
      <Text style={[tw`text-[8px] text-gray-400 ml-[16px]`, { fontFamily: 'Rubik_400Regular' }]}> * At least 8 characters- the more characters, the better</Text>
      {/*  * A mixture of both uppercase and lowecase letters */}
      <Text style={[tw`text-[8px] text-gray-400 ml-[16px]`, { fontFamily: 'Rubik_400Regular' }]}> * A mixture of both uppercase and lowecase letters</Text>
      {/* A mixture of letters and numbers*  */}
      <Text style={[tw`text-[8px] text-gray-400 ml-[16px]`, { fontFamily: 'Rubik_400Regular' }]}> * A mixture of letters and numbers</Text>
      {/* * Inclusion of at least one special charcter e.g ($%#@) */}
      <Text style={[tw`text-[8px] text-gray-400 ml-[16px]`, { fontFamily: 'Rubik_400Regular' }]}> * Inclusion of at least one special charcter e.g ($%#@)</Text>
      {/* Continue Call To Action */}
      <TouchableOpacity
        onPress={() => navigation.navigate("WalletCreatedSuccessfully")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Create Wallet</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}