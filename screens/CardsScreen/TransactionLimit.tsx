/**
 *  TransactionLimit.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React from 'react';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { RootStackScreenProps } from '../../types';
import { Image } from '@rneui/themed';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function TransactionLimit({ navigation }: RootStackScreenProps<'TransactionLimit'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Transaction Limit Render
  return (
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Screen Status Bar */}
      <StatusBar style="auto" />
      <View style={tw`flex-row items-center justify-between`}>
        {/* Navigate Back Button */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-24 pt-[48px] pl-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/*Transfer */}
        <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
          Transaction Limit
        </Text>
        <View style={tw`justify-end`}></View>
      </View>
      {/* Daily card limi based on your verification level */}
      <Text style={[tw`text-[#A2A1A2] text-center ml-[45px]`, { fontSize: 14, fontFamily: 'Rubik_400Regular' }]}>
        Daily card limit based on your verification level
      </Text>
      {/* Daily Card Limit Container */}
      <ScrollView>
        {/* 01. First Card Limit */}
        <View style={[tw`flex-col lg:flex-row rounded-[16px] border mt-[51px] mx-[16px]`, { borderColor: '#CDFB51' }]}>
          {/* $10 to $500 per day */}
          <View style={tw`flex-row items-center mt-[24px]`}>
            <View style={tw`flex-1 ml-[24px]`}>
              <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>$10 to $500 per day</Text>
              <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Requirement to be able to spend</Text>
            </View>
            <View style={tw`rounded-full bg-[#4E5931] mr-[16px]`}>
              <Text style={tw`text-[14px] text-[#CDFB51] px-[24px] py-[8px]`}>Tier 1</Text>
            </View>
          </View>
          {/* Personal Information */}
          <View style={tw`flex-row items-center mt-[17px] ml-[24px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/cc1kdZf/Vector.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-white text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Personal Information</Text>
            </View>
          </View>
          {/* Facial Recongnition */}
          <View style={tw`flex-row items-center mt-[18px] ml-[24px] mb-[26px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/cc1kdZf/Vector.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-white text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Facial Recongnition</Text>
            </View>
          </View>
        </View>
        {/* 02. Second Card Limit */}
        <View style={[tw`flex-col lg:flex-row rounded-[16px] border mt-[16px] mx-[16px]`, { borderColor: '#FFFFFF' }]}>
          {/* $500 to $2500 per day */}
          <View style={tw`flex-row items-center mt-[24px]`}>
            <View style={tw`flex-1 ml-[24px]`}>
              <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>$500 to $2500 per day</Text>
              <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Requirement to be able to spend</Text>
            </View>
            <View style={tw`rounded-[32px] bg-[#F3F3F3] mr-[16px]`}>
              <Text style={[tw`text-[14px] text-[#A2A1A2] px-[24px] py-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Tier 2</Text>
            </View>
          </View>
          {/* Personal Information */}
          <View style={tw`flex-row items-center mt-[17px] ml-[24px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/cc1kdZf/Vector.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-white text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Personal Information</Text>
            </View>
          </View>
          {/* Facial Recongnition */}
          <View style={tw`flex-row items-center mt-[18px] ml-[24px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/cc1kdZf/Vector.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-white text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Facial Recongnition</Text>
            </View>
          </View>
          {/* Government Issued ID */}
          <View style={tw`flex-row items-center mt-[18px] ml-[24px] mb-[26px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/5vHBw6r/vector-1.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-white text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Government-issued ID</Text>
            </View>
          </View>
        </View>
        {/* 03. Third Card Limit */}
        <View style={[tw`flex-col lg:flex-row rounded-[16px] border mt-[16px] mx-[16px]`, { borderColor: '#FFFFFF' }]}>
          {/* $500 to $2500 per day */}
          <View style={tw`flex-row items-center mt-[24px]`}>
            <View style={tw`flex-1 ml-[24px]`}>
              <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>$500 to $2500 per day</Text>
              <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Requirement to be able to spend</Text>
            </View>
            <View style={tw`rounded-[32px] bg-[#F3F3F3] mr-[16px]`}>
              <Text style={[tw`text-[14px] text-[#A2A1A2] px-[24px] py-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Tier 3</Text>
            </View>
          </View>
          {/* Personal Information */}
          <View style={tw`flex-row items-center mt-[17px] ml-[24px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/cc1kdZf/Vector.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-white text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Personal Information</Text>
            </View>
          </View>
          {/* Facial Recongnition */}
          <View style={tw`flex-row items-center mt-[18px] ml-[24px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/cc1kdZf/Vector.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-white text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Facial Recongnition</Text>
            </View>
          </View>
          {/* Government Issued ID */}
          <View style={tw`flex-row items-center mt-[18px] ml-[24px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/5vHBw6r/vector-1.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-white text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Government-issued ID</Text>
            </View>
          </View>
          {/* Proof of address */}
          <View style={tw`flex-row items-center mt-[18px] ml-[24px] mb-[26px]`}>
            <Image
              source={{ uri: 'https://i.ibb.co/5vHBw6r/vector-1.png' }}
              style={tw`w-[16px] h-[16px]`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-gray-100 text-[14px]`, { fontFamily: 'Rubik_400Regular' }]}>Proof of address</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </MainContainer>
  )
}