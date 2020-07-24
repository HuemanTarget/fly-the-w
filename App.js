import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: "#CC3433",
          backgroundColor: "#CC3433",
          marginTop: 10,
          width: 200,
          height: 40,
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
});
