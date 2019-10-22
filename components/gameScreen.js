import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';

const randomNumberGenerator = (min,max,exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndum = Math.floor(Math.random() * (max-min)) + min
    if(rndum === props.userChoice){
        return randomNumberGenerator(min,max,exclude)
    } else {
        return rndum
    }
}


const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(randomNumberGenerator(1,100,props.userChoice))

    return(
        <View>
         <Text>Working</Text>
        </View>
    )
}

export default GameScreen