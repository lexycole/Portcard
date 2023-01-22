/**
 *  HelpOrSupport.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React from 'react'
import tw from 'twrnc';
import { RootStackScreenProps } from '../../types';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';


export default function HelpOrSupport({ navigation }: RootStackScreenProps<'HelpOrSupport'>) {
  // Help Or Support Renders
  return (
    <SafeAreaView style={{ backgroundColor: "#242326", flex: 1 }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mt-3`}>
        {/* Navigate Back */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-25 top-8 left-1`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Help Or Support Container */}
        <View style={tw`flex-row`}>
          <Text style={[tw`text-gray-100`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
            Help Or Support
          </Text>
        </View>
        <View style={tw`flex-row justify-end`}></View>
      </View>
    </SafeAreaView>
  )
}
