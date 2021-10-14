import React from 'react'
import Providers from './navigation'
import { useFonts } from 'expo-font'

const App = () => {
  let [fontLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Bolditalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  })

  if (!fontLoaded) {
    return null
  }

  return <Providers />
}

export default App
