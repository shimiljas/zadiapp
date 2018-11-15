import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ImageOverlay extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.overlayHeader}>
          {this.props.header ? this.props.header : ""}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayHeader: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,

    alignSelf: "center",
    fontSize: 20,
    color: "#292929",
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    fontStyle: "normal",
    fontWeight: "bold"
  },
  overlayText: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 1,

    alignSelf: "center",
    fontSize: 16,
    color: "#292929",
    textAlign: "center",
    padding: 8,
    marginTop: 8,
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.6)"
  }
});
