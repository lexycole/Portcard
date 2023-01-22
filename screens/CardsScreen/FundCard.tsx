/**
 *  FundCard.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import React, { useState } from 'react'
import tw from 'twrnc';
import { RootStackScreenProps } from '../../types';
import { Text, TouchableOpacity, Alert, Modal, Pressable, StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import MainContainer from '../../components/Containers/MainContainer';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function FundCard({ navigation }: RootStackScreenProps<'FundCard'>) {
  // Modal State
  const [modalVisible, setModalVisible] = useState(false);
  // Handle Fund Wallet
  const handleFundWallet = () => {
    setModalVisible(!modalVisible);
  }
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }


  // Fund Card Render
  return (
    // Main Container View
    <MainContainer style={{ backgroundColor: "#242326" }}>
      <StatusBar style="auto" />
      {/* Screen Header */}
      <View style={tw`flex-row items-center justify-between`}>
        {/* Navigate Back Button */}
        <View>
          <TouchableOpacity
              onPress={navigation.goBack}
              style={tw`w-full h-24 top-[48px] pl-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Transfer */}
        <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
          Fund Card
        </Text>
        <View style={tw`justify-end`}></View>
      </View>
      {/*  How much do you want to add to your card Text*/}
      <Text style={[tw`text-[#A2A1A2] text-center mt-[4px] ml-[45px]`, { fontSize: 14, fontFamily: 'Rubik_400Regular' }]}>
        How much do you want to add to your card
      </Text>
      {/* USD text Input Field */}
      <View style={tw`flex-col lg:flex-row items-center mt-[66px] mx-[36px]`}>
        {/* USD  */}
        <Text style={[tw`text-gray-100 text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>USD</Text>
        {/* USD Text Input */}
        <TextInput
          placeholder="0"
          keyboardType="numeric"
          placeholderTextColor='#FFFFFF'
          style={tw`font-bold text-gray-100 text-[64px]`}
        />
      </View>
      {/* Available Balance and USD */}
      <View style={tw`flex-row items-center mx-[16px]`}>
        <View style={tw`flex-1`}>
          {/* Available Balance */}
          <Text style={[tw`text-[#A2A1A2] text-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>Available Balance</Text>
          {/* USD Amount */}
          <Text style={[tw`text-gray-100 text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>USD 1,200.00</Text>
        </View>
        {/* Send Max Button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={tw`flex-row bg-[#2F2E32] items-center rounded-[8px] justify-between`}>
          <Text style={[tw`text-[#CDFB51] text-[14px] py-[8px] px-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Send Max</Text>
        </TouchableOpacity>
      </View>
      {/* CTA Fund Card */}
      <TouchableOpacity
        onPress={() => navigation.navigate("FundedSuccessful")}
        style={tw`pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mt-[24px] mx-[16px] mb-[475px] rounded-[16px] bg-[#CDFB51]`}>
        <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Fund Card</Text>
      </TouchableOpacity>
      {/* Send Max Modal */}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          // on Request Close function
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* Insufficient Balance Text*/}
              <Text style={styles.modalText}>Insufficient Balance</Text>
              {/* Can't fund your card because ... */}
              <Text style={styles.modalBodyText}>Can't fund your card because you don't have enough funds. Deposit funds in your wallet to complete you funding </Text>
              {/* Fund Wallet Button */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleFundWallet}>
                {/* Fund Wallet Text */}
                <Text style={styles.textStyle}>Fund Wallet</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </MainContainer>
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 16,
    backgroundColor: "#2F2E32",
    borderRadius: 24,
    padding: 35,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 40,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#CDFB51",
  },
  modalText: {
    marginTop: 40,
    marginBottom: 8,
    marginHorizontal: 1,
    textAlign: "center",
    color: "#ffffff",
    fontSize: 24,
    fontFamily: 'Rubik_400Regular',
  },
  modalBodyText: {
    textAlign: "center",
    color: "#A2A1A2",
    fontSize: 16,
    fontFamily: 'Rubik_400Regular',
  },
  textStyle: {
    color: "#242326",
    fontSize: 12,
    textAlign: "center",
    fontFamily: 'Rubik_400Regular',
  },
})