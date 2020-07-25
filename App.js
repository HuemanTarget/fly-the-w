import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";
import Facebook from "./components/Facebook";
import Fireworks from "react-native-fireworks";
import { FontAwesome } from "@expo/vector-icons";

const soundObject = new Audio.Sound();

export default function App() {
  const [flag, setFlag] = useState(null);
  const [textValueOne, setTextValueOne] = useState("");
  const [textValueTwo, setTextValueTwo] = useState("");
  const [textValueThree, setTextValueThree] = useState("");
  const [facebook, setFacebook] = useState(null);
  const [fireworks, setFireworks] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [icon, setIcon] = useState(
    <FontAwesome name="play" size={30} color="white" />
  );

  // const audio = async () => {
  //   try {
  //     await soundObject.loadAsync(require("./assets/goodman.mp3"));
  //     await soundObject.playAsync();
  //     // Your sound is playing!
  //   } catch (error) {
  //     console.log("sound didnt load");
  //   }
  // };
  const playAudio = async () => {
    if (isLoaded == true) {
      if (isPlaying == true) {
        await soundObject.stopAsync();
        setIsPlaying(false);
        setIcon(<FontAwesome name="play" size={30} color="white" />);
      } else {
        await soundObject.playAsync();
        setIsPlaying(true);
        setIcon(<FontAwesome name="stop" size={30} color="white" />);
      }
    } else {
      try {
        await soundObject.loadAsync(require("./assets/goodman.mp3"));
        await soundObject
          .playAsync()
          .then(async (playbackStatus) => {
            // console.log(playbackStatus);
            setIcon(<FontAwesome name="stop" size={30} color="white" />);
            setIsPlaying(true);
            setIsLoaded(true);
            setTimeout(() => {
              soundObject.unloadAsync();
              setIsLoaded(false);
              setIcon(<FontAwesome name="play" size={30} color="white" />);
            }, playbackStatus.playableDurationMillis);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const stopFlag = () => {
  //   setFlag(require("./assets/w_flag.png"));
  // };
  // const playAudio = async () => {
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("./assets/goodman.mp3"),
  //     {
  //       shouldPlay: true,
  //       isLooping: false,
  //     }
  //   );
  //   const music = sound;
  //   setPlayingStatus("playing");
  // };

  // const stopAudio = async () => {
  //   await music.stopAsync();
  //   setPlayingStatus("nosound");
  // };

  const handlePress = async () => {
    setFlag(require("./assets/w_flag.gif"));
    setTextValueOne("GO ");
    setTextValueTwo("CUBS ");
    setTextValueThree("GO!");
    setFacebook(<Facebook />);
    setFireworks(<Fireworks />);
    playAudio();

    // try {
    //   const { sound } = await Audio.Sound.createAsync(
    //     require("./assets/goodman.mp3"),
    //     {
    //       shouldPlay: true,
    //       isLooping: false,
    //     }
    //   );
    //   console.log("your sound is playing");
    // } catch (error) {
    //   console.log("sound didnt play");
    // }
  };

  const turnOff = async () => {
    setFlag(null);
    setTextValueOne("");
    setTextValueTwo("");
    setTextValueThree("");
    setFacebook(null);
    setFireworks(null);
    // stopAudio();
    // try {
    //   const { sound: soundObject, status } = await Audio.Sound.stopAsync(
    //     require("./assets/goodman.mp3"),
    //     {
    //       shouldPlay: false,
    //     }
    //   );
    //   console.log("your sound is not playing");
    // } catch (error) {
    //   console.log("sound still playing");
    // }
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
      {fireworks}
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
      {/* <TouchableOpacity onPress={() => turnOff()}>
        <Text style={{ color: "white", paddingTop: 150 }}>Reset Animation</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => playAudio()} style={{ marginTop: 20 }}>
        {icon}
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
    height: 250,
    marginLeft: 90,
  },
});
