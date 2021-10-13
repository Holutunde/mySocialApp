import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>{windowHeight / 15}</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})
