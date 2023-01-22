/**
 *  SpendingHistory.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import tw from 'twrnc';
import SpendingHistoryFlatlist from '../../components/Flatlist/SpendingHistoryFlatlist';
import { RootStackScreenProps } from '../../types';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function SpendingHistory({ navigation }: RootStackScreenProps<'SpendingHistory'>) {
    // Decalre Fonts Loaded
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
    });
    //  Load no font if no font is found
    if (!fontsLoaded) {
        return null;
    }

    // Spending History Renders
    return (
        <SafeAreaView style={tw`bg-[#242326]`}>
            {/* Status Bar */}
            <StatusBar style="auto" />
            {/* Header Container */}
            <View style={tw`flex-row justify-between items-center pt-[48px]`}>
                {/* Back Button */}
                <View style={tw`ml-[16px]`}>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        style={tw`w-full h-25 top-8`}>
                        <AntDesign name='arrowleft' size={35} color='#ffffff' />
                    </TouchableOpacity>
                </View>
                {/* Screen Title */}
                <Text style={[tw`text-gray-100`, { fontSize: 16, fontFamily: 'Rubik_400Regular' }]}>
                    Spending History
                </Text>
                {/* Filter */}
                <Text style={[tw`text-gray-400 mr-[30px]`, { fontSize: 12, color: "#CDFB51" }]}>
                    Filter
                </Text>
            </View>
            {/* Spending History Flatlist Container */}
            <View style={tw`mb-[503px]`}>
                <SpendingHistoryFlatlist />
            </View>
        </SafeAreaView>
    )
}
