import React, { useState } from 'react';
import tw from 'twrnc';
import MainContainer from '../../components/Containers/MainContainer';
import { StatusBar } from 'expo-status-bar';
import { View, Alert, Text, TouchableOpacity, } from 'react-native';
import { Image } from '@rneui/themed';
import { RootStackScreenProps } from '../../types';
import LoginTextInput from '../../components/Inputs/LoginTextInput';
import PressableText from '../../components/Buttons/PressableText';
import RowContainer from '../../components/Containers/RowContainer';
// Import firebase config
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  // Email state
  const [email, setEmail] = useState('');
  // Password State
  const [password, setPassword] = useState('');
  // Initialize Firebase Config
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // User Login Authentication
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        Alert.alert('User signed in!');
        const user = userCredentials.user;
        console.log(user);
        navigation.navigate('SetUpYourWallet');
      })
      // catch error
      .catch((error) => Alert.alert(error.message))
  }


  // Login Screen Renders
  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      <View style={tw`relative items-center mt-[48px] mb-15`}>
        <Image
          source={{ uri: "https://i.ibb.co/s2q9jQg/Logo.png" }}
          containerStyle={tw`w-25 h-7`} />
      </View>
      {/* Enter your account... */}
      <Text style={tw`text-xl text-center text-gray-100 mb-10`}>Enter your account credentials</Text>
      {/* Email Address Text Input */}
      <LoginTextInput
        label="Email Address"
        icon="mail"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email Address"
        keyboardType="email-address"
        style={{ marginBottom: 5.0, }}
      />
      {/* Password Text Input */}
      <LoginTextInput
        label="Password"
        icon="lock"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        isPassword={true}
        style={{ marginBottom: 5.0 }}
      />
      {/* Handle Sign In Button */}
      <TouchableOpacity
        onPress={handleSignIn}
        style={tw`mt-[306px] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] rounded-[8px] absolute bottom-10 bg-[#CDFB51]`}>
        <Text style={tw`text-center text-[#242326] text-[16px]`}>Login</Text>
      </TouchableOpacity>
      {/* New account sign up */}
      <RowContainer style={tw`mt-2 absolute bottom-1`}>
        <PressableText onPress={() => navigation.navigate('SignUp')} style={{}}>New account sign up</PressableText>
      </RowContainer>
    </MainContainer>
  );
}

