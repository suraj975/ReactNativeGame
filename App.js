import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/header';
import NumberScreen from './components/numberScreen'
import Gamescreen from './components/gameScreen'


export default function App() {
  const [userNumber, userSelectedNumber] = useState()
  const userNumberChoosen = (value) => {
    console.log(value)
    userSelectedNumber(value)
  }
  return (
    <View style={styles.screen}>
      <Header title={"Guess A Number"}/>
  {userNumber > 0 ? <Gamescreen userChoice = {userNumber} /> : <NumberScreen userNumberSelected = {userNumberChoosen}/> }
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  }
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    