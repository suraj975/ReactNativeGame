import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/header';
import NumberScreen from './components/numberScreen'


export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess A Number"}/>
      <NumberScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  }
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    