import React from "react"
import {View, StyleSheet, Text} from 'react-native'

const Card = (props) => {
    return(
        <View style={{...styles.inputContainer, ...props.styles}}>
            {props.children}
        </View>
    )
}

export default Card


const styles = StyleSheet.create({
    inputContainer: {
        width:300,
        maxWidth: "80%",
        alignItems: "center",
        elevation: 8,
        padding: 20,
        borderRadius: 5,
        backgroundColor: "white"
      }
})