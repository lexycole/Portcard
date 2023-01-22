/**
 *  RetakeSelfie.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import React, { useState, useEffect, useRef } from 'react';
import tw from 'twrnc';
import { RootStackScreenProps } from '../../types';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Image } from '@rneui/themed';


export default function RetakeSelfie({ navigation }: RootStackScreenProps<'RetakeSelfie'>) {
  // Camera State
  const [hasCameraPermission, setHasCameraPermission] = useState(true);
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null);
  const [flash, setFlash] = useState(FlashMode.off);
  const cameraRef = useRef<Camera | any>();


  // Media Library
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })()
  }, []);


  // Take Picture
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync(null);
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };


  // Save Image
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert('Picture save! ')
        setImage(null);
      } catch (e) {
        console.log(e)
      }
    }
  }

  // Has Camera Permission
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }

  // Retake Selfie Renders
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#242326" }}>
      {/* Status Bar */}
      <StatusBar style="auto" />
      {/* Screen Header */}
      <View style={tw`flex-row justify-between items-center`}>
        {/* Navigate Back */}
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`w-full h-24 top-[48px] left-[16px]`}>
            <AntDesign name='arrowleft' size={35} color='#ffffff' />
          </TouchableOpacity>
        </View>
        {/* Screen Title */}
        <Text style={[tw`text-gray-100 mt-[48px]`, { fontSize: 24, fontFamily: 'Rubik_400Regular' }]}>
          Take a Selfie
        </Text>
        <View style={tw`justify-end`}></View>
      </View>
      {/* Camera container */}
      <View style={tw`flex-1 bg-[#000000] justify-center pb-[20px]`}>
        {!image ?
          <Camera
            style={[tw`flex-1 border`, { borderRadius: 20 }]}
            type={type}
            flashMode={flash}
            ref={cameraRef}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, }}>
              {/* Retake at the top */}
              <TouchableOpacity
                onPress={() => {
                  setType(type === CameraType.back ? CameraType.front : CameraType.back)
                }}
                style={tw`h-[40px] flex-row items-center justify-center`}>
                <Entypo name={'retweet'} size={28} color={'#f1f1f1'} />
                <Text style={tw`font-bold text-[16px] text-[#f1f1f1] ml-[10px]`}>Re-Take</Text>
              </TouchableOpacity>

              {/* Flash Button */}
              <TouchableOpacity
                onPress={() => {
                  setFlash(
                    flash === FlashMode.off
                      ? FlashMode.on
                      : FlashMode.off
                  )
                }}
                style={tw` h-[40px] flex-row items-center justify-center`}>
                <MaterialCommunityIcons
                  name='flash'
                  size={28}
                  color={
                    flash === FlashMode.off ? 'gray' : '#f1f1f1'
                  } />
                <Text style={tw`font-bold text-[16px] text-[#f1f1f1] ml-[10px]`}>Re-Take</Text>
              </TouchableOpacity>
            </View>
          </Camera>
          :
          <Image source={{ uri: image }} style={tw`flex-1 border rounded-[20px],`} />
        }

        {/* Camera Buttons Container */}
        <View>
          {image ?
            <View style={tw`flex-row items-center justify-between px-[50px]`}>
              {/* 01. Re-take Button */}
              <TouchableOpacity
                onPress={() => setImage(null)}
                style={tw`h-[40px] flex-row items-center justify-center`}>
                <Entypo name={'retweet'} size={28} color={'#f1f1f1'} />
                <Text style={tw`font-bold text-[16px] text-[#f1f1f1] ml-[10px]`}>Re-Take</Text>
              </TouchableOpacity>
              {/* 02. Save Button*/}
              <TouchableOpacity
                onPress={saveImage}
                style={tw`h-[40px] flex-row items-center justify-center`}>
                <Entypo name={'check'} size={28} color={'#f1f1f1'} />
                <Text style={tw`font-bold text-[16px] text-[#f1f1f1] ml-[10px]`}>Save</Text>
              </TouchableOpacity>
            </View>
            :
            // Take A Picture Button
            <TouchableOpacity
              onPress={takePicture}
              style={tw`h-[40px] flex-row items-center justify-center`}>
              <Entypo name={'camera'} size={28} color={'#f1f1f1'} />
              <Text style={tw`font-bold text-[16px] text-[#f1f1f1] ml-[10px]`}>Take a Picture</Text>
            </TouchableOpacity>
          }
        </View>
      </View>

    </SafeAreaView>
  );
}