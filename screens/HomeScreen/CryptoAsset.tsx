/**
 * CryptoAsset.tsx
 * 
 * Created By Portcard Team 2022/2023
 */

import React, { useCallback, useRef, useMemo } from 'react';
import { TouchableOpacity, View, Text, } from 'react-native';
import tw from 'twrnc';
import { RootStackScreenProps } from '../../types';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from '@rneui/themed';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetModalProvider, } from "@gorhom/bottom-sheet";
import MainContainer from '../../components/Containers/MainContainer';
import CryptoAssetSelectList from '../../components/SelectList/CryptoAssetsSelectList';



function CryptoAsset({ navigation }: RootStackScreenProps<'CryptoAsset'>) {
    // Choose Asset Ref
    const chooseAssetsbottomSheetModalRef = useRef<BottomSheetModal>(null);
    // Choose Assets variables
    const chooseAssetsSnapPoints = useMemo(() => ['50%', '60%'], []);
    // Choose Assets callbacks
    const chooseAssetsHandlePresentModalPress = useCallback(() => {
      chooseAssetsbottomSheetModalRef.current?.present();
    }, []);
    // Snap points are used to define the height of the bottom sheet
    const chooseAssetsHandleSheetChanges = useCallback((index: number) => {
      chooseAssetsbottomSheetModalRef.current?.snapToIndex(index);
    }, []);
    // Close BottomSheet
    const chooseAssetsHandleClosePress = useCallback(() => {
      chooseAssetsbottomSheetModalRef.current?.close();
    }, []);

    // Back drop Element
    const BackdropElement = useCallback(
      (backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          opacity={0.7}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
        ), []);

  // Renders Views
  return (
    // Bottom Sheet Modal Provider
    <BottomSheetModalProvider>
      <MainContainer style={tw`bg-[#242326]`}>
        {/* App Status bar */}
        <StatusBar style="auto" />
          {/* Crypto Assets Header */}
          <View style={tw`flex-row justify-between items-center`}>
            {/* Back Button */}
            <View>
              <TouchableOpacity
                onPress={navigation.goBack}
                style={tw`w-full h-25 ml-[16px] mt-[48px]`}>
                <AntDesign name='arrowleft' size={35} color='#ffffff' />
              </TouchableOpacity>
            </View>
            {/* Crypto Assets */}
            <View style={tw`flex-col lg:flex-row justify-between items-center`}>
              {/* Crypto Assets Text */}
              <Text style={tw`text-gray-100 text-[24px]`}>Crypto Assets</Text>
              {/* Deposit funds in your wallet to save and spend */}
              <Text style={tw`text-[14px] text-[#A2A1A2] pl-[8px] pt-[8px]`}> Deposit funds in your wallet to save and spend.</Text>
              </View>           
            <View style={tw`w-[50px]`}></View>
          </View>
          {/* USDT TETHER CARD */}
          <View style={tw`flex-row items-center ml-[16px] w-[364px] h-[56px] bg-[#F3F3F3] rounded-[8px] mb-[24px]`}>
            {/* Assets Image */}
            <Image
              source={{ uri: 'https://i.ibb.co/nrtc05W/inage-4.png' }}
              style={tw`w-[32px] h-[32px] ml-[16px]`} />
            {/* Usdt  */}
            <Text style={[tw`text-[12] text-[16px] pl-[11px]`,{fontFamily:'Rubik_400Regular'}]}>USDT</Text>
            {/* Tether */}
            <View style={tw`flex-1 pl-[16px]`}>
              <Text style={[tw`text-gray-600 text-[12px]`,{fontFamily:'Rubik_400Regular'}]}>Tether</Text>
            </View>
            {/* Change Asset button */}
            <TouchableOpacity
            onPress={chooseAssetsHandlePresentModalPress}>
              <Text style={[tw`text-center text-[#242326] mr-[16px] text-[12px]`,{fontFamily:'Rubik_400Regular'}]}>Change Asset</Text>
            </TouchableOpacity>
          </View>
          {/* QR Code Container */}
          <View style={tw`flex-col items-center bg-[#F3F3F3] w-[364px] mx-[16px] mb-[60px] rounded-[8px]`}>
            <View style={tw`flex-row items-center`}>
              <Text style={[tw`text-lg mt-[28px] px-2 mb-[28px]`,{fontFamily:'Rubik_400Regular'}]}>Network</Text>
              {/* Select List */}
              <CryptoAssetSelectList/>
            </View>
            {/* QR Code Image */}
            <Image
              source={{ uri: 'https://i.ibb.co/c2TzVbw/image-19.png' }}
              style={tw`w-[208px] h-[200px]`} />
            {/* Wallet Address */}
            <Text style={[tw`text-center font-bold text-[#242326] text-[14px] mt-[41px]`,{fontFamily:'Rubik_400Regular'}]}>Wallet Address</Text>
            {/* Wallet Addres code */}
            <Text style={[tw`mt-1 text-[12px] text-[#242326] mb-[40px]`,{fontFamily:'Rubik_400Regular'}]}>bitrcadsfgbnmasdfghjkhjhfddfetyyufdf</Text>
          </View>
          {/* Copy Address Button */}
          <TouchableOpacity 
            style={[tw`pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-20 left-[10px] rounded-[16px] border flex-row`, { borderColor: '#CDFB51' }]}>
              <Text style={[tw`flex-1 text-center text-[#CDFB51] text-[16px]`,{fontFamily:'Rubik_400Regular'}]}>Copy Address</Text>
          </TouchableOpacity> 
          {/* Share Address Button */}
          <TouchableOpacity 
            style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-5 left-[10px] rounded-[16px] flex-row`}>
              <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`,{fontFamily:'Rubik_400Regular'}]}>Share Address</Text>
          </TouchableOpacity>        
          {/* 01. Choose Assets Bottom Modal Sheet  */}
          <BottomSheetModal
            ref={chooseAssetsbottomSheetModalRef}
            index={1}
            snapPoints={chooseAssetsSnapPoints}
            backdropComponent={BackdropElement} 
            backgroundComponent={({style}) => <View style={[style, tw`bg-[#242326]`,{borderTopLeftRadius:24, borderTopRightRadius:24}]} /> }
            onChange={chooseAssetsHandleSheetChanges}>
              <View style={tw`bg-[#242326] flex-1`}>
                <View style={tw`mt-[32px] flex-row items-center justify-between px-[16.37px]`}>
                  <View></View>
                  {/* Title */}
                  <Text style={[tw`text-gray-100 text-[24px]`,{fontFamily:'Rubik_400Regular'}]}>Choose Asset</Text>
                  {/* Close Button */}
                  <MaterialCommunityIcons
                    name='close-circle-outline'
                    size={25} color='#CDFB51'
                    onPress={chooseAssetsHandleClosePress} />
                 </View>
                {/* Choose crypto you want to use to fund your wallet */}
                <Text style={[tw`flex-row text-center text-[14px] pt-[4px] pb-[56px] text-[#A2A1A2]`,{fontFamily:'Rubik_400Regular'}]}>Choose crypto you want to use to fund your wallet</Text>
                {/* USDT Tether */}
                <TouchableOpacity>
                  <View style={tw`flex-row items-center bg-[#2F2E32] rounded-[8px] w-[364px] h-[64px] mx-[25px]`}>
                    <Image
                      source={{ uri: 'https://i.ibb.co/nrtc05W/image-4.png' }}
                      style={tw`w-[32px] h-[32px] ml-[16px]`} />
                    <View style={tw`flex-row items-center px-[12px]`}>
                      <Text style={[tw`text-gray-100 text-[16px]`,{fontFamily:'Rubik_400Regular'}]}>USDT</Text>
                      <Text style={[tw`text-[#A2A1A2] text-[12px] ml-[8px]`,{fontFamily:'Rubik_400Regular'}]}>Tether</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* USDC USD coin */}
                <TouchableOpacity>
                  <View style={tw`flex-row items-center bg-[#2F2E32] rounded-[8px] w-[364px] h-[64px] mx-[25px] mt-[8px]`}>
                    <Image
                      source={{ uri: 'https://i.ibb.co/8M1vFGv/image-4-1.png' }}
                      style={tw`w-[32px] h-[32px] ml-[16px]`} />
                    <View style={tw`flex-row items-center px-[12px]`}>
                    {/* USDC */}
                      <Text style={[tw`text-gray-100 text-[16px]`,{fontFamily:'Rubik_400Regular'}]}>USDC</Text>
                      {/* USD coin */}
                      <Text style={[tw`text-[#A2A1A2] text-[12px] ml-[8px]`,{fontFamily:'Rubik_400Regular'}]}>USD coin</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* BUSD Binance USD */}
                <TouchableOpacity>
                  <View style={tw`flex-row items-center bg-[#2F2E32] rounded-[8px] w-[364px] h-[64px] mx-[25px] mt-[8px]`}>
                    <Image
                      source={{ uri: 'https://i.ibb.co/n05M5Hb/image-4-2.png' }}
                      style={tw`w-[32px] h-[32px] ml-[16px]`} />
                    <View style={tw`flex-row items-center px-[12px]`}>
                    {/* BUSD */}
                      <Text style={[tw`text-gray-100 text-[16px]`,{fontFamily:'Rubik_400Regular'}]}>BUSD</Text>
                      {/* Binance USD */}
                      <Text style={[tw`text-[#A2A1A2] text-[12px] ml-[8px]`,{fontFamily:'Rubik_400Regular'}]}>Binance USD</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* DAI Maker DAO */}
                <TouchableOpacity >
                  <View style={tw`flex-row items-center bg-[#2F2E32] rounded-[8px] w-[364px] h-[64px] mx-[25px] mt-[8px]`}>
                    <Image
                      source={{ uri: 'https://i.ibb.co/sJS8cJ5/image-4-3.png' }}
                      style={tw`w-[32px] h-[32px] ml-[16px]`} />
                    <View style={tw`flex-row items-center px-[12px]`}>
                    {/* DAI */}
                      <Text style={[tw`text-gray-100 text-[16px]`,{fontFamily:'Rubik_400Regular'}]}>DAI</Text>
                      {/* MakerDao */}
                      <Text style={[tw`text-[#A2A1A2] text-[12px] ml-[8px]`,{fontFamily:'Rubik_400Regular'}]}>MakerDao</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
           </BottomSheetModal> 
      </MainContainer>
    </BottomSheetModalProvider>
  )
}

export default CryptoAsset;