/**
 *  ProofOfAddress.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React from 'react'
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { View, Text, TouchableOpacity } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function ProofOfAddress({ navigation }: RootStackScreenProps<'ProofOfAddress'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Proof Of Address Render
  return (
    <MainContainer style={{ backgroundColor: "#242326" }}>
      <StatusBar style="auto" />
      {/* Screen Header */}
      <View style={tw`flex-row justify-between items-center mt-3`}>
        {/* Navigate Back */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-25 top-8 left-1`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Screen Proof of Address */}
        <View style={tw`flex-row`}>
          <Text style={[tw`text-gray-100`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
            Proof of Address
          </Text>
        </View>
        <View style={tw`flex-row justify-end`}></View>
      </View>
    </MainContainer>
  )
}
