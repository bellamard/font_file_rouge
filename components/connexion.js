import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Styles } from "../styles/style";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

const Connexion = () => {
  return (
    <LinearGradient colors={["#59cde9", "#0a2a88"]} style={Styles.bg}>
      <View style={Styles.box_logos}>
        <Text style={Styles.title1}>HI-SANTE+</Text>
        <Image source={require("../images/logos.png")} style={Styles.logos} />
      </View>
      <Text style={Styles.title4}>CONNEXION</Text>
      <View style={Styles.box_msg}>
        <TouchableOpacity onPress={() => {}}>
          <LinearGradient
            colors={["#DD2476", "#FF512F"]}
            {...deg(240)}
            style={Styles.btn2}
          >
            <Text style={Styles.title3}>ENVOYER</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Connexion;
