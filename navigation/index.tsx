/**
 *  Portcard React-Native Navigations
 * 
 *  index.tsx
 * 
 * Created By Portcard Team 2022/2023
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Image } from 'react-native';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CryptoAsset from '../screens/HomeScreen/CryptoAsset';
import SetUpYourWallet from '../screens/GettingStartedScreen/SetUpYourWallet';
import TransactionHistory from '../screens/HomeScreen/TransactionHistory';
import CreateCard from '../screens/CardsScreen/Cards';
import SupportedAssets from '../screens/AssetsScreen/Assets';
import Settings from '../screens/SettingsScreen/Settings';
import Notifications from '../screens/SettingsScreen/Notifications';
import BackupPhraseNewWallet from '../screens/GettingStartedScreen/BackupPhraseNewWallet';
import ConfirmBackupPhrase from '../screens/GettingStartedScreen/ConfirmBackupPhrase';
import WalletPassword from '../screens/GettingStartedScreen/WalletPassword';
import ImportYourWallet from '../screens/GettingStartedScreen/ImportYourWallet';
import WalletCreatedSuccessfully from '../screens/GettingStartedScreen/WalletCreatedSuccessfully';
import WalletImportedSuccessfully from '../screens/GettingStartedScreen/WalletImportedSuccessfully';
import SpendingHistory from '../screens/HomeScreen/SpendingHistory';
import FundWallet from '../screens/HomeScreen/FundWallet';
import Withdraw from '../screens/HomeScreen/Withdraw';
import WithdrawUSDT from '../screens/HomeScreen/WithdrawUSDT';
import ProcessingWithdraw from '../screens/HomeScreen/ProcessingWithdrawal';
import WithdrawAssetsUSDT from '../screens/AssetsScreen/WithdrawAssetsUSDT';
import ProcessingAssetsWithdrawal from '../screens/AssetsScreen/ProcessingAssetsWithdrawal';
import Transfer from '../screens/AssetsScreen/Transfer';
import TransferredSuccessfully from '../screens/AssetsScreen/TransferredSuccessfully';
import VirtualCard from '../screens/CardsScreen/VirtualCard';
import FundCard from '../screens/CardsScreen/FundCard';
import FundedSuccessful from '../screens/CardsScreen/FundedSuccessful';
import AddNewCard from '../screens/CardsScreen/AddNewCard';
import BlockCard from '../screens/CardsScreen/BlockCard';
import CardTransactions from '../screens/CardsScreen/CardTransactions';
import TransactionLimit from '../screens/CardsScreen/TransactionLimit';
import CardSecurity from '../screens/CardsScreen/CardSecurity';
import AccountInformationOrKYC from '../screens/SettingsScreen/AccountInformationOrKYC';
import HelpOrSupport from '../screens/SettingsScreen/HelpOrSupport';
import Appearance from '../screens/SettingsScreen/Appearance';
import SecuritySettings from '../screens/SettingsScreen/SecuritySettings';
import PrivacyPolicyOrTermsOfService from '../screens/SettingsScreen/PrivacyPolicyOrTermsOfService';
import IdentityCard from '../screens/SettingsScreen/IdentityCard';
import IdentityCardUploaded from '../screens/SettingsScreen/IdentityCardUploaded';
import ProofOfAddress from '../screens/SettingsScreen/ProofOfAddress';
import RetakeSelfie from '../screens/SettingsScreen/RetakeSelfie';
import SelfieUploaded from '../screens/SettingsScreen/SelfieUploaded';
import TakeASelfie from '../screens/SettingsScreen/TakeASelfie';
import Referral from '../screens/SettingsScreen/Referral';
import CardNavigation from '../screens/CardsScreen/CardNavigation';
import Home from '../screens/HomeScreen/Dashboard';
import Assets from '../screens/AssetsScreen/Assets';
import Cards from '../screens/CardsScreen/Cards';
import AssetsDetails from '../screens/AssetsScreen/AssetsDetails';
import ConfirmBackupPhraseTwo from '../screens/GettingStartedScreen/ConfirmBackupPhraseTwo';
import ConfirmBackupPhraseThree from '../screens/GettingStartedScreen/ConfirmBackupPhraseThree';
import ConfirmBackupPhraseFour from '../screens/GettingStartedScreen/ConfirmBackupPhraseFour';


export default function Navigation() {
  // Navigation Render
  return (
    // Navigation Container
    <NavigationContainer linking={LinkingConfiguration}>
      {/* Root Navigator */}
      <RootNavigator />
    </NavigationContainer>
  );
}

