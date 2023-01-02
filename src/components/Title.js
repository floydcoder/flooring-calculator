import React, { StyleSheet, Text } from 'react-native';

export default function Title() {
  return <Text style={titleStyle.title}>Flooring Calculator</Text>;
}

const titleStyle = StyleSheet.create({
  title: {
    color: '#136F73',
    fontWeight: 'bold',
    fontSize: '35',
  },
});
