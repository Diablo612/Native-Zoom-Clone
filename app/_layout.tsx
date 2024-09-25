import * as SecureStore from 'expo-secure-store'
import { Slot } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout () {
const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <RootSiblingParent>
          <GestureHandlerRootView style={{ flex: 1 }}>
         <Slot />
          </GestureHandlerRootView>
        </RootSiblingParent>
      </ClerkLoaded>
    </ClerkProvider>
  )
}