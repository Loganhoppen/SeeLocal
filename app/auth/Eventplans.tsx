import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const eventPlans = [
  {
    id: '1',
    title: 'Banff w/ friends',
    date: 'July 6-9',
    image: require('../../assets/images/nature1.png'),
    friends: ['Friend1', 'Friend2', 'Friend3'],
  },
  {
    id: '2',
    title: 'Hiking',
    date: 'July 6-9',
    image: require('../../assets/images/nature2.png'),
    friends: ['Friend1', 'Friend2'],
  },
];

const EventPlans: React.FC = () => {
  return (
    <FlatList
      data={eventPlans}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <TouchableOpacity>
                <Text style={styles.editIcon}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.moreIcon}>⋮</Text>
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
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
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
    fontSize: 14,
    color: 'gray',
  },
  moreIcon: {
    fontSize: 18,
    color: 'gray',
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  friendsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  friendIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
});

export default EventPlans;
