import React, {useState, useRef} from 'react';
import { StyleSheet,Text, View, Button, Alert} from 'react-native';
import Card from './card'
import Colors from '../constants/colors'
import colors from '../constants/colors';

const randomNumberGenerator = (min,max,exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndum = Math.floor(Math.random() * (max-min)) + min
    if(rndum === exclude){
        return randomNumberGenerator(min,max,exclude)
    } else {
        return rndum
    }
}


const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(randomNumberGenerator(1,100,props.userChoice))
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const nextGuessHandler = direction => {
        console.log(props.userChoice)
        console.log(typeof(direction))
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert("Dont lie, this is wrong ....", [{text: "Sorry", style:'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            currentLow.current = currentGuess
            } else {
                currentHigh.current = currentGuess
            }
       const nextNumber = randomNumberGenerator(currentLow.current, currentHigh.current, currentGuess)
       setCurrentGuess(nextNumber)
    }
    return(
        <View style={styles.screen}>
         <Text>Opponent's Guess</Text>   
         <View style={styles.inputContainer}>
         <Text style={styles.input}>{currentGuess}</Text>
         <View style={styles.buttonContainer}>
            <Button title="LOWER" onPress={() => nextGuessHandler("lower")}/>
            <Button title="GREATER" onPress={() => nextGuessHandler("greater")}/> 
        </View>   
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    inputContainer: {
        width:300,
        maxWidth: "80%",
        alignItems: "center",
        elevation: 8,
        padding: 20,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: "white"
      },
    buttonContainer:{
       flexDirection: "row",
       width: "100%",
       justifyContent: "space-evenly" 
    }, 
    input:{
        height: 30,
        display: "flex",
        alignItems: "center",
        borderWidth: 1,
        paddingLeft: 15,
        paddingTop: 5,
        borderColor: colors.accent,
        width: 50,
        marginBottom: 10
      }
})