import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Breakdown({
  pavingSurface,
  unitCost,
  labor,
  showImperial,
}) {
  console.log('In Breakdown: Paving Surface', pavingSurface);
  console.log('In Breakdown: Unit Cost', unitCost);
  console.log('In Breakdown: labor', labor);
  console.log('In Breakdown: Show Imperial', showImperial);

  // STATES
  const [flooringCost, setflooringCost] = useState(0);
  const [laborCost, setLaborCost] = useState(0);
  const [jobCost, setJobCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  // USE EFFECTS
  console.log('Flooring Cost: ', flooringCost);
  useEffect(() => {
    // Flooring Cost Calculation (pavingSurface * unitCost)
    // be careful that the price changes when switching between sq mt and
    // sq ft. if for example the unit cost is 12 $ in sq mt, then in sq ft the cost will
    // be proportionally less, considering the 1 sq mt is 10.7639 sq ft. So 12 $ per sq mt is actually 1.11 $ in sq.
    if (showImperial) {
      setflooringCost(pavingSurface * unitCost);
    }
    setflooringCost(pavingSurface * unitCost);
  }, [pavingSurface, unitCost]);

  console.log(laborCost);
  useEffect(() => {
    // Labor Calculation (labor * pavingSurface)
    setLaborCost(labor * pavingSurface);
  }, [labor, pavingSurface]);

  console.log(jobCost);
  useEffect(() => {
    // Net Job Cost (Flooring Cost + Labor)
    setJobCost(flooringCost + laborCost);
  }, [flooringCost, laborCost]);

  console.log(tax);
  // Tax (Net Job Cost * 0.13)
  useEffect(() => {
    setTax(jobCost * 0.13);
  }, [jobCost]);

  console.log(total);
  useEffect(() => {
    // Total (Net Job + Tax)
    setTotal(jobCost + tax);
  }, [jobCost, tax]);

  return (
    <SafeAreaView>
      <View style={breakdown.breakdownView}>
        <Text style={breakdown.measurement}>
          {showImperial ? 'Breakdown by Sq ft' : 'Breakdown by Sq mt'}
        </Text>
        <Text style={breakdown.elements}>
          Floor cost: {flooringCost.toFixed(2)} $
        </Text>
        <Text style={breakdown.elements}>Labor: {laborCost.toFixed(2)} $</Text>
        <Text style={breakdown.elements}>Job cost: {jobCost.toFixed(2)} $</Text>
        <Text style={breakdown.elements}>TAX: {tax.toFixed(2)} $</Text>
        <Text style={breakdown.elements}>Total: {total.toFixed(2)} $</Text>
      </View>
    </SafeAreaView>
  );
}

const breakdown = StyleSheet.create({
  breakdownView: {
    alignItems: 'center',
    backgroundColor: '#FDE2AC',
    borderRadius: 20,
  },
  elements: {
    margin: 10,
    fontSize: 22,
  },
  measurement: {
    fontSize: 33,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
