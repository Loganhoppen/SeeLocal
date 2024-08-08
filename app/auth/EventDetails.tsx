import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  EventDetail: { event: Event };
};

type EventDetailScreenRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;

type Event = {
  id: string;
  title: string;
  date: string;
  image: any;
  friends: string[];
  description: string;
  price: string;
  activities: Activity[];
};

type Activity = {
  id: string;
  title: string;
  description: string;
};

const EventDetail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<EventDetailScreenRouteProp>();
  const { event } = route.params;

  const activities = event.activities || [];

  const [selectedTab, setSelectedTab] = useState<'Overview' | 'Itinerary'>('Overview');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [details, setDetails] = useState('');

  const handleRequestBookingChange = () => {
    setModalVisible(true);
  };

  const handleActivitySelect = (id: string) => {
    setSelectedActivity(id);
  };

  const handleItineraryChangeRequest = () => {
    alert(`Itinerary change requested for activity ${selectedActivity} with details: ${details}`);
    setModalVisible(false);
    setSelectedActivity(null);
    setDetails('');
  };

  const renderOverview = () => (
    <View style={styles.sectionContent}>
      <View style={styles.tripDetails}>
        <Text style={styles.sectionTitle}>Trip Details</Text>
        <Text style={styles.tripDetailText}>Location: Address 123, Banff AB</Text>
        <Text style={styles.tripDetailText}>Time: 9:00am</Text>
        <Text style={styles.tripDetailText}>Guide: Bob A.</Text>
        <Text style={styles.tripDetailText}>Agency: Tour Agency Name</Text>
      </View>
      <TouchableOpacity style={styles.requestBookingButton} onPress={handleRequestBookingChange}>
        <Text style={styles.requestBookingButtonText}>Request booking change</Text>
      </TouchableOpacity>
      <View style={styles.travelPals}>
        <Text style={styles.sectionTitle}>Travel Pals</Text>
        <View style={styles.friendsContainer}>
          {event.friends.map((friend, index) => (
            <View key={index} style={styles.friend}>
              <Image source={{ uri: 'https://example.com/friend.jpg' }} style={styles.friendImage} />
              <Text style={styles.friendName}>{friend}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.notes}>
        <Text style={styles.sectionTitle}>Notes</Text>
        <Text style={styles.notesText}>Add any notes that relate to the tour, guide questions, items to book and more!</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add list item</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItinerary = () => (
    <View style={styles.sectionContent}>
      <View style={styles.itineraryContainer}>
        <Text style={styles.itineraryTitle}>July 6</Text>
        <View style={styles.itineraryItem}>
          <Text style={styles.itineraryItemTitle}>Breakfast</Text>
          <Text style={styles.itineraryItemDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </Text>
        </View>
        <View style={styles.itineraryItem}>
          <Text style={styles.itineraryItemTitle}>Activity #2</Text>
          <Text style={styles.itineraryItemDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </Text>
        </View>
        <View style={styles.itineraryItem}>
          <Text style={styles.itineraryItemTitle}>Activity #3</Text>
          <Text style={styles.itineraryItemDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.requestButton} onPress={handleRequestBookingChange}>
        <Text style={styles.requestButtonText}>Request itinerary change</Text>
      </TouchableOpacity>
    </View>
  );

  const sections = [
    {
      title: 'Header',
      data: [event],
      renderItem: () => (
        <View>
          <Image source={event.image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subtitle}>{event.date}</Text>
            <View style={styles.tabs}>
              <TouchableOpacity
                style={[styles.tab, selectedTab === 'Overview' && styles.selectedTab]}
                onPress={() => setSelectedTab('Overview')}
              >
                <Text style={styles.tabText}>Overview</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, selectedTab === 'Itinerary' && styles.selectedTab]}
                onPress={() => setSelectedTab('Itinerary')}
              >
                <Text style={styles.tabText}>Itinerary</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab} onPress={() => {}}>
                <Text style={styles.tabText}>Attachments</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab} onPress={() => {}}>
                <Text style={styles.tabText}>$</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ),
    },
    {
      title: selectedTab,
      data: [{}],
      renderItem: selectedTab === 'Overview' ? renderOverview : renderItinerary,
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        //renderItem={({ item }) => item.renderItem()} this line is for rendering items to the overview screen such as activities
      />
      {/* Modal for Itinerary Change Request */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select itinerary activity</Text>
            {activities.map((activity) => (
              <TouchableOpacity
                key={activity.id}
                style={[styles.activityContainer, selectedActivity === activity.id && styles.selectedActivity]}
                onPress={() => handleActivitySelect(activity.id)}
              >
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDescription}>{activity.description}</Text>
              </TouchableOpacity>
            ))}
            <TextInput
              style={styles.detailsInput}
              placeholder="Add details..."
              value={details}
              onChangeText={setDetails}
            />
            <TouchableOpacity style={styles.requestButton} onPress={handleItineraryChangeRequest}>
              <Text style={styles.requestButtonText}>Request itinerary change</Text>
            </TouchableOpacity>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  sectionContent: {
    padding: 20,
  },
  tripDetails: {
    marginBottom: 20,
  },
  tripDetailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  requestBookingButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  requestBookingButtonText: {
    fontSize: 16,
    color: '#000',
  },
  travelPals: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  friendsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  friend: {
    alignItems: 'center',
    marginRight: 10,
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  friendName: {
    fontSize: 14,
    color: '#666',
  },
  notes: {
    marginBottom: 20,
  },
  notesText: {
    fontSize: 16,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
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
  selectedActivity: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
  },
  detailsInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
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
  itineraryContainer: {
    padding: 20,
  },
  itineraryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itineraryItem: {
    marginBottom: 20,
  },
  itineraryItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itineraryItemDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default EventDetail;
