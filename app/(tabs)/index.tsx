import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello climber!</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#286796' : '#4886b5',
          },
          styles.button,
        ]}
        onPress={() => router.push('/(tabs)/LogAClimb')}
      >
        <Text style={styles.buttonText}>Log a Climb</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#286796' : '#4886b5',
          },
          styles.button,
        ]}
        onPress={() => router.push('/(tabs)/LogAClimb')}
      >
        <Text style={styles.buttonText}>See logged climbs</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
