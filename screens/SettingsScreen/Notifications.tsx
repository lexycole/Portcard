/**
 *  Notifications.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import * as React from 'react';
import { RootStackScreenProps } from '../../types';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function Notifications({ navigation }: RootStackScreenProps<'Notifications'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Notifications Render
  return (
    // Safe Area View Render
    <SafeAreaView style={tw`bg-[#242326]`}>
      {/* Scroll View */}
      <ScrollView>
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
          {/* Notification */}
          <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
            Notification
          </Text>
          <View style={tw`justify-end`}></View>
        </View>
        {/* 01. First Notification */}
        <View style={tw`flex-row items-center justify-between mx-[48px] mt-[58px]`}>
          {/* Deposit Successful text */}
          <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Deposit Successful</Text>
          {/* 2022 - 08 - 19 10:09 date */}
          <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>2022 - 08 - 19 10:09</Text>
        </View>
        {/* Email description and contents ... */}
        <Text style={[tw`text-[#A2A1A2] text-[8px] mx-[48px] mt-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Email description and contents Email description and lot contents Email description and contents Email description and contents</Text>
        {/* 02. Second Notification */}
        <View style={tw`flex-row items-center justify-between mx-[48px] mt-[32px]`}>
          {/* Deposit Successful text */}
          <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Deposit Successful</Text>
          {/* 2022 - 08 - 19 10:09 date */}
          <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>2022 - 08 - 19 10:09</Text>
        </View>
        {/* Email description and contents ... */}
        <Text style={[tw`text-[#A2A1A2] text-[8px] mx-[48px] mt-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Email description and contents Email description and lot contents Email description and contents Email description and contents</Text>
        {/* 03. Third Notification */}
        <View style={tw`flex-row items-center justify-between mx-[48px] mt-[32px]`}>
          {/* Deposit Successful text */}
          <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Deposit Successful</Text>
          {/* 2022 - 08 - 19 10:09 date */}
          <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>2022 - 08 - 19 10:09</Text>
        </View>
        {/* Email description and contents ... */}
        <Text style={[tw`text-[#A2A1A2] text-[8px] mx-[48px] mt-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Email description and contents Email description and lot contents Email description and contents Email description and contents</Text>
        {/* 04. Four Notification */}
        <View style={tw`flex-row items-center justify-between mx-[48px] mt-[32px]`}>
          {/* Deposit Successful text */}
          <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Deposit Successful</Text>
          {/* 2022 - 08 - 19 10:09 date */}
          <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>2022 - 08 - 19 10:09</Text>
        </View>
        {/* Email description and contents ... */}
        <Text style={[tw`text-[#A2A1A2] text-[8px] mx-[48px] mt-[8px] mb-[484px]`, { fontFamily: 'Rubik_400Regular' }]}>Email description and contents Email description and lot contents Email description and contents Email description and contents</Text>
      </ScrollView>
    </SafeAreaView>
  );
}