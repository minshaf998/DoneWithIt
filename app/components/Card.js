import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import colors from "../config/colors";

function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("./../assets/background.jpg")}
        ></Image>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Red jacket for sale</Text>
          <Text style={styles.price}>$100</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
    // marginTop: 120,
    // marginHorizontal: 10,
    // borderRadius: 15,
    paddingHorizontal: 10,
    paddingTop: 100,
  },

  card: {
    backgroundColor: colors.white,
    height: 290,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    height: 200,
    // resizeMode: "contain",
    width: "100%",
  },
  textContainer: {
    padding: 10,
    paddingLeft: 20,
  },

  name: {
    marginBottom: 7,
    fontWeight: "bold",
    fontSize: 20,
  },
  price: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Card;
