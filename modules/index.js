import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native';

const OnboardingScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Stay Informed</Text>
        <Text style={styles.subtitle}>
          Our app keeps you informed about weather conditions including
          temperature, rain, snow, and wind.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20
  }
});
export default OnboardingScreen;