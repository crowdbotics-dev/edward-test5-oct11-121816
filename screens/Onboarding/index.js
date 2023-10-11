import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

const OnboardingScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
        <Text style={styles.title}>Stay Informed</Text>
        <Text style={styles.subtitle}>
          Our app keeps you informed about weather conditions including
          temperature, rain, snow, and wind.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.image} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  logo: {},
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    flexDirection: "row",
    flex: 1
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    position: "absolute",
    width: 320,
    left: -50,
    top: 340
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    top: -18,
    left: -2
  }
});
export default OnboardingScreen;