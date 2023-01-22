import React from 'react';
import tw from 'twrnc';
import { TouchableOpacity, Text, View } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function ConfirmBackupPhraseTwo({ navigation }: RootStackScreenProps<'ConfirmBackupPhraseTwo'>) {
    // Decalre Fonts Loaded
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
    });
    // Fonts Loaded
    if (!fontsLoaded) {
        return null;
    }


    // Confirm Backup Phrase Two
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
            {/* Arrange phrase in their correct order... */}
            <Text style={[tw`text-[#A2A1A2] text-[16px] mb-[32px] pl-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Arrange phrase in their correct order. this is to ensure your have wallet recovery phrase safe and secure.</Text>
            {/* Backup phrase View */}
            <View style={tw`mb-[36px] border border-dashed border-2 border-lime-900 rounded-[8px] bg-[#242326] mx-[16px]`}>
                {/* Secure Discord  ROW*/}
                <View style={tw`flex-row items-center justify-between bg-[#242326] mt-[25px] mb-[24px] pl-[34px] pr-[35px]`}>
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                    </View>
                    {/* Secure text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Secure</Text>
                    </View>
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                    </View>
                    {/* Discord Text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Discord</Text>
                    </View>
                </View>
                {/* Grapes -  Trophy - Social - Save ROW*/}
                <View style={tw`flex-row items-center justify-between bg-[#242326] mb-[24px] pl-[34px] pr-[35px]`}>
                    {/* Grapes Text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Grapes</Text>
                    </View>
                    {/* Trophy Text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Trophy</Text>
                    </View>
                    {/* Social Text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Social</Text>
                    </View>
                    {/* Save Text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Save</Text>
                    </View>
                </View>
                {/* Indoor - Secure - Market -Family ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#242326] mb-[24px] pl-[34px] pr-[35px]`}>
                    {/* Indoor Text */}
                    <View style={tw`flex-row items-center`}>
                    </View>
                    {/* Secure Text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Secure</Text>
                    </View>
                    {/* Market Text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Market</Text>
                    </View>
                    {/* Family Text */}
                    <View style={tw`flex-row items-center bg-[#242326]`}>
                        <Text style={[tw`text-[#A2A1A2] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Family</Text>
                    </View>
                </View>
            </View>

            {/* 1.Cold - 2.Indoor - 3.Activity ROW */}
            <View style={tw`mx-[16px] rounded-[8px] bg-[#2F2E32]`}>
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[12px] pt-[25px] px-[34px]`}>
                    {/* 1. COLD */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 1 TEXT */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>1.</Text>
                        {/* Cold TEXT */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Cold</Text>
                    </View>
                    {/* 2. INDOOR */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 2 TEXT */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>2.</Text>
                        {/* INDOOR TEXT */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Indoor</Text>
                    </View>
                    {/* 3. ACTIVITY */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        {/* 3 TEXT */}
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>3.</Text>
                        {/* ACTIVITY TEXT */}
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Activity</Text>
                    </View>
                </View>

                {/*  4 - 5 -6 ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[12px] px-[34px]`}>
                    {/* 4 TEXT */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>4.</Text>
                    </View>
                    {/* 5 TEXT */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>5.</Text>
                    </View>
                    {/* 6 TEXT  */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>6.</Text>
                    </View>
                </View>
                {/* 7 -8 - 9 ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[12px] px-[34px]`}>
                    {/* 7 TEXT */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>7.</Text>
                    </View>
                    {/* 8 TEXT */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>8.</Text>
                    </View>
                    {/* 9 TEXT */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>9.</Text>
                    </View>
                </View>
                {/* 10 - 11 - 12 ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[12px] px-[34px]`}>
                    {/* 10 TEXT */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>10.</Text>
                    </View>
                    {/* 11 TEXT */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>11.</Text>
                    </View>
                    {/* 12 TEXT */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>12.</Text>
                    </View>
                </View>
            </View>
            {/* Continue Call To Action */}
            <TouchableOpacity
                onPress={() => navigation.navigate("ConfirmBackupPhraseThree")}
                style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
                <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Continue</Text>
            </TouchableOpacity>
        </MainContainer>
    );
}