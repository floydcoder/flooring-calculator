import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Title from '../components/Title';
import FloorCalculator from '../components/FloorCalculator';

export default function Home() {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={homeStyle.container}>
          <Title />
          <FloorCalculator />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E6E9EE',
    height: 555,
  },
});
