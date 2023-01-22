/**
 * Using TypeScript with React Navigation
 */
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  // 01. Splash Screen & Onboarding
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
  // 02. Root Tab Screens
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  // 03. Getting Started (Create/Import Screens)
  SetUpYourWallet: undefined;
  BackupPhraseNewWallet: undefined;
  ConfirmBackupPhrase: undefined;
  ConfirmBackupPhraseTwo: undefined;
  ConfirmBackupPhraseThree: undefined;
  ConfirmBackupPhraseFour: undefined;
  ImportYourWallet: undefined;
  WalletPassword: undefined;
  WalletCreatedSuccessfully: undefined;
  WalletImportedSuccessfully: undefined;
  // 04. Dashboard
  Home: undefined;
  TransactionHistory: undefined;
  SpendingHistory: undefined;
  FundWallet: undefined;
  CryptoAsset: undefined;
  Withdraw: undefined;
  WithdrawUSDT: undefined;
  ProcessingWithdraw: undefined;
  // 05. Assets 
  Assets: undefined;
  AssetsDetails: undefined;
  DepositUSDT: undefined;
  WithdrawAssetsUSDT: undefined;
  ProcessingAssetsWithdrawal: undefined;
  Transfer: undefined;
  TransferredSuccessfully: undefined;
  // 06. Card
  Cards: undefined;
  VirtualCard: undefined;
  FundCard: undefined;
  FundedSuccessful: undefined;
  AddNewCard: undefined;
  CardNavigation: undefined;
  BlockCard: undefined;
  CardTransactions: undefined;
  TransactionLimit: undefined;
  CardSecurity: undefined;
  // 07. Settings
  Settings: undefined;
  Notifications: undefined;
  AccountInformationOrKYC: undefined;
  HelpOrSupport: undefined;
  Appearance: undefined;
  SecuritySettings: undefined;
  Referral: undefined;
  PrivacyPolicyOrTermsOfService: undefined;
  IdentityCard: undefined;
  IdentityCardUploaded: undefined;
  NationalIdentityCard: undefined;
  Passport: undefined;
  ProofOfAddress: undefined;
  RetakeSelfie: undefined;
  SelfieUploaded: undefined;
  TakeASelfie: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Assets: undefined;
  Cards: undefined;
  Settings: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
