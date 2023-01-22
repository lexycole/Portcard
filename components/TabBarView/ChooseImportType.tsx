import * as React from 'react';
import { Animated, View, Text, StyleSheet, I18nManager, useWindowDimensions,TextInput } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import tw from 'twrnc';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


// Route Types
type Route = {
  key: string;
  title: string;
};

// State Type
type State = NavigationState<Route>;

// Backup Phrase Route
const BackupPhraseRoute = () => (
    <View style={tw`pt-[16px] rounded-[12px]`}>
      {/* Text Input Type / Paste your backup phrase here */}
      <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Type / Paste your backup phrase here"
          placeholderTextColor="#A2A1A2"
          style={styles.backupphraseStyle}
      />
      {/* Enter your password */}
      <TextInput
          multiline={true}
          placeholder="Enter your password"
          placeholderTextColor="#A2A1A2"
          style={styles.passwordStyle}
      />
  </View>
);

const PrivateKeyRoute = () => (
   <View style={tw`pt-3 rounded-[12px]`}>
    {/* Enter Private Key */}
        <TextInput
            placeholder="Private Key"
            placeholderTextColor="#A2A1A2"
            style={styles.privatekeyStyle}
        />
  </View>
);


const ChooseImportType = () => {
  // Index state
  const [index, onIndexChange] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    {
      key: 'backupPhrase', // Backup Phrase key
      title: 'Backup Phrase', //Backup Phrase Title
    },
    {
      key: 'privateKey', // Private Key
      title: 'Private Key', // Private Key Title
    }
  ]);
// Render Indicator
  const renderIndicator = (
    // Scene Renderer Properties
    props: SceneRendererProps & {
      navigationState: State;
      getTabWidth: (i: number) => number;
    }
  ) => {
    const { position, navigationState, getTabWidth } = props;
    const inputRange = [
      0, 0.48, 0.49, 0.51, 0.52, 1, 1.48, 1.49, 1.51, 1.52, 2,
    ];
    // Chosse Import Type scale position
    const scale = position.interpolate({
      inputRange,
      outputRange: inputRange.map((x) => (Math.trunc(x) === x ? 2 : 0.1)),
    });
    // Chosse Import Opacity
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

    return (
// Animated View
      <Animated.View
        style={[
          styles.container,
          {
            width: `${100 / navigationState.routes.length}%`,
            transform: [{ translateX }] as any,
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
    // Tab Bar
    <TabBar
      {...props}
      renderIndicator={renderIndicator}
      labelStyle={styles.label}
      style={styles.tabbar}
    />
  );
// Render Scene
  const renderScene = SceneMap({
    backupPhrase: BackupPhraseRoute,
    privateKey: PrivateKeyRoute,
  });

   // Decalre Fonts Loaded
  const [ fontsLoaded ] = useFonts({
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  return (
    // Tab View
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

ChooseImportType.title = 'Custom indicator'; // Choose Import Type title
ChooseImportType.backgroundColor = '#263238'; // Choose Import Type backgroundColor
ChooseImportType.appbarElevation = 4; // Choose Import Type app bar Elevation

export default ChooseImportType;


const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#242326',
    overflow: 'hidden',
    borderRadius: 20,
    height: 70,
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
    color: '#fff',
    fontSize: 16,
    textTransform: 'capitalize',
    marginVertical: 10,
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
  // tabbar: {
  //   backgroundColor: '#242326',
  //   overflow: 'hidden',
  // },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // indicator: {
  //   backgroundColor: '#CDFB51',
  //   width: 85,
  //   height: 18,
  //   borderRadius: 5,
  // },
  // label: {
  //   fontWeight: '500',
  //   color: '#fff',
  //   fontSize: 14,
  //   textTransform: 'capitalize',
  // },
  // backupphraseStyle: {
  //   backgroundColor: '#242326',
  //   height: 160,
  //   borderRadius: 12,
  //   borderColor:'#A2A1A2',
  //   padding:15,
  //   marginBottom:10,
  //   fontSize:16,
  //   color:' #00000024',
  // },
  // passwordStyle: {
  //   backgroundColor: '#242326',
  //   height: 60,
  //   borderRadius: 12,
  //   borderColor:'#A2A1A2',
  //   fontSize:16,
  //   padding:15,
  //   color:' #00000024',
  // },
  // privatekeyStyle: {
  //   backgroundColor: '#242326',
  //   height: 60,
  //   borderRadius: 12,
  //   borderColor:'#A2A1A2',
  //   padding:15,
  //   fontSize: 16,
  //   color:' #00000024',
  // },
});
