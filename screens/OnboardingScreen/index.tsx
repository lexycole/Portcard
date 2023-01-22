import { View, Text, TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import { RootStackScreenProps } from '../../types';
import tw from 'twrnc';
import { Image } from '@rneui/themed';
import { StatusBar } from "expo-status-bar";
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Onboarding Screen Renders
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Swiper
        style={styles.wrapper}
        dot={<View style={styles.dotStyle} />}
        activeDot={<View style={styles.activeDotStyle} />}
        paginationStyle={{
          bottom: 24
        }}
        loop={true}
        autoplay={false}
        showsPagination={true}
        removeClippedSubviews={false}>

        <View style={styles.slide1}>
          {/* <View style={styles.logoView}> */}
          <View style={tw`items-center`}>
            <Image
              source={{ uri: 'https://i.ibb.co/GkFvHv9/Card.png' }}
              // style={styles.logo}
              resizeMode="contain"
              containerStyle={tw`w-[420px] h-[500px]`} />
            {/* containerStyle={tw`w-[428px] h-[543px]`} /> */}
          </View>
          {/* Next Generation... */}
          <Text style={[tw`mt-[15px] mb-[4px] px-[16px] text-[32px] text-gray-100`, { fontFamily: 'Rubik_400Regular' }]}>Next Generation <Text style={tw`text-[#CDFB51]`}>Crypto</Text> Wallet</Text>
          {/* All-in-one Digital...  */}
          <Text style={[tw`mb-[91px] px-[16px] text-[16px] text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>All-in-one Digital wallet system for your boarderless payment with low transaction fees.</Text>
        </View>

        {/* 02. Carousel TWO */}
        <View style={styles.slide2}>
          <View style={tw`items-center`}>
            <Image
              source={{ uri: 'https://i.ibb.co/4VB36cn/Card-02.png' }}
              resizeMode="contain"
              containerStyle={tw`w-[428px] h-[490px]`} />
          </View>
          {/* Take control of your Financial Payment with */}
          <Text style={[tw`mb-[8px] px-[16px] text-[32px] text-gray-100`, { fontFamily: 'Rubik_400Regular' }]}>Take control of your Financial Payment with <Text style={tw`text-[#CDFB51]`}>one Card</Text></Text>
          {/* All-in-one Digital wallet system for your boarderless payment with low transaction fees. */}
          <Text style={[tw`mb-[54px] px-[16px] text-[16px] text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>All-in-one Digital wallet system for your boarderless payment with low transaction fees.</Text>
        </View>

        {/* 03. Carousel Three */}
        <View style={styles.slide3}>
          <View style={tw`items-center`}>
            <Image
              source={{ uri: 'https://i.ibb.co/sHfSr3D/Card-03.png' }}
              resizeMode="contain"
              containerStyle={tw`w-[428px] h-[500px]`} />
          </View>
          {/* Make Payment, Send & Receive Crypto Instantly. */}
          <Text style={[tw` mb-[4px] px-[16px] text-[32px] text-gray-100`, { fontFamily: 'Rubik_400Regular' }]}>Make Payment, Send & Receive Crypto Instantly.</Text>
          {/* Instantly send and receieve payment with low transaction fee. Fast, Safe and Secure */}
          <Text style={[tw`mb-[91px] px-[16px] text-[16px] text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>Instantly send and receieve payment with low transaction fee. Fast, Safe and Secure.</Text>
        </View>

        <View style={styles.slide4}>
          <View style={tw`items-center mt-[48px]`}>
            <Image
              source={{ uri: "https://i.ibb.co/s2q9jQg/Logo.png" }}
              containerStyle={tw`w-[102px] h-[32px]`} />
            <Image
              source={{ uri: 'https://i.ibb.co/j8gwtNs/Card-04.png' }}
              // style={styles.logo}
              resizeMode="contain"
              containerStyle={tw`w-[428px] h-[400px]`} />
          </View>
          <Text style={[tw`mt-[21px] mb-[4px] px-[16px] text-[32px] text-gray-100`, { fontFamily: 'Rubik_400Regular' }]}>Topup & Swap your Tokens</Text>
          <Text style={[tw`px-[16px] text-[16px] text-[#A2A1A2]`, { fontFamily: 'Rubik_400Regular' }]}>Never run out of Cash. Swap between your prefered currencies for your card payment and ATM withdrawals at any time.</Text>
        </View>
      </Swiper>

      {/* Get Started Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("SetUpYourWallet")}
        style={tw`pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] mx-[16px] mb-[48px] mt-[24px] rounded-[16px] bg-[#CDFB51]`}>
        <Text style={[tw`text-center text-[#242326] text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

