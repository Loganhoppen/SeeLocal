import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const FilterScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Filter</Text>
      <View style={styles.filterGroup}>
        <Text>Date</Text>
        <TextInput style={styles.input} placeholder="Select date" />
      </View>
      <View style={styles.filterGroup}>
        <Text>Location</Text>
        <TextInput style={styles.input} placeholder="I want to go... skydiving" />
      </View>
      <View style={styles.filterGroup}>
        <Text>Proximity</Text>
        <Slider minimumValue={0} maximumValue={100} />
      </View>
      <View style={styles.filterGroup}>
        <Text>Price</Text>
        <Slider minimumValue={0} maximumValue={500} />
      </View>
      <View style={styles.filterGroup}>
        <Text>Rating</Text>
        <Slider minimumValue={0} maximumValue={5} />
      </View>
      <View style={styles.filterGroup}>
        <Text>Guide Trait</Text>
        <TextInput style={styles.input} placeholder="I want to go... skydiving" />
      </View>
      <Button title="Apply" onPress={() => {}} />
      <Button title="Reset filters" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterGroup: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
    marginTop: 5,
  },
});

export default FilterScreen;
