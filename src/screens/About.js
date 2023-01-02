import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function About() {
  return (
    <View style={aboutStyle.container}>
      <Image
        style={aboutStyle.stretch}
        source={require('../../assets/me.jpg')}
      />
      <Text>Marco Stevanella</Text>
      <Text>101307949</Text>
    </View>
  );
}

const aboutStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E9EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 250,
    height: 322,
    resizeMode: 'stretch',
    marginBottom: 25,
  },
});
