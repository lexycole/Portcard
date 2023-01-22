import { StatusBar } from 'expo-status-bar';
import MainContainer from '../../components/Containers/MainContainer';
import React, { useState } from 'react';
import { Text, TouchableOpacity, Alert, View } from 'react-native';
import PressableText from '../../components/Buttons/PressableText';
import RowContainer from '../../components/Containers/RowContainer';
import { Image, } from '@rneui/themed';
import tw from 'twrnc';
import { RootStackScreenProps } from '../../types';
// Import firebase config
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SignUpTextInput from '../../components/Inputs/SignUpTextInput';


export default function SignUpScreen({ navigation }: RootStackScreenProps<'SignUp'>) {
  // fullname state
  const [fullname, setFullname] = useState('');
  // email state
  const [email, setEmail] = useState('');
  // password state
  const [password, setPassword] = useState('');

  // Initialize Firebase Config
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Create User account
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert('Account created!');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('SetUpYourWallet');
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      });
  }

  // SignUp Screen Renders
  return (
    // Main Container
    <MainContainer style={{ backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Image Container */}
      <View style={tw`relative items-center mt-[48px] mb-10`}>
        <Image
          source={{ uri: "https://i.ibb.co/s2q9jQg/Logo.png" }}
          containerStyle={tw`w-25 h-7`} />
      </View>
      {/* Sign up into Portcard */}
      <Text style={tw`text-xl text-center text-gray-100 mb-10`}>Sign up into Portcard</Text>
      {/* Full Name Text Input */}
      <SignUpTextInput
        label="Full Name"
        icon="user"
        value={fullname}
        onChangeText={setFullname}
        placeholder="Enter Full Name"
        keyboardType="email-address"
        style={{ marginBottom: 5.0 }}
      />
      {/* Email Address Text Input */}
      <SignUpTextInput
        label="Email Address"
        icon="mail"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email Address"
        keyboardType="email-address"
        style={{ marginBottom: 5.0 }}
      />
      {/* Password Text Input */}
      <SignUpTextInput
        label="Password"
        icon="lock"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        isPassword={true}
        style={{ marginBottom: 5 }}
      />
      {/* Handle Create Account Button */}
      <TouchableOpacity
        onPress={handleCreateAccount}
        style={tw`mt-[306px] pt-[16px] pl-[15.4px] pb-[16px] pr-[15.4px] rounded-xl relative bottom-1 bg-[#CDFB51]`}>
        <Text style={tw`text-center text-[#242326] text-[16px]`}> Sign Up</Text>
      </TouchableOpacity>
      {/* Already have an account? Login */}
      <RowContainer style={{ marginTop: 5 }}>
        <PressableText onPress={() => navigation.navigate('Login')}>Already have an account? Login</PressableText>
      </RowContainer>
    </MainContainer>
  );
}