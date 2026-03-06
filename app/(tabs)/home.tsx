import React, {useEffect, useState} from "react";
import { Button, Text, View, TextInput } from "react-native";

export default function Home() {
    const [counter, setCounter] = useState(0);
    const [texto, setTexto] = useState('');
    
    useEffect(() => {
      console.log("Hola"); 
    }, [counter]);

    useEffect(() => {
      console.log("texto:", texto);
    }, [texto]);

    const increment = () => setCounter(counter + 1);

    return(
      <View style={{ padding: 20 }}>
        <Text>Contador: {counter}</Text>
        <Button title="increment" onPress={increment} />


        <TextInput
          placeholder="En proceso..."
          onChangeText={setTexto}
        />
        <Text>{texto}</Text>
      </View>
    );
}
