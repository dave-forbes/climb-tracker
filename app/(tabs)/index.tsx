import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello climber!</Text>
      </View>
      <CustomButton
        title="Log a Climb"
        onPress={() => router.push('/(tabs)/LogAClimb')}
      />
      <CustomButton
        title="See logged climbs"
        onPress={() => router.push('/(tabs)/LoggedClimbs')}
      />
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
});
