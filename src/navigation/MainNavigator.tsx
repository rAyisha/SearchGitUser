import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../module/HomeScreen'


const MainNavigator = () => {
  return (
    <View style={styles.mainContainer}>
   
    <HomeScreen/>
  
    </View>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#fff'
  }
})