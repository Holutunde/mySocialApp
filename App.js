import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from './screen/Onboarding'

const Stack = createNativeStackNavigator()

const App = () => {
  const [launch, setLaunch] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('launched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('launched', 'true')
        setLaunch(true)
      } else {
        setLaunch(false)
      }
    })
  }, [])

  if (launch === null) {
    return null
  } else if (launch === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return <Login />
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
