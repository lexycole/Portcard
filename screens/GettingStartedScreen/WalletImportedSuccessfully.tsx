import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Image } from '@rneui/themed';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { RootStackScreenProps } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function WalletImportedSuccessfully({ navigation }: RootStackScreenProps<'WalletImportedSuccessfully'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Wallet Imported Successfully
  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Navigate back Icon */}
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw`w-full h-24 left-[16px] top-[52px] mb-[44px]`}>
        <AntDesign name='arrowleft' size={35} color='#ffffff' />
      </TouchableOpacity>
      {/* Wallet Imported successfully Image */}
      <View style={tw`items-center`}>
        <Image
          source={{ uri: 'https://i.ibb.co/hRY1qhR/Group-5.png' }}
          style={tw`w-[330px] h-[330px]`} />
      </View>
      {/* Wallet Imported Text */}
      <Text style={[tw`text-[32px] text-gray-100 mt-[36px] mb-[8px] pl-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Wallet Imported successfully.</Text>
      {/* You can now go to your dashboard to see the amazing... */}
      <Text style={[tw`text-[16px] text-gray-400 mb-[216px] pl-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>You can now go to your dashboard to see the amazing features you have access to on your Portcard</Text>
      {/* Go to dashboard CALL TO ACTION BUTTON */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={tw`bg-[#CDFB51] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] absolute bottom-10 left-[10px] rounded-[16px] flex-row`}>
        <Text style={[tw`flex-1 text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Go to dashboard</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}