import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const LogAClimb = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Log a Climb</Text>
    </View>
  );
};

export default LogAClimb;

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
