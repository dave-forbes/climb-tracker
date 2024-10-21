import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const myClimbs = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Logged Climbs</Text>
    </View>
  );
};

export default myClimbs;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
