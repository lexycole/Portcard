/**
 *  BlockCard.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React from 'react';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text } from 'react-native';
import { RootStackScreenProps } from '../../types';


export default function BlockCard({ navigation }: RootStackScreenProps<'BlockCard'>) {
  return (
    <MainContainer style={{ backgroundColor: "#242326" }}>
      <StatusBar style="auto" />
      <View style={tw`flex-row justify-between items-center mt-3`}>
        {/* Navigate back Button */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-25 top-8 left-1`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Block Card View */}
        <View style={tw`flex-col lg:flex-row`}>
          {/*  Block Card Text */}
          <Text style={[tw`text-gray-100`, { fontSize: 24 }]}>
            Block Card
          </Text>
        </View>
        <View style={tw`flex-row justify-end`}></View>
      </View>
    </MainContainer>
  )
}
