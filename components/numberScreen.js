import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Card from '../components/card'
import Colors from '../constants/colors'
import colors from '../constants/colors';


function NumberScreen() {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()
  const numberInputHandler = (inputText) =>{
    setEnteredValue(inputText.replace(/[^0-9]/g,''))
  }

  const resetInputHandler = () => {
    setEnteredValue("")
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const value = parseInt(enteredValue)
    if(isNaN(value) || value <=0 || value > 99){
      Alert.alert("Invalid Number!", "Number should be between 1 to 99",[{text:"okay",style:'destructive', onPress: resetInputHandler}])
      return;
    }
    setConfirmed(true)
    setSelectedNumber(value)
    setEnteredValue("")
  }
  let confirmedOutput;
  if(confirmed === true){
     confirmedOutput = <View style={styles.gameStart}><Text>Confirmed number is {selectedNumber}</Text><View marginTop={20}><Button title="Start Game" color={colors.primary}/></View></View>
  }
 

  return (
    <View style={styles.numberscreen}>
      <Text style={styles.title} >Start A New Game!</Text>
      <Card>
        <Text>Select A Number</Text>
        <TextInput style={styles.input}
        blurOnSubmit autoCapitalize="none" 
        autoCorrect={false} 
        keyboardType="number-pad" 
        maxLength={2}
        onChangeText={numberInputHandler}
        value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons} >
          <Button title="Reset" color={Colors.accent} onPress={resetInputHandler}/>
          </View>
          <View style={styles.buttons}> 
          <Button  title="Confirm" color={Colors.primary} onPress = {confirmInputHandler}/>
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
}


export default NumberScreen

const styles = StyleSheet.create({
  numberscreen:{
      alignItems: "center"
  },  
  inputContainer: {
    width:300,
    maxWidth: "80%",
    alignItems: "center"
  },
  title:{
    fontSize: 20,
    color: "black",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 10
  },
  buttons:{
    width: 100
  },
  input:{
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    maxWidth: 30
  },
  gameStart:{
    width:300,
        maxWidth: "80%",
        alignItems: "center",
        marginTop: 20,
        elevation: 8,
        padding: 20,
        borderRadius: 5,
        backgroundColor: "white"
  }
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    