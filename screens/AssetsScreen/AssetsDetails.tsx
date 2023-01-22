/**
 *  AssetsDetails.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef, useMemo, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { Divider, Image } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetModalProvider, } from "@gorhom/bottom-sheet";
import DepositUsdtSelectList from '../../components/SelectList/DepositUsdtSelectList';



export default function AssetsDetails({ navigation }: RootStackScreenProps<'AssetsDetails'>) {
  //  Network Dropdown
  const [selectedNetwork, setSelectedNetwork] = useState();


  // 01. Deposit Bottom Sheet Modal Ref
  const depositUSDTBottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ['90%', '95%'], []);
  // callbacks
  const handleDepositModalPress = useCallback(() => {
    depositUSDTBottomSheetModalRef.current?.present();
  }, []);
  //  Snap points are used to define the height of the bottom sheet
  const handleDepositUSDTClosePress = useCallback((index: number) => {
    depositUSDTBottomSheetModalRef.current?.snapToIndex(index);
  }, []);
  // Close BottomSheet
  const handleClosePress = useCallback(() => {
    depositUSDTBottomSheetModalRef.current?.close();
  }, []);


  // 02.Transfer usdt ref
  const transferBottomSheetModalRef = useRef<BottomSheetModal>(null);
  // Transfer snapPoints
  const transferSnapPoints = useMemo(() => ['45%', '70%'], []);
  // Transfer handlePresentModalPress
  const transferHandlePresentModalPress = useCallback(() => {
    transferBottomSheetModalRef.current?.present();
  }, []);
  // Transfer handleSheetChanges
  const transferHandleSheetChanges = useCallback((index: number) => {
    transferBottomSheetModalRef.current?.snapToIndex(index);
  }, []);
  // Transfer handleClosePress
  const transferHandleClosePress = useCallback(() => {
    transferBottomSheetModalRef.current?.close();
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

  // Assets Details Render
  return (
    <BottomSheetModalProvider>
      <MainContainer style={{ backgroundColor: "#242326" }}>
        {/* Status Bar */}
        <StatusBar style="auto" />
        {/* Navigate back */}
        <TouchableOpacity
          onPress={navigation.goBack}
          style={tw`w-full h-24 top-[48px] left-1`}>
          <AntDesign name='arrowleft' size={35} color='#ffffff' />
        </TouchableOpacity>
        {/* Coin Image Container */}
        <View style={tw`items-center`}>
          <Image
            source={{ uri: 'https://i.ibb.co/mh4B58v/Crypto-2.png' }}
            style={tw`w-[48px] h-[48px] rounded-full`} />
        </View>
        {/* Current Price & Your Balance Container */}
        <View style={tw`flex-row justify-between items-center mt-[16px] mx-[16px]`}>
          {/* Current Price */}
          <View>
            <Text style={[tw`text-[#A2A1A2]`, { fontSize: 12, fontFamily: 'Rubik_400Regular' }]}>Current Price</Text>
          </View>
          {/* Your Balance */}
          <View style={tw`justify-end `}>
            <Text style={[tw`text-[#A2A1A2]`, { fontSize: 12, fontFamily: 'Rubik_400Regular' }]}>Your Balance</Text>
          </View>
        </View>
        {/* USDT Container */}
        <View style={tw`flex-row justify-between items-center mt-[8px] mx-[16px]`}>
          <View>
            {/* USDT */}
            <Text style={[tw`text-gray-100`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>USDT</Text>
          </View>
          <View style={tw`flex-row justify-end`}>
            {/* $0 */}
            <Text style={[tw`text-gray-100`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>$0</Text>
          </View>
        </View>

        <View style={tw`flex-row justify-between items-center mx-[16px] mb-[16px]`}>
          {/* USD & Percent */}
          <View>
            {/* $1 */}
            <Text style={[tw`text-[#A2A1A2]`, { fontSize: 12, fontFamily: 'Rubik_400Regular' }]}> $1 <Text style={tw`text-[#00FF00]`}> -1.06% </Text> </Text>
          </View>
          {/* USDT Amount */}
          <View style={tw`justify-end`}>
            {/* 0 USDT */}
            <Text style={[tw`text-[#A2A1A2]`, { fontSize: 12, fontFamily: 'Rubik_400Regular' }]}>0 USDT</Text>
          </View>
        </View>
        {/* Divider */}
        <Divider />
        {/* Buttons Container */}
        <View style={tw`flex-row items-center justify-between mt-[24px] mb-[24px]`}>
          {/* Deposit Button */}
          <TouchableOpacity
            onPress={handleDepositModalPress}
            style={tw`px-[40px] py-[12px] rounded-[8px] bg-[#CDFB51]`}>
            <Text style={[tw`text-center text-[#242326] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Deposit</Text>
          </TouchableOpacity>
          {/* Withdraw Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("WithdrawAssetsUSDT")}
            style={tw`px-[40px] py-[12px] rounded-[8px] bg-[#ffffff]`}>
            <Text style={[tw`text-center text-[#242326] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdraw</Text>
          </TouchableOpacity>
          {/* Transfer Button */}
          <TouchableOpacity
            onPress={transferHandlePresentModalPress}
            style={[tw`px-[40px] py-[12px] rounded-[8px] border`, { borderColor: '#CDFB51' }]}>
            <Text style={[tw`text-center text-[#CDFB51] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Transfer</Text>
          </TouchableOpacity>
        </View>
        {/* Divider */}
        <Divider />

        <View style={tw`flex-row items-center`}>
          {/* History and Balance Container */}
          <View style={tw`flex-1 pl-[8px] mt-[24px]`}>
            {/* History */}
            <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>History</Text>
            {/* Showing your assets with Balance */}
            <Text style={[tw`text-[#A2A1A2] text-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Showing your assets with Balance</Text>
          </View>
          {/* USDT Picker */}
          <Picker
            selectedValue={selectedNetwork}
            onValueChange={(itemValue, itemIndex) => setSelectedNetwork(itemValue)}
            mode="dropdown"
            style={[tw`text-[#242326] w-[120px] text-center bg-[#ffffff] text-[12px] mt-[20px]`, { fontFamily: 'Rubik_400Regular' }]}>
            <Picker.Item label="ALL" value="ALL" />
            <Picker.Item label="USDT" value="USDT" />
          </Picker>
        </View>
        {/* History Container */}
        <View style={tw`mt-[10px]`}>
          {/* 01. Withdrawal List */}
          <View style={tw`flex-row items-center h-[80px] p-3 rounded-[8px] bg-[#2F2E32]`}>
            <Image
              source={{ uri: "https://i.ibb.co/WfVwC3n/Coin-logo-1.png" }}
              style={tw`w-[48px] h-[48px] rounded-full`} />
            <View style={tw`flex-1 pl-[8px]`}>
              {/* Wthdrawal */}
              <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdrawal</Text>
              {/* Jun 30. */}
              <Text style={[tw`text-[#F3F3F3] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Jun 30.</Text>
            </View>
            <View>
              {/* 4,812 USDT */}
              <Text style={[tw`text-[#FF0000] text-[16px] mr-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>4,812 USDT</Text>
            </View>
          </View>
          {/* 02. Deposit List*/}
          <View style={tw`flex-row items-center h-[80px] p-3 mt-[8px] rounded-[8px] bg-[#2F2E32]`}>
            <Image
              source={{ uri: "https://i.ibb.co/smqjbS4/Coin-logo-1.png" }}
              style={tw`w-[48px] h-[48px] rounded-full`} />
            <View style={tw`flex-1 pl-[8px]`}>
              <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Deposit</Text>
              <Text style={[tw`text-[#F3F3F3] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Jun 30.</Text>
            </View>
            <View>
              <Text style={[tw`text-[#00FF00] text-[16px] mr-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>4,812 PRT</Text>
            </View>
          </View>
          {/* 03. Transfer List */}
          <View style={tw`flex-row items-center h-[80px] p-3 mt-[8px] rounded-[8px] bg-[#2F2E32]`}>
            <Image
              source={{ uri: "https://i.ibb.co/DKrhzY2/Coin-logo-5.png" }}
              style={tw`w-[48px] h-[48px] rounded-full`} />
            <View style={tw`flex-1 pl-[8px]`}>
              {/* Transfer */}
              <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Transfer</Text>
              {/* Jun 18. */}
              <Text style={[tw`text-[#F3F3F3] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Jun 18.</Text>
            </View>
            <View>
              {/* 4,812 PRT */}
              <Text style={[tw`text-gray-100 text-[16px] mr-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>4,812 PRT</Text>
            </View>
          </View>
          {/* Withdrawal */}
          <View style={tw`flex-row items-center h-[80px] p-3 mt-[8px] rounded-[8px] bg-[#2F2E32]`}>
            {/* Withdrawal Image */}
            <Image
              source={{ uri: "https://i.ibb.co/WfVwC3n/Coin-logo-1.png" }}
              style={tw`w-[48px] h-[48px] rounded-full`} />
            <View style={tw`flex-1 pl-[8px]`}>
              {/* Withdrawal */}
              <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Withdrawal</Text>
              {/* Jun 18. */}
              <Text style={[tw`text-[#F3F3F3] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Jun 18.</Text>
            </View>
            <View>
              <Text style={[tw`text-[#FF0000] text-[16px] mr-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>4,812 PRT</Text>
            </View>
          </View>
        </View>

        {/* 0.1 Deposit USDT Bottom modal sheet */}
        <BottomSheetModal
          ref={depositUSDTBottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleDepositUSDTClosePress}
          backdropComponent={BackdropElement}
          backgroundComponent={({ style }) => <View style={[style, tw`bg-[#242326]`, { borderTopLeftRadius: 24, borderTopRightRadius: 24 }]} />}
        >
          <View style={tw`bg-[#242326] flex-1`}>
            <View style={tw`flex-row justify-between items-center mt-[32px] px-[16.38]`}>
              <View style={tw`justify-start`}></View>
              {/* Deposit USDT */}
              <View>
                <Text style={[tw`text-gray-100`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
                  Deposit USDT
                </Text>
              </View>
              {/* Handle Close Press */}
              <MaterialCommunityIcons
                name='close-circle-outline'
                size={25} color='#CDFB51'
                onPress={handleClosePress} />
            </View>
            {/* Deposit USDT to your wallet */}
            <Text style={[tw`pl-[115px] text-[12px] text-[#A2A1A2] mt-[4px]`, { fontFamily: 'Rubik_400Regular' }]}>
              Deposit USDT to your wallet.
            </Text>
            {/* USDT Card Container */}
            <View style={tw`flex-row items-center p-3 mt-[40px] mx-[16px] bg-[#F3F3F3] rounded-[8px]`}>
              {/* Image Tether */}
              <Image
                source={{ uri: 'https://i.ibb.co/nrtc05W/inage-4.png' }}
                style={tw`w-[50px] h-[40px]`} />
              {/* USDT */}
              <Text style={[tw` text-[#A2A1A2] text-[16px] pl-2`, { fontFamily: 'Rubik_400Regular' }]}>USDT</Text>
              {/* Tether */}
              <Text style={[tw`text-[#A2A1A2] text-[12px] pl-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Tether</Text>
            </View>
            {/* Deposit USDT QR Code */}
            <View style={tw`mt-[24px] mx-[16px] flex-col items-center bg-[#F3F3F3] rounded-[8px] mb-[160px]`}>
              <View style={tw`flex-row items-center`}>
                {/* Network Title  */}
                <Text style={[tw`text-[14px] px-2 mt-[28px]`, { fontFamily: 'Rubik_400Regular' }]}>Network</Text>
                {/* Picker Network */}
                <DepositUsdtSelectList />
              </View>
              {/* QR Picture */}
              <Image
                source={{ uri: 'https://i.ibb.co/c2TzVbw/image-19.png' }}
                style={tw`w-[180px] h-[180px] mt-[10px]`} />
              <View style={tw`flex-col items-center mt-[21px]`}>
                {/* Wallet Address */}
                <Text style={[tw`text-[14px] `, { fontFamily: 'Rubik_400Regular' }]}>Wallet Address</Text>
                {/* Wallet Code */}
                <Text style={[tw`mt-[1px] mb-[20px] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>bitrcadsfgbnmasdfghjkhjhfddfetyyufdf</Text>
              </View>
            </View>
            {/* Copy Address Button */}
            <TouchableOpacity
              style={[tw`pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-25 rounded-[16px] border flex-row`, { borderColor: '#CDFB51' }]}>
              <Text style={[tw`flex-1 text-center text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Copy Address</Text>
            </TouchableOpacity>
            {/* Share Address Button */}
            <TouchableOpacity
              style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-6 rounded-[16px] flex-row`}>
              <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Share Address</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
        {/* 0.2 Transfer Bottom Modal Sheet */}
        <BottomSheetModal
          ref={transferBottomSheetModalRef}
          index={1}
          snapPoints={transferSnapPoints}
          onChange={transferHandleSheetChanges}
          backdropComponent={BackdropElement}
          backgroundComponent={({ style }) => <View style={[style, tw`bg-[#242326]`, { borderTopLeftRadius: 24, borderTopRightRadius: 24 }]} />}
        >
          <View style={tw`bg-[#242326] flex-1`}>
            <View>
              <View style={tw`mt-[32px] flex-row items-center justify-between px-[16px]`}>
                <View>
                  <AntDesign name='arrowleft' size={35} color='#ffffff'
                    onPress={transferHandleClosePress} />
                </View>
                <Text style={[tw`text-gray-100 text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>USDT</Text>
                <MaterialCommunityIcons
                  name='close-circle-outline'
                  size={25} color='#CDFB51'
                  onPress={transferHandleClosePress} />
              </View>
              {/* USDT Details */}
              <View style={tw`mx-4`}>
                <View style={tw`flex-row items-center mt-[32px] bg-gray-100 rounded-[8px]`}>
                  <View style={tw`rounded-full bg-[#F3FED3] ml-[16px] my-[16px]`}>
                    {/* Tether Image */}
                    <Image
                      source={{ uri: 'https://i.ibb.co/nrtc05W/inage-4.png' }}
                      style={tw`w-[24px] h-[24px] rounded-full mx-[12px] my-[12px]`} />
                  </View>
                  <View style={tw`flex-1 pl-[8px]`}>
                    {/* Tether */}
                    <Text style={[tw`text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Tether</Text>
                    {/* USDT */}
                    <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>USDT <Text style={tw`text-[#FF0000]  text-[12px]`}> -0.06%</Text></Text>
                  </View>
                  <View style={tw`mr-[16px] my-[20px]`}>
                    {/* Amount */}
                    <Text style={[tw`text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>1,200,000.10</Text>
                    {/* Available Balance */}
                    <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Available Balance</Text>
                  </View>
                </View>
                {/* Send and Receive Swap Card */}
                <View style={tw`flex-col lg:flex-row rounded-[8px] bg-[#2F2E32] mt-[32px]`}>
                  <View style={tw`flex-row items-center justify-between`}>
                    <View style={tw`flex-1 ml-[24px]`}>
                      {/* You send */}
                      <Text style={[tw`text-[#A2A1A2] text-[12px] mt-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>You send</Text>
                      {/* Amount and USDT */}
                      <View style={tw`flex-row items-center mb-[24px]`}>
                        <Text style={[tw` text-gray-100 text-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>0.00</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[12px] pl-[4px]`, { fontFamily: 'Rubik_400Regular' }]}> USDT </Text>
                      </View>
                    </View>
                    {/*Send Image Tether */}
                    <View style={tw`mr-[24px]`}>
                      <Image
                        source={{ uri: 'https://i.ibb.co/QNbWSbH/Crypto-1.png' }}
                        style={tw`w-[40px] h-[40px] rounded-[8px]`} />
                    </View>
                  </View>
                  {/* Divider */}
                  <Divider style={tw`bg-[#CDFB51]`} />
                  {/* Swap button */}
                  <TouchableOpacity
                    onPress={() => { navigation.navigate('Transfer') }}
                    style={tw`absolute top-8 left-30]`}>
                    {/* Swap Image */}
                    <Image
                      source={{ uri: 'https://i.ibb.co/cDzNXdV/swap.png' }}
                      style={tw`w-[128px] h-[128px] rounded-lg`} />
                  </TouchableOpacity>
                  {/* USD Receive Portcard */}
                  <View style={tw`flex-row items-center justify-between`}>
                    <View style={tw`flex-1 ml-[24px]`}>
                      {/* Receieve */}
                      <Text style={tw`text-[#A2A1A2] text-[12px] mt-[16px]`}>You receive</Text>
                      {/* Amount and USD */}
                      <View style={tw`flex-row items-center mb-[24px]`}>
                        {/* Amount */}
                        <Text style={tw` text-gray-100 text-[24px]`}>0.00</Text>
                        {/* USD */}
                        <Text style={tw`text-[#A2A1A2] text-[12px] pl-[4px]`}> USD </Text>
                      </View>
                    </View>
                    {/* Portcard Image */}
                    <View style={tw`mr-[24px]`}>
                      <Image
                        source={{ uri: 'https://i.ibb.co/mh4B58v/Crypto-2.png' }}
                        style={tw`w-[40px] h-[40px] rounded-[8px]`} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* Transfer Button */}
            <TouchableOpacity
              // onPress={networkHandlePresentModalPress}
              style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 rounded-[16px] flex-row`}>
              <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Transfer</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </MainContainer>
    </BottomSheetModalProvider>
  )
}