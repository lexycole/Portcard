import React, { useCallback, useRef, useMemo, useState } from 'react';
import { Animated, View, StyleSheet, I18nManager, TextInput, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import tw from 'twrnc';
import { Divider, Image } from '@rneui/themed';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


// Route Types
type Route = {
  key: string;
  title: string;
};

// State Type
type State = NavigationState<Route>;

// 01. Virtual Card Route
const VirtualCardRoute = () => (
  // Virtula Portcard Card
  <View style={[tw`flex-col lg:flex-row mt-[24px] ml-[31px] mr-[30px] rounded-[20px] border-[2px]`, { borderColor: '#CDFB51' }]}>
    <View style={tw`mb-[95px]`}>
      {/* Available Balance */}
      <Text style={[tw`text-gray-100 text-[24px] ml-[24px] mt-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>$10,000</Text>
    </View>
    {/* Portcard Container */}
    <View style={tw`flex-row items-center justify-between`}>
      <View style={tw`mx-[25px] mb-[16px]`}>
        {/*  Portcard Image*/}
        <Image
          source={{ uri: "https://i.ibb.co/s2q9jQg/Logo.png" }}
          containerStyle={tw`w-[72px] h-[24px]`} />
        {/* Portcard 10 digits */}
        <Text style={[tw`text-white text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>**** 398756</Text>
      </View>
      {/* Portcard second Image */}
      <View style={tw`mr-[24px]`}>
        <Image
          source={{ uri: "https://i.ibb.co/pZHvgry/brand-1.png" }}
          containerStyle={tw`w-[48px] h-[28px] rounded-full`} />
      </View>
    </View>
  </View>
);

// 02. Physical Card Route
const PhysicalCardRoute = () => (
  // Physical Portcard Card
  <View style={[tw`flex-col lg:flex-row mt-[24px] ml-[31px] mr-[30px] rounded-[20px] border-[2px]`, { borderColor: '#CDFB51' }]}>
    <View style={tw`mb-[95px]`}>
      {/* Available Balance */}
      <Text style={[tw`text-gray-100 text-[24px] ml-[24px] mt-[24px]`, { fontFamily: 'Rubik_400Regular' }]}>$20,000</Text>
    </View>
    <View style={tw`flex-row items-center justify-between`}>
      <View style={tw`mx-[25px] mb-[16px]`}>
        {/*  Portcard Image*/}
        <Image
          source={{ uri: "https://i.ibb.co/s2q9jQg/Logo.png" }}
          containerStyle={tw`w-[72px] h-[24px]`} />
        {/* Portcard 10 digits */}
        <Text style={[tw`text-white text-[16px]`, { fontFamily: 'Rubik_400Regular' }]}>**** 398756</Text>
      </View>
      {/* Portcard second Image */}
      <View style={tw`mr-[24px]`}>
        <Image
          source={{ uri: "https://i.ibb.co/pZHvgry/brand-1.png" }}
          containerStyle={tw`w-[48px] h-[28px] rounded-full`} />
      </View>
    </View>
  </View>
);


// Card Type Function
const CardType = () => {
  const [index, onIndexChange] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    {
      key: 'virtualCard',
      title: 'Virtual Card',
    },
    {
      key: 'physicalCard',
      title: 'Physical Card',
    }
  ]);
  // Render Indicator
  const renderIndicator = (
    // Scene Properties
    props: SceneRendererProps & {
      navigationState: State;
      getTabWidth: (i: number) => number;
    }
  ) => {
    const { position, navigationState, getTabWidth } = props;
    const inputRange = [
      0, 0.48, 0.49, 0.51, 0.52, 1, 1.48, 1.49, 1.51, 1.52, 2,
    ];
    // Card scale position
    const scale = position.interpolate({
      inputRange,
      outputRange: inputRange.map((x) => (Math.trunc(x) === x ? 2 : 0.1)),
    });
    // Card Opacity
    const opacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map((x) => {
        const d = x - Math.trunc(x);
        return d === 0.49 || d === 0.51 ? 0 : 1;
      }),
    });
    // Horizontal Translator
    const translateX = position.interpolate({
      inputRange: inputRange,
      outputRange: inputRange.map((x) => {
        const i = Math.round(x);
        return i * getTabWidth(i) * (I18nManager.isRTL ? -1 : 1);
      }),
    });
    // Animated View
    return (
      <Animated.View
        style={[
          styles.container,
          {
            width: `${100 / navigationState.routes.length}%`,
            transform: [{ translateX }] as any
          },
        ]}
      >
        <Animated.View
          style={[styles.indicator, { opacity, transform: [{ scale }] } as any]}
        />
      </Animated.View>
    );
  };
  // Render Tab Bar
  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      renderIndicator={renderIndicator}
      labelStyle={styles.label}
      style={styles.tabbar}
    />
  );
  // Render Scene
  const renderScene = SceneMap({
    virtualCard: VirtualCardRoute,
    physicalCard: PhysicalCardRoute,
  });

  // Decalre Fonts Loaded
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  return (
    // Tab View Component
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      tabBarPosition="top"
      onIndexChange={onIndexChange}
    />
  );
};

CardType.title = 'Custom indicator'; // Card title
CardType.backgroundColor = '#263238';// Card background Color 
CardType.appbarElevation = 4; //App Bar Elevation

export default CardType;


const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#2F2E32',
    overflow: 'hidden',
    borderRadius: 10,
    marginHorizontal: 32,
    height: 64,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#CDFB51',
    width: 75,
    height: 27,
    borderRadius: 10,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    textTransform: 'capitalize',
    marginVertical: 10,
    fontFamily: 'Rubik_400Regular',
  },
  backupphraseStyle: {
    backgroundColor: '#242326',
    height: 160,
    borderRadius: 12,
    borderColor:'#A2A1A2',
    paddingLeft:10,
    marginBottom:8,
    fontSize: 12,
    color:' #00000024',
    fontFamily:'Rubik_400Regular'
  },
  passwordStyle: {
    backgroundColor: '#242326', 
    height: 60,
    borderRadius: 12,
    borderColor:'#A2A1A2',
    fontSize:12,
    padding:15,
    marginBottom: 32,
    color:' #00000024',
    fontFamily:'Rubik_400Regular'
  },
  privatekeyStyle: {
    backgroundColor: '#242326',
    height: 60,
    borderRadius: 12,
    borderColor:'#A2A1A2',
    padding:15,
    fontSize: 12,
    color:' #00000024',
    fontFamily:'Rubik_400Regular'
  },
});
