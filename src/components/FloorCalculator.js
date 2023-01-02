import { useState, useContext, useEffect } from 'react';
import React, { Text, TextInput, Switch, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Breakdown from './Breakdown';

export default function PavingData() {
  //STATES
  const [pavingSurface, setPavingSurface] = useState(0);
  const [sqMt, setsqMt] = useState(0);
  const [sqFt, setsqFt] = useState(0);
  const [unitCost, setUnitCost] = useState(0);
  const [labor, setLabor] = useState(0);
  const [showImperial, setShowImperial] = useState(false);

  const toggleSwitch = () => setShowImperial((previousState) => !previousState);

  useEffect(() => {
    if (showImperial) {
      const ratio = 10.76391;
      const sqFoot = pavingSurface * ratio;
      setsqFt(sqFoot);
    } else {
      setsqMt(pavingSurface);
    }
  }, [pavingSurface, showImperial]);

  return (
    <SafeAreaView>
      <View style={calculator.main}>
        <View style={calculator.switchSection}>
          <TextInput
            style={calculator.items}
            placeholder='surface sq.mt or sq.ft'
            keyboardType='numeric'
            value={pavingSurface}
            onChangeText={setPavingSurface}
          />
          <Switch
            style={calculator.switch}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={showImperial ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={showImperial}
          />
          {showImperial ? (
            <Text style={calculator.measurementType}>sq ft</Text>
          ) : (
            <Text style={calculator.measurementType}>sq m</Text>
          )}
        </View>
        <TextInput
          style={calculator.items}
          placeholder={showImperial ? 'cost per sq ft' : 'cost per sq mt '}
          keyboardType='numeric'
          value={unitCost}
          onChangeText={setUnitCost}
        />
        <TextInput
          style={calculator.items}
          placeholder={showImperial ? 'labor per sq ft' : 'labor per sq mt '}
          keyboardType='numeric'
          value={labor}
          onChangeText={setLabor}
        />
      </View>
      <Breakdown
        pavingSurface={showImperial ? sqFt : sqMt}
        showImperial={showImperial}
        unitCost={showImperial ? unitCost / 10.7639 : unitCost}
        labor={showImperial ? labor / 10.7639 : labor}
      />
    </SafeAreaView>
  );
}

const calculator = StyleSheet.create({
  main: {
    backgroundColor: '#EFC4AB',
    borderRadius: 20,
    width: 330,
    height: 150,
    marginBottom: 12,
  },
  items: {
    flex: 1,
    margin: 10,
    fontSize: 22,
  },
  switchSection: {
    flexDirection: 'row',
  },
  switch: {
    margin: 10,
  },
  measurementType: {
    fontSize: 17,
    margin: 15,
    fontWeight: 'bold',
  },
});
