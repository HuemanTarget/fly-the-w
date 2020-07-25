import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

let facebookParameters = "";

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FacebookShareURL: "https://www.mlb.com/cubs",
      FacebookShareMessage: "Cubs Win! Fly The W!!",
    };
  }
  postOnFacebook = () => {
    let FacebookShareURL = this.state.FacebookShareURL;
    let FacebookShareMessage = this.state.FacebookShareMessage;
    if (this.state.FacebookShareURL != undefined) {
      if (facebookParameters.includes("?") == false) {
        facebookParameters =
          facebookParameters + "?u=" + encodeURI(this.state.FacebookShareURL);
      } else {
        facebookParameters =
          facebookParameters + "&u=" + encodeURI(this.state.FacebookShareURL);
      }
    }
    if (this.state.FacebookShareMessage != undefined) {
      if (facebookParameters.includes("?") == false) {
        facebookParameters =
          facebookParameters +
          "?quote=" +
          encodeURI(this.state.FacebookShareMessage);
      } else {
        facebookParameters =
          facebookParameters +
          "&quote=" +
          encodeURI(this.state.FacebookShareMessage);
      }
    }
    let url = "https://www.facebook.com/sharer/sharer.php" + facebookParameters;
    Linking.openURL(url)
      .then((data) => {
        // alert("Facebook Opened");
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.postOnFacebook}
          style={{
            borderWidth: 2,
            borderColor: "#CC3433",
            backgroundColor: "white",
            borderRadius: 20,
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
              color: "#CC3433",
              fontSize: 18,
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Share on Facebook
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
