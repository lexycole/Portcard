/**
 *  Settings.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import tw from 'twrnc';
import React from 'react';
import { RootStackScreenProps } from '../../types';
import { Divider, Icon, Image } from '@rneui/themed';
import { TouchableOpacity, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';
import MainContainer from '../../components/Containers/MainContainer';


export default function Settings({ navigation }: RootStackScreenProps<'Settings'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Settings Render
  return (
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Screen Status Bar */}
      <StatusBar style="auto" />
      {/* Settings Screen Title */}
      <Text style={[tw`text-gray-100 text-center text-[24px] mt-[48px] mx-[36px]`, { fontFamily: 'Rubik_400Regular' }]}>Settings</Text>
      {/* Profile View */}
      <View style={tw`flex-row justify-between items-center bg-[#242326] mb-[12px]`}>
        <View style={tw`w-25`}></View>
        {/* Profile Image */}
        <View style={tw`mt-[40px] items-center bg-[#242326]`}>
          <Image
            source={{ uri: 'https://i.ibb.co/RhLLsPy/user-circle-2.png' }}
            style={tw`w-[62px] h-[62px]`} />
        </View>
        {/* Member since & Jun 2022 */}
        <View style={tw`rounded-lg items-center justify-end bg-[#CDFB51] pl-[6px] pr-[10px] relative -right-4`}>
          <Text style={[tw`text-[12px] pl-[6px] pt-[4px] pr-[10px]`, { fontFamily: 'Rubik_400Regular' }]}>Member since</Text>
          <Text style={[tw`text-[12px] pb-[6px]`, { fontFamily: 'Rubik_400Regular' }]}>Jun 2022</Text>
        </View>
      </View>
      {/* Username Text*/}
      <Text style={[tw`text-gray-100 text-center text-[16px] mt-[11px]`, { fontFamily: 'Rubik_400Regular' }]}>@ade2347</Text>
      {/* Tier 1 Text*/}
      <View style={tw`rounded-[32px] bg-[#4E5931] mt-[10px] mx-[160px]`}>
        <Text style={[tw`text-[#CDFB51] text-[14px] text-center px-[18px] py-[2px]`, { fontFamily: 'Rubik_400Regular' }]}>Tier 1</Text>
      </View>
      {/* Settings Naviation */}
      <View style={tw`bg-[#2F2E32] rounded-[16px] mt-[25px] mx-[14px]`}>
        {/* 01. Notifications */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Notifications")}
          style={tw`flex-row items-center ml-[17px] my-[10px]`}>
          {/* Notifications Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/k2zHLj4/Vector.png' }}
            style={tw`w-[14px] h-[16px]`} />
          {/* Notifications Text */}
          <View style={tw`flex-1 bg-[#2F2E32]`}>
            <Text style={[tw`text-[14px] text-gray-100 pl-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Notifications</Text>
          </View>
          {/* chevron-right icon */}
          <View style={tw`mr-[24px] bg-[#2F2E32]`}>
            <Icon name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </TouchableOpacity>
        {/* Divider */}
        <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
        {/* 02. Account Information/KYC */}
        <TouchableOpacity
          onPress={() => navigation.navigate("AccountInformationOrKYC")}
          style={tw`flex-row items-center ml-[16px] my-[10px]`}>
          {/* Account Information/KYC Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/1KqHN4Q/Vector-2.png' }}
            style={tw`w-[16px] h-[16px]`} />
          {/* Account Information/KYC Text */}
          <View style={tw`flex-1 bg-[#2F2E32]`}>
            <Text style={[tw`text-[14px] text-gray-100 pl-[11px]`, { fontFamily: 'Rubik_400Regular' }]}>Account Information/KYC</Text>
          </View>
          {/* chevron-right icon */}
          <View style={tw`mr-[24px] bg-[#2F2E32]`}>
            <Icon name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </TouchableOpacity>
        {/* Divider */}
        <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
        {/* 03. Help/Support */}
        <TouchableOpacity
          onPress={() => navigation.navigate("HelpOrSupport")}
          style={tw`flex-row items-center ml-[16.25px] my-[10px]`}>
          {/* Help/Support Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/kH1HdMn/question-circle-1.png' }}
            style={tw`w-[16px] h-[16px]`} />
          {/* Help/Support Text */}
          <View style={tw`flex-1 bg-[#2F2E32]`}>
            <Text style={[tw`text-[14px] text-gray-100 pl-[11.25px]`, { fontFamily: 'Rubik_400Regular' }]}>Help/Support</Text>
          </View>
          {/* chevron-right icon */}
          <View style={tw`mr-[24px] bg-[#2F2E32]`}>
            <Icon name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </TouchableOpacity>
        {/* Divider */}
        <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
        {/* 04. Apperance */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Appearance")}
          style={tw`flex-row items-center my-[10px] ml-[16px]`}>
          {/* Apperance Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/v4PSNDH/brand-1.png' }}
            style={tw`w-[16px] h-[16px]`} />
          {/* Apperance Text */}
          <View style={tw`flex-1 bg-[#2F2E32]`}>
            <Text style={[tw`text-[14px] text-gray-100 pl-[11px]`, { fontFamily: 'Rubik_400Regular' }]}>Apperance</Text>
          </View>
          {/* chevron-right icon */}
          <View style={tw`mr-[24px] bg-[#2F2E32]`}>
            <Icon name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </TouchableOpacity>
        {/* Divider */}
        <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
        {/* 05. Security Settings */}
        <TouchableOpacity
          onPress={() => navigation.navigate("SecuritySettings")}
          style={tw`flex-row items-center ml-[17px] my-[10px]`}>
          {/* Security Settings Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/s25XQKZ/security-account-2.png' }}
            style={tw`w-[13.09px] h-[16px]`} />
          {/* Security Settings Text */}
          <View style={tw`flex-1 bg-[#2F2E32]`}>
            <Text style={[tw`text-[14px] text-gray-100 pl-[12.91px]`, { fontFamily: 'Rubik_400Regular' }]}>Security Settings</Text>
          </View>
          {/* chevron-right icon */}
          <View style={tw`mr-[24px] bg-[#2F2E32]`}>
            <Icon name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </TouchableOpacity>
        {/* Divider */}
        <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
        {/* 06. Referral */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Referral")}
          style={tw`flex-row items-center my-[10px] ml-[16px]`}>
          {/* Referral Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/k6Yj47g/add-user-2875-2.png' }}
            style={tw`w-[16px] h-[16px]`} />
          {/* Referral Text */}
          <View style={tw`flex-1 bg-[#2F2E32]`}>
            <Text style={[tw`text-[14px] text-gray-100 pl-[11px]`, { fontFamily: 'Rubik_400Regular' }]}>Referral</Text>
          </View>
          {/* chevron-right icon */}
          <View style={tw`mr-[24px] bg-[#2F2E32]`}>
            <Icon name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </TouchableOpacity>
        {/* Divider */}
        <Divider style={[tw`mx-[16px]`, { backgroundColor: '#CDFB51' }]} />
        {/* 07. Privacy Policy/Terms of Service */}
        <TouchableOpacity
          onPress={() => navigation.navigate("PrivacyPolicyOrTermsOfService")}
          style={tw`flex-row items-center mt-[10px] ml-[16px] mb-[20.19px]`}>
          {/* Privacy Policy/Terms of Service Image */}
          <Image
            source={{ uri: 'https://i.ibb.co/NYcFTxB/Vector-1.png' }}
            style={tw`w-[11.26px] h-[14.81px]`} />
          {/* Privacy Policy/Terms of Service Text */}
          <View style={tw`flex-1 bg-[#2F2E32]`}>
            <Text style={[tw`text-[14px] text-gray-100 pl-[11px]`, { fontFamily: 'Rubik_400Regular' }]}>Privacy Policy/Terms of Service</Text>
          </View>
          {/* chevron-right icon */}
          <View style={tw`mr-[24px] bg-[#2F2E32]`}>
            <Icon name='chevron-right' size={24} color='#A2A1A2' />
          </View>
        </TouchableOpacity>
      </View>
      {/* Logout Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Upload ID</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}