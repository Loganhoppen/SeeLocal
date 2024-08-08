import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Event = {
  id: string;
  title: string;
  date: string;
  image: any;
  friends: string[];
  description: string;
  price: string;
};

const data: Event[] = [
  {
    id: '1',
    title: 'Banff w/ friends',
    date: 'July 6-9',
    image: require('../../../assets/images/nature1.png'),
    friends: ['Friend1', 'Friend2', 'Friend3'],
    description: 'A wonderful place to relax and enjoy nature.',
    price: '$100 CAD',
  },
  {
    id: '2',
    title: 'Hiking',
    date: 'August 2',
    image: require('../../../assets/images/nature2.png'),
    friends: ['Friend1', 'Friend2'],
    description: 'An amazing hiking experience.',
    price: '$150 CAD',
  },
];

const Home: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Event }) => (
    <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { event: item })}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://example.com/edit-icon.png' }} // Replace with your edit icon path
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.date}>{item.date}</Text>
          <View style={styles.friendsContainer}>
            {item.friends.map((friend, index) => (
              <Image
                key={index}
                source={{ uri: 'https://example.com/friend-icon.png' }} // Replace with your friend icon path
                style={styles.friendIcon}
              />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Upcoming Events</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://example.com/calendar-icon.png' }} // Replace with your calendar icon path
            style={styles.calendarIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
    alignItems: 'center',
  
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editIcon: {
    width: 16,
    height: 16,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  friendsContainer: {
    flexDirection: 'row',
  },
  friendIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
});

export default Home;
