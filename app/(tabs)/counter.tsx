import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet, ImageBackground } from "react-native";

export default function Counter() {
  const [value, setValue] = useState<number>(0)

  const increment = () => {
    setValue(value + 1);
  };

  const descrement = () => {
    setValue(value - 1);
  }; 

  return ( 
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/474x/62/05/6e/62056eb6a30e3774ae81a4b87e9476e4.jpg' }} 
      style={styles.background}>
      <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.valueText}>{value}</Text>
          </View >
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress = {descrement}>
              <Text style={styles.btnText}>-1</Text>
            </Pressable>
            <Pressable style={styles.button} onPress = {increment}>
              <Text style={styles.btnText}>+1</Text>
            </Pressable>
          </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  background: {
    flex: 1,
  },
  container : {
    flex : 1,
  },
  textContainer : {
    flex : 1,
    alignItems : "center",
    justifyContent: "center"
  },
  valueText: {
    fontSize: 120,
    color: "white",
    fontWeight: "200"
  },
  buttonContainer : {
    justifyContent : "space-between",
    flexDirection : "row",
    paddingHorizontal: 40,
    paddingBottom: 50
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)"
  },
  btnText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  }
})
