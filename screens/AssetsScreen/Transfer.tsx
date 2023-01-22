/**
 *  Transfer.tsx
 * 
 *  Created By Portcard Team 2022/2023
 */
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { Divider, Image } from '@rneui/themed';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function Transfer({ navigation }: RootStackScreenProps<'Transfer'>) {
    // Decalre Fonts Loaded
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
    });
    //  Load no font if no font is found
    if (!fontsLoaded) {
        return null;
    }

    // Transfer Renders
    return (
        <MainContainer style={tw`bg-[#242326]`}>
            {/* Status Auto */}
            <StatusBar style="auto" />
            {/* Screen Container */}
            <View style={tw`flex-row items-center justify-between`}>
                {/* Navigate Back Button */}
                <View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        style={tw`w-full h-24 top-[48px] pl-[16px]`}>
                        <AntDesign name='arrowleft' size={35} color='#ffffff' />
                    </TouchableOpacity>
                </View>
                {/*Transfer Text */}
                <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
                    Transfer
                </Text>
                <View style={tw`justify-end`}></View>
            </View>
            {/* Send your asset to your USD wallet Text*/}
            <Text style={[tw`text-[#A2A1A2] text-center mt-[4px] ml-[45px]`, { fontSize: 14, fontFamily: 'Rubik_400Regular' }]}>
                Send your asset to your USD wallet.
            </Text>
            {/* 01. Card One Assets from and Wallet to */}
            <View style={tw`rounded-[8px] bg-[#2F2E32] mt-[40px] mx-[16px]`}>
                <View style={tw`flex-row justify-between`}>
                    <View>
                        {/* From Asset */}
                        <View style={tw`flex-row items-center ml-[16px] mt-[16px] mb-[8.67px]`}>
                            {/* From asset image */}
                            <Image
                                source={{ uri: 'https://i.ibb.co/w7jtntM/Coin-logo-8.png' }}
                                style={tw`w-[48px] h-[48px]`} />
                            {/* From Text*/}
                            <Text style={[tw`text-[#A2A1A2] text-[12px] pl-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>From</Text>
                            {/* Assets Text*/}
                            <Text style={[tw`text-gray-100 text-[16px] pl-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Asset</Text>
                        </View>
                        {/* Arrow Down */}
                        <View style={tw`pl-[28.01] mb-[8.67px] `}>
                            <Image
                                source={{ uri: 'https://i.ibb.co/zGkq8Lm/down-sm.png' }}
                                style={tw`w-[20px] h-[20px]`} />
                        </View>
                        {/* To Asset */}
                        <View style={tw`flex-row items-center ml-[16px] mb-[16px]`}>
                            <Image
                                source={{ uri: 'https://i.ibb.co/56sgTdS/Coin-logo-7.png' }}
                                style={tw`w-[50px] h-[50px]`} />
                            {/* To Text*/}
                            <Text style={[tw`text-[#A2A1A2] text-[12px] pl-[12px]`, { fontFamily: 'Rubik_400Regular' }]}>To</Text>
                            {/* Wallet Text*/}
                            <Text style={[tw`text-gray-100 text-[16px] pl-[8px]`, { fontFamily: 'Rubik_400Regular' }]}>Wallet</Text>
                        </View>
                    </View>
                    {/* Transfer Image */}
                    <View style={tw`flex-row items-center justify-end`}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Transfer') }}>
                            <Image
                                source={{ uri: 'https://i.ibb.co/cDzNXdV/swap.png' }}
                                style={tw`w-[128px] h-[128px] rounded-[8px]`} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* 02. Card two - Swap Details */}
            <View style={tw`flex-col lg:flex-row rounded-[8px] bg-[#2F2E32] mx-[16px] mt-[24px]`}>
                {/* You send Details */}
                <View style={tw`flex-row items-center justify-between`}>
                    <View style={tw`flex-1 pl-[4px]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[12px] mt-[16px] ml-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>You send</Text>
                        <View style={tw`flex-row items-center mb-[24px]`}>
                            <TextInput
                                placeholder="0.00"
                                keyboardType="numeric"
                                placeholderTextColor="#FFFFFF"
                                style={[tw`text-gray-100 w-[53px] text-[24px] ml-[24px]`, { fontFamily: 'Rubik_400Regular' }]}
                            />
                            {/* USDT */}
                            <Text style={[tw`text-[#A2A1A2] text-[12px] ml-[4px]`, { fontFamily: 'Rubik_400Regular' }]}>USDT</Text>
                        </View>
                    </View>
                    {/* Image Container */}
                    <View style={tw`mr-[24px]`}>
                        <Image
                            source={{ uri: 'https://i.ibb.co/QNbWSbH/Crypto-1.png' }}
                            style={tw`w-[38px] h-[38px] rounded-[8px]`} />
                    </View>
                </View>
                {/* Divider section */}
                <Divider style={tw`bg-[#CDFB51]`} />
                {/* You Recieve details */}
                <View style={tw`flex-row items-center justify-between`}>
                    <View style={tw`flex-1 pl-[4px]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[12px] mt-[24px] ml-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>You receive</Text>
                        <View style={tw`flex-row items-center mb-[16px]`}>
                            {/* 0.00 amount */}
                            <TextInput
                                placeholder="0.00"
                                keyboardType="numeric"
                                placeholderTextColor='#FFFFFF'
                                style={[tw`text-gray-100 text-[24px] w-[53px] ml-[24px]`, { fontFamily: 'Rubik_400Regular' }]}
                            />
                            {/* USD Text */}
                            <Text style={[tw`text-[#A2A1A2] text-[12px]  ml-[4px]`, { fontFamily: 'Rubik_400Regular' }]}>USD</Text>
                        </View>
                    </View>
                    {/* Portcard Image */}
                    <View style={tw`mr-[24px]`}>
                        <Image
                            source={{ uri: 'https://i.ibb.co/mh4B58v/Crypto-2.png' }}
                            style={tw`w-[38px] h-[38px] rounded-[8px]`} />
                    </View>
                </View>
            </View>
            {/* Transfer Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate('TransferredSuccessfully')}
                style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
                <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Transfer</Text>
            </TouchableOpacity>
        </MainContainer>
    )
}