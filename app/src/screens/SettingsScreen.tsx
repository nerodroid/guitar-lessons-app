import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Card, Layout, Text } from '@ui-kitten/components'
import React, { Component, useEffect, useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from "react-native";

import App from "./../components/Tuner/app";
const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  frequency: {
    fontSize: 28,
    color: "#37474f",
  },
});

const SettingsScreen = () => {

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text >GUITAR TUNER</Text>
      <View style={style.body}>
        {<App/>}
      </View>
    </Layout>
  );
}

export default SettingsScreen;