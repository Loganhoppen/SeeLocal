import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const Bookingpage: React.FC = () => {
  const route = useRoute();
  const { item } = route.params;

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={item.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.agency}>Tour Agency Name</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>★ 4.3 (1235)</Text>
        </View>
        <Text style={styles.subtitle}>{item.difficulty}</Text>
        <Text style={styles.subtitle}>{item.distance}</Text>
        <Text style={styles.subtitle}>{item.price}</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
          condimentum lobortis.
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <ScrollView horizontal>
            <Image source={item.image} style={styles.photo} />
            <Image source={item.image} style={styles.photo} />
            <Image source={item.image} style={styles.photo} />
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Rated Guides</Text>
          <ScrollView horizontal>
            <View style={styles.guideContainer}>
              <Image source={{ uri: 'https://example.com/guide.jpg' }} style={styles.guideImage} />
              <Text style={styles.guideName}>Name</Text>
            </View>
            <View style={styles.guideContainer}>
              <Image source={{ uri: 'https://example.com/guide.jpg' }} style={styles.guideImage} />
              <Text style={styles.guideName}>Name</Text>
            </View>
            <View style={styles.guideContainer}>
              <Image source={{ uri: 'https://example.com/guide.jpg' }} style={styles.guideImage} />
              <Text style={styles.guideName}>Name</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <Text style={styles.priceText}>Starting at {item.price}</Text>
          <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('BookingRequest', { eventId: item.id })}>
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
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
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  agency: {
    fontSize: 18,
    color: 'gray',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    color: '#FFD700',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  guideContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  guideImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  guideName: {
    fontSize: 14,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 18,
    color: '#000',
  },
});

export default Bookingpage;