//  * A root stack navigator is often used for displaying modals on top of all other content.
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  // Root Navigator Renders
  return (
    <Stack.Navigator>
      {/* 01. Onboarding, Sign Up and Login Stack Navigator*/}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      {/* 02. Bottom Tab Stack Navigator */}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      {/* 03.Getting Started Stack Navigator*/}
      <Stack.Screen name="SetUpYourWallet" component={SetUpYourWallet} options={{ headerShown: false }} />
      <Stack.Screen name="BackupPhraseNewWallet" component={BackupPhraseNewWallet} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmBackupPhrase" component={ConfirmBackupPhrase} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmBackupPhraseTwo" component={ConfirmBackupPhraseTwo} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmBackupPhraseThree" component={ConfirmBackupPhraseThree} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmBackupPhraseFour" component={ConfirmBackupPhraseFour} options={{ headerShown: false }} />
      <Stack.Screen name="ImportYourWallet" component={ImportYourWallet} options={{ headerShown: false }} />
      <Stack.Screen name="WalletPassword" component={WalletPassword} options={{ headerShown: false }} />
      <Stack.Screen name="WalletCreatedSuccessfully" component={WalletCreatedSuccessfully} options={{ headerShown: false }} />
      <Stack.Screen name="WalletImportedSuccessfully" component={WalletImportedSuccessfully} options={{ headerShown: false }} />
      {/* 04.Dashboard Stack Navigator */}
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} options={{ headerShown: false }} />
      <Stack.Screen name="SpendingHistory" component={SpendingHistory} options={{ headerShown: false }} />
      <Stack.Screen name="FundWallet" component={FundWallet} options={{ headerShown: false }} />
      <Stack.Screen name="CryptoAsset" component={CryptoAsset} options={{ headerShown: false }} />
      <Stack.Screen name="Withdraw" component={Withdraw} options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawUSDT" component={WithdrawUSDT} options={{ headerShown: false }} />
      <Stack.Screen name="ProcessingWithdraw" component={ProcessingWithdraw} options={{ headerShown: false }} />
      {/* 05. Assets Stack Navigator */}
      <Stack.Screen name="Assets" component={Assets} options={{ headerShown: false }} />
      <Stack.Screen name="AssetsDetails" component={AssetsDetails} options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawAssetsUSDT" component={WithdrawAssetsUSDT} options={{ headerShown: false }} />
      <Stack.Screen name="ProcessingAssetsWithdrawal" component={ProcessingAssetsWithdrawal} options={{ headerShown: false }} />
      <Stack.Screen name="Transfer" component={Transfer} options={{ headerShown: false }} />
      <Stack.Screen name="TransferredSuccessfully" component={TransferredSuccessfully} options={{ headerShown: false }} />
      {/* 06. Cards Stack Navigator*/}
      <Stack.Screen name="Cards" component={Cards} options={{ headerShown: false }} />
      <Stack.Screen name="VirtualCard" component={VirtualCard} options={{ headerShown: false }} />
      <Stack.Screen name="FundCard" component={FundCard} options={{ headerShown: false }} />
      <Stack.Screen name="FundedSuccessful" component={FundedSuccessful} options={{ headerShown: false }} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} options={{ headerShown: false }} />
      <Stack.Screen name="CardNavigation" component={CardNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="BlockCard" component={BlockCard} options={{ headerShown: false }} />
      <Stack.Screen name="CardTransactions" component={CardTransactions} options={{ headerShown: false }} />
      <Stack.Screen name="TransactionLimit" component={TransactionLimit} options={{ headerShown: false }} />
      <Stack.Screen name="CardSecurity" component={CardSecurity} options={{ headerShown: false }} />
      {/* 07. Settings Stack Navigator */}
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <Stack.Screen name="AccountInformationOrKYC" component={AccountInformationOrKYC} options={{ headerShown: false }} />
      <Stack.Screen name="HelpOrSupport" component={HelpOrSupport} options={{ headerShown: false }} />
      <Stack.Screen name="Appearance" component={Appearance} options={{ headerShown: false }} />
      <Stack.Screen name="SecuritySettings" component={SecuritySettings} options={{ headerShown: false }} />
      <Stack.Screen name="PrivacyPolicyOrTermsOfService" component={PrivacyPolicyOrTermsOfService} options={{ headerShown: false }} />
      <Stack.Screen name="IdentityCard" component={IdentityCard} options={{ headerShown: false }} />
      <Stack.Screen name="IdentityCardUploaded" component={IdentityCardUploaded} options={{ headerShown: false }} />
      <Stack.Screen name="ProofOfAddress" component={ProofOfAddress} options={{ headerShown: false }} />
      <Stack.Screen name="RetakeSelfie" component={RetakeSelfie} options={{ headerShown: false }} />
      <Stack.Screen name="SelfieUploaded" component={SelfieUploaded} options={{ headerShown: false }} />
      <Stack.Screen name="TakeASelfie" component={TakeASelfie} options={{ headerShown: false }} />
      <Stack.Screen name="Referral" component={Referral} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}

