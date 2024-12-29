import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppProvider from './src/navigation/AppProvider'

import AppLayout from './src/navigation/AppLayout'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CustomStatusBar from './src/common/CustomStatusBar'


const App = () => {
  return (
    <SafeAreaProvider>
    <AppProvider>
     <CustomStatusBar/>
      <AppLayout />
    </AppProvider>
  </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})