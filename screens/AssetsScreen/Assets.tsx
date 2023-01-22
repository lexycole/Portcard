/**
 *  Assets.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import { StatusBar } from 'expo-status-bar';
import MainContainer from '../../components/Containers/MainContainer';
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { Image } from '@rneui/themed';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function Assets({ navigation }: RootStackScreenProps<'Assets'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Assets Render
  return (
    // Main Container
    <MainContainer style={tw`bg-[#242326]`}>
      {/* Safe Area View */}
      <SafeAreaView>
        {/* Scroll View */}
        <ScrollView>
          {/* Status Bar */}
          <StatusBar style="auto" />
          {/* Screen Header */}
          <View style={tw`flex-col lg:flex-row justify-between items-center mt-[48px] mb-[40px]`}>
            {/* Screen Title */}
            <Text style={[tw`text-gray-100 text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>Assets</Text>
            {/* See all supported assets */}
            <Text style={[tw`text-sm text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>See all supported assets</Text>
          </View>
          {/* List of all supported assets as follows: */}
          <View style={tw`mx-[16px]`}>
            {/* Portcoin */}
            <TouchableOpacity
              onPress={() => navigation.navigate("AssetsDetails")}>
              <View style={tw`flex-row items-center py-3`}>
                {/* Portcoin Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/mh4B58v/Crypto-2.png' }}
                  style={tw`w-[48px] h-[48px] rounded-full`} />
                <View style={tw`flex-1 pl-[8px]`}>
                  <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Portcoin</Text>
                  {/* Portcoin Currency */}
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>PRT</Text>
                </View>
                {/* Amount */}
                <View>
                  <Text style={[tw`text-gray-100 text-[16px] mx-5`, { fontFamily: 'Rubik_400Regular' }]}>0</Text>
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>$0.00</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* Tether */}
            <TouchableOpacity
              onPress={() => navigation.navigate("ProcessingAssetsWithdrawal")}>
              <View style={tw`flex-row items-center py-3`}>
                {/* Tether Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/QNbWSbH/Crypto-1.png' }}
                  style={tw`w-[48px] h-[48px] rounded-full`} />
                <View style={tw`flex-1 pl-[8px]`}>
                  <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Tether</Text>
                  {/* Eth Currecny */}
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>ETH</Text>
                </View>
                <View>
                  {/* Amount */}
                  <Text style={[tw`text-gray-100 text-[16px] mx-5`, { fontFamily: 'Rubik_400Regular' }]}>0</Text>
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>$0.00</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* Ethereum */}
            <TouchableOpacity
              onPress={() => navigation.navigate("AssetsDetails")}>
              <View style={tw`flex-row items-center py-3`}>
                {/* Ethereum Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/BqRxrGN/Coin-logo-1.png' }}
                  style={tw`w-[48px] h-[48px] rounded-full`} />
                <View style={tw`flex-1 pl-[8px]`}>
                  <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Ethereum</Text>
                  {/* Currency */}
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>ETH</Text>
                </View>
                <View>
                  {/* Amount */}
                  <Text style={[tw`text-gray-100 text-[16px] mx-5`, { fontFamily: 'Rubik_400Regular' }]}>0</Text>
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>$0.00</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* Bitcoin */}
            <TouchableOpacity
              onPress={() => navigation.navigate("AssetsDetails")}>
              <View style={tw`flex-row items-center py-3`}>
                {/* Bitcoin Image */}
                <Image
                  source={{ uri: 'https://i.ibb.co/Vq8pzD3/Coin-logo-2.png' }}
                  style={tw`w-[48px] h-[48px] rounded-full`} />
                {/* Currecny */}
                <View style={tw`flex-1 pl-[8px]`}>
                  <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Bitcoin</Text>
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>BTC</Text>
                </View>
                {/* Amount */}
                <View>
                  <Text style={[tw`text-gray-100 text-[16px] mx-5`, { fontFamily: 'Rubik_400Regular' }]}>0</Text>
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>$0.00</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* Solana */}
            <TouchableOpacity
              onPress={() => navigation.navigate("AssetsDetails")}>
              <View style={tw`flex-row items-center py-3`}>
                <View style={tw`rounded-full bg-[#F3F3F3] p-3`}>
                  <Image
                    source={{ uri: 'https://i.ibb.co/G5W0v22/Cypto.png' }}
                    style={tw`w-[28px] h-[28px] rounded-full`} />
                </View>
                {/* Currency */}
                <View style={tw`flex-1 pl-[8px]`}>
                  <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Solana</Text>
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>SOL</Text>
                </View>
                {/* Amount */}
                <View>
                  <Text style={[tw`text-gray-100 text-[16px] mx-5`, { fontFamily: 'Rubik_400Regular' }]}>0</Text>
                  <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>$0.00</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </MainContainer>
  );
}