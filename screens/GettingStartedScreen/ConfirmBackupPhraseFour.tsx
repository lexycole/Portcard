import React from 'react';
import tw from 'twrnc';
import { TouchableOpacity, Text, View } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function ConfirmBackupPhraseFour({ navigation }: RootStackScreenProps<'ConfirmBackupPhraseFour'>) {
    // Decalre Fonts Loaded
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
    });
    // Fonts Loaded
    if (!fontsLoaded) {
        return null;
    }

    return (
        // Main Container
        <MainContainer style={{ backgroundColor: "#242326" }}>
            {/* Navigate Back Icon */}
            <TouchableOpacity
                onPress={navigation.goBack}
                style={tw`w-full h-24 left-[16px] top-[52px] mb-[44px]`}>
                <AntDesign name='arrowleft' size={35} color='#ffffff' />
            </TouchableOpacity>
            {/* Confirm Backup phrase */}
            <Text style={[tw`text-gray-100 text-[32px] mb-[8px] pl-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Confirm Backup phrase</Text>
            {/* Arrange p hrase in their correct order... */}
            <Text style={[tw`text-[#A2A1A2] text-[16px] mb-[32px] pl-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Arrange phrase in their correct order. this is to ensure your have wallet recovery phrase safe and secure.</Text>
            {/* Backup phrase View */}
            <View style={tw`h-[130px] mb-[36px] border border-dashed border-2 border-lime-900 rounded-[8px] bg-[#242326] mx-[16px]`}>
            </View>
            {/* Confirm Backup Phrase BOX */}
            <View style={tw`mx-[16px] rounded-xl bg-[#2F2E32]`}>
                {/* Cold - Indoor - Activity ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[24px] mx-[16px] pt-[32px]`}>
                    <View style={tw`flex-row items-center bg-[#2F2E32] `}>
                        {/* 1 text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>1.</Text>
                        {/* Cold text*/}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Cold</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#2F2E32] `}>
                        {/* 2. Text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>2.</Text>
                        {/* Indoor Text */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Indoor</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 3 text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>3.</Text>
                        {/* Activity text */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Activity</Text>
                    </View>
                </View>
                {/* Grapbes - Discord - Family ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[24px] mx-[16px]`}>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 4 Text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>4.</Text>
                        {/* Grapes Text */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Grapbes</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 5 text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>5.</Text>
                        {/* Discord text */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Discord</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 6 text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>6.</Text>
                        {/* Family text */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Family</Text>
                    </View>
                </View>
                {/* Mobile - Secure - Social ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[24px] mx-[16px]`}>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 7 text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>7.</Text>
                        {/* Mobile */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Mobile</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 8 Text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>8.</Text>
                        {/* Secure text */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Secure</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 9 text */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>9.</Text>
                        {/* Social text */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Social</Text>
                    </View>
                </View>
                {/* Market - Save - Trophy ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[35px] mx-[16px]`}>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 10 TEXT */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>10.</Text>
                        {/* Market TEXT */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Market</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/*  11 TEXT */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>11.</Text>
                        {/* Save TEXT */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Save</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 12 TEXT */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>12.</Text>
                        {/* TROPHY TEXT */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Trophy</Text>
                    </View>
                </View>
            </View>
            {/* Incorrect backup phrase */}
            <Text style={[tw`text-[#FF0000] text-[8px] text-center`, { fontFamily: 'Rubik_400Regular' }]}>Incorrect backup phrase</Text>
            {/* Try Again */}
            <Text style={[tw`text-[#CDFB51] text-[14px] text-center`, { fontFamily: 'Rubik_400Regular' }]}>Try Again</Text>
            {/* Continue Call To Action */}
            <TouchableOpacity
                onPress={() => navigation.navigate("WalletPassword")}
                style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
                <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Continue</Text>
            </TouchableOpacity>
        </MainContainer>
    );
}