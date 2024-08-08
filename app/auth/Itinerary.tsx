
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

type Activity = {
  id: string;
  title: string;
  description: string;
};

type ItineraryProps = {
  activities: Activity[];
  onRequestBookingChange: () => void;
};

const Itinerary: React.FC<ItineraryProps> = ({ activities, onRequestBookingChange }) => {
  const renderItem = ({ item }: { item: Activity }) => (
    <View style={styles.activityContainer}>
      <Text style={styles.activityTitle}>{item.title}</Text>
      <Text style={styles.activityDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Itinerary</Text>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.requestButton} onPress={onRequestBookingChange}>
        <Text style={styles.requestButtonText}>Request itinerary change</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityContainer: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
  },
  requestButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  requestButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Itinerary;
