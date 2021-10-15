import 'dotenv/config'

export default {
  expo: {
    name: 'mySocialApp',
    slug: 'mySocialApp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.socialapp',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.socialapp',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      apiKey: 'AIzaSyCkFD1eDdaB-xBolWgzcERpnMZ_kTzq6Ws',
      authDomain: 'social-app-81e09.firebaseapp.com',
      projectId: 'social-app-81e09',
      storageBucket: 'social-app-81e09.appspot.com',
      messagingSenderId: '174433289250',
      appId: '1:174433289250:web:f9f0b98de03238d2ba367b',
    },
  },
}
