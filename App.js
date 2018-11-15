/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import Productdetails from "./app/components/productdetails";
import ContentContainer from "./app/components/ContentContainer";
import ProductList from "./app/components/Productlist";
import SplashScreen from "react-native-smart-splash-screen";
export default class App extends Component {
  componentWillMount = () => {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    });
  };

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="home"
            component={ContentContainer}
            title={"Zadi Boutique"}
            titleStyle={{ textAlign: "center", flex: 1 }}
          />
          <Scene
            key="poductlist"
            component={ProductList}
            titleStyle={{ color: "white" }}
            navBarButtonColor={{ color: "#003300" }}
          />
          <Scene key="detail" component={Productdetails} />
        </Stack>
      </Router>
    );
  }
}
