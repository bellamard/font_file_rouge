import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Styles } from "../styles/style";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

const Launch = () => {
  return (
    <LinearGradient colors={["#59cde9", "#0a2a88"]} style={Styles.bg}>
      <View style={Styles.box_logos}>
        <Text style={Styles.title1}>HI-SANTE+</Text>
        <Image source={require("../images/logos.png")} style={Styles.logos} />
      </View>
      <View style={Styles.box_msg}>
        <Text style={Styles.title2}>HI-SANTE+</Text>
        <Text style={Styles.p}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <LinearGradient
            colors={["#DD2476", "#FF512F"]}
            {...deg(240)}
            style={Styles.btn}
          >
            <Text style={Styles.title3}>SUIVANT</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Launch;
