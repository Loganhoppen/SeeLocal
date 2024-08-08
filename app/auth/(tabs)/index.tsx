import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Item } from '../../../components/navigation/Types'; // Ensure the correct path to your types

const suggestions: Item[] = [
  {
    id: '1',
    title: 'Super Cool Place',
    difficulty: 'Easy',
    distance: '24 km away',
    price: '$100 CAD',
    rating: 4.9,
    image: [
      require('../../../assets/images/nature1.png'),
      require('../../../assets/images/nature2.png')
    ],
    date: '',
    friends: [],
    description: ''
  },
  {
    id: '2',
    title: 'Username/Tour Name',
    difficulty: 'Easy',
    distance: '15 km away',
    price: '$100 CAD',
    rating: 5.0,
    image: [
      require('../../../assets/images/nature2.png'),
      require('../../../assets/images/nature1.png')
    ],
    date: '',
    friends: [],
    description: ''
  },
  {
    id: '3',
    title: 'Username/Tour Name',
    difficulty: 'Easy',
    distance: '15 km away',
    price: '$100 CAD',
    rating: 5.0,
    image: [
      require('../../../assets/images/nature1.png'),
      require('../../../assets/images/nature2.png')
    ],
    date: '',
    friends: [],
    description: ''
  },
];

const nearbyActivities: Item[] = [
  {
    id: '4',
    title: 'Other Cool Place',
    difficulty: 'Easy',
    distance: '45 km away',
    price: '$200 CAD',
    rating: 5.0,
    image: [
      require('../../../assets/images/nature2.png'),
      require('../../../assets/images/nature1.png')
    ],
    date: '',
    friends: [],
    description: ''
  },
  {
    id: '5',
    title: 'Username/Tour Name',
    difficulty: 'Easy',
    distance: '15 km away',
    price: '$100 CAD',
    rating: 5.0,
    image: [
      require('../../../assets/images/nature1.png'),
      require('../../../assets/images/nature2.png')
    ],
    date: '',
    friends: [],
    description: ''
  },
  {
    id: '6',
    title: 'Username/Tour Name',
    difficulty: 'Easy',
    distance: '15 km away',
    price: '$100 CAD',
    rating: 5.0,
    image: [
      require('../../../assets/images/nature2.png'),
      require('../../../assets/images/nature1.png')
    ],
    date: '',
    friends: [],
    description: ''
  },
];

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [imageIndices, setImageIndices] = useState<{ [key: string]: number }>({});

  const toggleImageIndex = (id: string) => {
    setImageIndices(prev => ({
      ...prev,
      [id]: (prev[id] === 0 ? 1 : 0)
    }));
  };

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Bookingpage', { item })}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => toggleImageIndex(item.id)}>
          <Image source={item.image[imageIndices[item.id] || 0]} style={styles.cardImage} />
        </TouchableOpacity>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.difficulty}</Text>
        <Text style={styles.cardSubtitle}>{item.distance}</Text>
        <Text style={styles.cardSubtitle}>{item.price}</Text>
        <Text style={styles.cardSubtitle}>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="I want to go... rafting"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image
            style={styles.searchIcon}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('FilterScreen')}>
          <Image
            style={styles.filterIcon}
            source={{ uri: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/svgs/solid/filter.svg' }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButtonRounded}>
          <Text style={styles.filterButtonText}>Distance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButtonRounded}>
          <Text style={styles.filterButtonText}>Duration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButtonRounded}>
          <Text style={styles.filterButtonText}>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButtonRounded}>
          <Text style={styles.filterButtonText}>Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButtonRounded}>
          <Text style={styles.filterButtonText}>Tour Guide</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.sectionTitle, styles.blueText]}>Suggestions for you</Text>
      <FlatList
        horizontal
        data={suggestions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={[styles.sectionTitle, styles.blueText]}>Nearby activities</Text>
      <FlatList
        horizontal
        data={nearbyActivities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: '#f9f9f9',
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  filterButton: {
    marginLeft: 10,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  filterButtonRounded: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filterButtonText: {
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  blueText: {
    color: '#1E90FF',
  },
  card: {
    width: 300,
    marginRight: 10,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
  },
});

export default Home;
