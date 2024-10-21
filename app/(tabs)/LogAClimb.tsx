import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const LogAClimb = () => {
  const [climbStyle, setClimbStyle] = useState('boulder');
  const [dateClimbed, setDateClimbed] = useState(new Date());
  const [ascentStyle, setAscentStyle] = useState('onsighted');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    const logData = {
      climbStyle,
      dateClimbed,
      ascentStyle,
      notes,
    };

    console.log(logData);
    // Clear the form after submission
    setClimbStyle('');
    setDateClimbed(new Date());
    setAscentStyle('');
    setNotes('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Log a Climb</Text>
      </View>
      <View style={styles.formContainer}>
        <Picker
          selectedValue={climbStyle}
          onValueChange={(itemValue) => setClimbStyle(itemValue)}
        >
          <Picker.Item label="Boulder" value="Boulder" />
          <Picker.Item label="Sport" value="sport" />
          <Picker.Item label="Trad" value="trad" />
        </Picker>
        <View style={styles.datePickerContainer}>
          <DateTimePicker
            value={dateClimbed}
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || dateClimbed;
              setDateClimbed(currentDate);
            }}
          />
        </View>
        <Picker
          selectedValue={ascentStyle}
          onValueChange={(itemValue) => setAscentStyle(itemValue)}
        >
          <Picker.Item label="Onsighted" value="onsighted" />
          <Picker.Item label="Flashed" value="flashed" />
          <Picker.Item label="Projected" value="projected" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Notes"
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        <CustomButton title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default LogAClimb;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    flexGrow: 1,
  },
  formContainer: {},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  datePickerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
});
