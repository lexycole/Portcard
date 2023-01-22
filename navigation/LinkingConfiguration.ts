/**
 * Deep linking with React Navigation
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      // Onboarding
      Onboarding:'onboarding',
      // SignUp
      SignUp: 'sign-up',
      // Login
      Login: 'login',
      // Root
      Root: {
        screens: {
          // Home
          Home: {
            screens: {
              Home: 'home',
            },
          },
          // Assets
          Assets: {
            screens: {
              SupportedAssets: 'assets',
            },
          },
          // Cards
          Cards: {
            screens: {
              CreateCard: 'create-cards',
            },
          },
          // Settings
          Settings: {
            screens: {
              Settings: 'settings',
            },
          },
        },
      },
      
      // Getting started
      SetUpYourWallet: 'set-up-your-wallet',
      BackupPhraseNewWallet: 'backup-phrase-new-wallet',
      ConfirmBackupPhrase: 'confirm-backup-phrase',
      ConfirmBackupPhraseTwo: 'confirm-backup-phrase-two',
      ConfirmBackupPhraseThree: 'confirm-backup-phrase-three',
      ConfirmBackupPhraseFour: 'confirm-backup-phrase-four',
      ImportYourWallet: 'import-your-wallet',
      WalletPassword: 'wallet-password',
      WalletCreatedSuccessfully: 'wallet-created-successfully',
      WalletImportedSuccessfully: 'wallet-imported-successfully',

      // Dashbaord
      Home: 'home',
      TransactionHistory: 'transaction-history',
      SpendingHistory:  'spending-history',
      FundWallet: 'fund-wallet',
      CryptoAsset: 'crypto-asset',
      Withdraw: 'withdraw',
      WithdrawUSDT: 'withdraw-usdt',
      ProcessingWithdraw: 'processing-withdraw',

      // Assets
      Assets: 'assets',
      AssetsDetails: 'assets-details',
      WithdrawAssetsUSDT: 'withdraw-assets-usdt',
      ProcessingAssetsWithdrawal: 'processing-assets-withdrawal',
      Transfer: 'transfer',
      TransferredSuccessfully: 'transferred-successfully',

      // Cards
      Cards: 'cards',
      VirtualCard: 'virtual-card',
      FundCard: 'fund-card',
      FundedSuccessful: 'funded-successful',
      AddNewCard: 'add-new-card',
      CardNavigation: 'card-account',
      BlockCard: 'block-card',
      CardTransactions: 'card-transactions',
      TransactionLimit: 'transaction-limit',
      CardSecurity: 'card-security',

      // Settings
      Settings: 'settings',
      Notifications: 'notifications',
      AccountInformationOrKYC: 'account-information-or-kyc',
      HelpOrSupport: 'help-or-support',
      Appearance: 'appearance',
      SecuritySettings: 'security-settings',
      Referral: 'referral',
      PrivacyPolicyOrTermsOfService: 'privacy-policy-or-terms-of-service',
      IdentityCard: 'identity-card',
      IdentityCardUploaded: 'identity-card-uploaded',
      ProofOfAddress: 'proof-of-address',
      RetakeSelfie: 'retake-self',
      SelfieUploaded: 'selfie-uploaded',
      TakeASelfie: 'take-a-selfie',
    },
  },
};

export default linking;
