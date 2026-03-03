import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const[results, setresurts] = useState<any>()
  useEffect(() => {
    console.log("Entre entre en pantalla")
    getPokemons();
  }, []);

  //Funcion flecha
  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const response = await fetch(URL, {
      method: "GET",
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
  };
  return (
    <View>
      <Text>Ivanna</Text>
    </View>
  );
}


//API
//Es una una manera de conectar de forma local o remota con un API
