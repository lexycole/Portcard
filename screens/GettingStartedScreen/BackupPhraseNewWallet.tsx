import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function BackupPhraseNewWallet({ navigation }: RootStackScreenProps<'BackupPhraseNewWallet'>) {
    // Decalre Fonts Loaded
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
    });
    //  Load no font if no font is found
    if (!fontsLoaded) {
        return null;
    }

    //  Backup Renders
    return (
        // Main Container
        <MainContainer style={{ backgroundColor: "#242326" }}>
            {/* Navigate Go Back */}
            <TouchableOpacity
                onPress={navigation.goBack}
                style={tw`w-full h-25 left-[16px] top-[52px] mb-[44px]`}>
                <AntDesign name='arrowleft' size={35} color='#ffffff' />
            </TouchableOpacity>
            {/* Backup phrase for your new Wallet */}
            <Text style={[tw`text-gray-100 text-[32px] mb-[8px] pl-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Backup phrase for your new Wallet</Text>
            {/* Write down the  backup phrase on a piece of paper. */}
            <Text style={[tw`text-[#A2A1A2] text-[16px] mb-[85px] pl-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Write down the  backup phrase on a piece of paper.</Text>

            {/* 12 Words box */}
            <View style={tw`rounded-[8px] bg-[#2F2E32] mx-[16px]`}>
                {/* These 12 Words are the only ... */}
                <Text style={[tw`text-gray-100 text-[12px] text-center mt-[32px] mb-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>These 12 Words are the only way to recover your wallet. Save it somewhere safe and secure.</Text>
                {/* Cold - Indoor - Activity ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[24px] mx-[24px]`}>
                    {/* Cold */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>1.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Cold</Text>
                    </View>
                    {/* Indoor */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>2.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Indoor</Text>
                    </View>
                    {/* Activity */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>3.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Activity</Text>
                    </View>
                </View>
                {/* Grapes - Discord - Family ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[24px] mx-[24px]`}>
                    {/* Grapes */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>4.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Grapes</Text>
                    </View>
                    {/* Discord */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>5.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Discord</Text>
                    </View>
                    {/* Family */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>6.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Family</Text>
                    </View>
                </View>
                {/* Mobile - Secure - Social ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mb-[24px] mx-[24px]`}>
                    {/* Mobile */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>7.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Mobile</Text>
                    </View>
                    {/* Secure */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>8.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Secure</Text>
                    </View>
                    {/* Social */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>9.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Social</Text>
                    </View>
                </View>
                {/* Market - Save - Trophy ROW */}
                <View style={tw`flex-row items-center justify-between bg-[#2F2E32] mx-[24px] mb-[48px]`}>
                    {/* Market */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>10.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Market</Text>
                    </View>
                    {/* Save */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>11.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Save</Text>
                    </View>
                    {/* Trophy */}
                    <View style={tw`flex-row items-center bg-[#2F2E32]`}>
                        <Text style={[tw`text-[#CDFB51] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>12.</Text>
                        <Text style={[tw`text-[#A2A1A2] text-[16px] pl-1`, { fontFamily: 'Rubik_400Regular' }]}>Trophy</Text>
                    </View>
                </View>
            </View>
            {/* Continue CTA */}
            <TouchableOpacity
                onPress={() => navigation.navigate("ConfirmBackupPhrase")}
                style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
                <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Continue</Text>
            </TouchableOpacity>
        </MainContainer>
    );
}