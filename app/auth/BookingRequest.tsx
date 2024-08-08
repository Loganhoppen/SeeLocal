import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../components/navigation/Types'; // Ensure the correct path to your types

const BookingRequest: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleRequestBooking = () => {
    alert('Booking requested successfully!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Image source={{ uri: 'https://example.com/image.jpg' }} style={styles.headerImage} />
        <Text style={styles.headerTitle}>Banff Tour</Text>
        <Text style={styles.headerSubtitle}>Tour Agency Name</Text>
        <Text style={styles.headerRating}>4.3 (1235)</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trip Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Dates</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Guests</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>$550.95 x 1 day</Text>
            <Text style={styles.value}>$1,652.85</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Taxes</Text>
            <Text style={styles.value}>$82.64</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Booking fee</Text>
            <Text style={styles.value}>$3.50</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total (CAD)</Text>
            <Text style={styles.totalValue}>$1,738.99</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Options</Text>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>Credit card or debit card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>Apple Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>Google Pay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cancellation Policy</Text>
          <Text style={styles.policyText}>
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </View>
        <TouchableOpacity style={styles.requestButton} onPress={handleRequestBooking}>
          <Text style={styles.requestButtonText}>Request booking</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#000',
  },
  header: {
    alignItems: 'center',
    padding: 16,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 18,
    color: 'gray',
  },
  headerRating: {
    fontSize: 16,
    color: 'gray',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 4,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  paymentButtonText: {
    fontSize: 16,
  },
  policyText: {
    fontSize: 16,
    color: 'gray',
  },
  requestButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  requestButtonText: {
    fontSize: 18,
    color: '#000',
  },
});

export default BookingRequest;
