import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Launch from "./components/launch";
import Connexion from "./components/connexion";

export default function App() {
  return (
    <View>
      <Connexion />
      <StatusBar style="auto" />
    </View>
  );
}