// A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  // Bottom Tab Navigator Render
  return (
    // Bottom Tab Navigator
    <BottomTab.Navigator
      // Initial Route Name
      initialRouteName="Home"
      // Screen Options
      screenOptions={{
        // TabBar Active Tint Color
        tabBarActiveTintColor: "#CDFB51",
        // Tab Bar Style
        tabBarStyle: {
          backgroundColor: "#242326",
          height: 80,
          borderTopWidth: .2
        },
        tabBarLabelStyle: {
          paddingBottom: 15,
          fontSize: 12
        }
      }}>
      {/* 01. Home Bottom Tab */}
      <BottomTab.Screen
        //  Bottom Tab Name
        name="Home"
        // Bottom Tab Component
        component={Home}
        // Bottom Tab options
        options={{
          // show header
          headerShown: false,
          // tar bar icon
          tabBarIcon: ({ focused }) => (
            // Tab Bar Image Icon
            <Image
              source={
                focused
                  ? { uri: "https://i.ibb.co/6mkFCQv/home-1.png" }
                  : { uri: "https://i.ibb.co/WpVS9dX/home.png" }
              }
              style={{
                width: 21.72,
                height: 23.92,
              }}
            />
          ),
        }}
      />
      {/* 02. Assets Bottom Tab */}
      <BottomTab.Screen
        //  Bottom Tab Name
        name="Assets"
        // Bottom Tab Component
        component={SupportedAssets}
        // Bottom Tab options
        options={{
          // show header
          headerShown: false,
          tabBarIcon: ({ focused, }) => (
            // Tab Bar Image Icon
            <Image
              source={
                focused
                  ? { uri: "https://i.ibb.co/4tSLDjQ/assets-1.png" }
                  : { uri: "https://i.ibb.co/dJyN5QJ/assets.png" }
              }
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      {/* 03. Cards Bottom Tab  */}
      <BottomTab.Screen
        //  Bottom Tab Name
        name="Cards"
        // Bottom Tab Component
        component={CreateCard}
        // Bottom Tab options
        options={{
          // show header
          headerShown: false,
          // Tab Bar Image Icon
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? { uri: "https://i.ibb.co/dDZnXpj/credit-card.png" }
                  : { uri: "https://i.ibb.co/Sy9Knh2/credit-card.png" }
              }
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      {/* 04. Settings Bottom Tab */}
      <BottomTab.Screen
        //  Bottom Tab Name
        name="Settings"
        // Bottom Tab Component
        component={Settings}
        // Bottom Tab options
        options={{
          // show header
          headerShown: false,
          // Tab Bar Image Icon
          tabBarIcon: ({ focused, }) => (
            <Image
              source={
                focused
                  ? { uri: "https://i.ibb.co/DQ81BRM/settings-1.png" }
                  : { uri: "https://i.ibb.co/Gs8BvP9/settings.png" }
              }
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}