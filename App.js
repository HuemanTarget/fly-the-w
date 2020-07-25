import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";
import Facebook from "./components/Facebook";

export default function App() {
  const [flag, setFlag] = useState(require("./assets/w_flag.png"));
  const [textValueOne, setTextValueOne] = useState("");
  const [textValueTwo, setTextValueTwo] = useState("");
  const [textValueThree, setTextValueThree] = useState("");
  const [facebook, setFacebook] = useState(null);

  const soundObject = new Audio.Sound();

  // const audio = async () => {
  //   try {
  //     await soundObject.loadAsync(require("./assets/goodman.mp3"));
  //     await soundObject.playAsync();
  //     // Your sound is playing!
  //   } catch (error) {
  //     console.log("sound didnt load");
  //   }
  // };

  const handlePress = async () => {
    setFlag(require("./assets/w_flag.gif"));
    setTextValueOne("GO ");
    setTextValueTwo("CUBS ");
    setTextValueThree("GO!");
    setFacebook(<Facebook />);
    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        require("./assets/goodman.mp3"),
        {
          shouldPlay: true,
        }
      );
      console.log("your sound is playing");
    } catch (error) {
      console.log("sound didnt play");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.flag} source={flag} />
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 45,
            color: "#CC3433",
            fontWeight: "bold",
            marginBottom: 25,
          }}
        >
          {textValueOne}
        </Text>
        <Text
          style={{
            fontSize: 45,
            color: "white",
            fontWeight: "bold",
            marginBottom: 25,
          }}
        >
          {textValueTwo}
        </Text>
        <Text
          style={{
            fontSize: 45,
            color: "#CC3433",
            fontWeight: "bold",
            marginBottom: 25,
          }}
        >
          {textValueThree}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => handlePress()}
        style={{
          borderWidth: 2,
          borderColor: "white",
          backgroundColor: "#CC3433",
          borderRadius: 20,
          marginBottom: 20,
          width: 200,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5000,
          elevation: 5000,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Fly The W
        </Text>
      </TouchableOpacity>
      {facebook}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E3386",
    alignItems: "center",
    justifyContent: "center",
  },
  flag: {
    zIndex: 1000,
    elevation: 1000,
    width: 400,
    height: 250,
    marginLeft: 90,
  },
});
