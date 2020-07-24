import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const [flag, setFlag] = useState(require("./assets/w_flag.png"));
  // const audio = async () => {
  //   const soundObject = new Audio.Sound();
  //   try {
  //     await soundObject.loadAsync(require("./assets/goodman.mp3"));
  //     await soundObject.playAsync();
  //     // Your sound is playing!
  //   } catch (error) {
  //     // An error occurred!
  //   }
  // };

  const handlePress = async () => {
    setFlag(require("./assets/w_flag.gif"));
    // const soundObject = new Audio.Sound();
    // try {
    //   await soundObject.loadAsync(require("./assets/goodman.mp3"));
    //   await soundObject.playAsync();
    //   // Your sound is playing!
    // } catch (error) {
    //   // An error occurred!
    // }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.flag} source={flag} />
      <TouchableOpacity
        onPress={() => handlePress()}
        style={{
          borderWidth: 2,
          borderColor: "#CC3433",
          backgroundColor: "#CC3433",
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 200,
          width: 200,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          elevation: 1000,
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
    height: 400,
    marginLeft: 70,
    marginTop: 0,
  },
});
