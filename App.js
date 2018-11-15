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

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={ContentContainer} />
          <Scene key="poductlist" component={ProductList} />
          <Scene key="detail" component={Productdetails} />
        </Stack>
      </Router>
    );
  }
}
