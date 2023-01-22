/**
 *  Appearance.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React, { } from 'react';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';


export default function Appearance({ navigation, }: RootStackScreenProps<'Appearance'>) {
  // Appearance Render
  return (
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mt-3`}>
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-25 top-8 left-1`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Appearance Container */}
        <View style={tw`flex-row`}>
          <Text style={[tw`text-gray-100`, { fontSize: 24 }]}>
            Appearance
          </Text>
        </View>
        <View style={tw`flex-row justify-end`}></View>
      </View>
    </MainContainer>
  )
}