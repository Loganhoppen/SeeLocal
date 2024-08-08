import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../app/auth/(tabs)/index'; // Home screen path in tabs
import EventDetail from '../app/auth/EventDetails';
import Bookingpage from '../app/auth/Bookingpage';
import BookingRequest from '../app/auth/BookingRequest';
import Itinerary from '../app/auth/Itinerary';
import LoginForm from '../app/index'; // Ensure this path points to your login component
import RegisterForm from '../app/register'; // Ensure this path points to your register component
import Profile from '../app/auth/(tabs)/profile'; // Ensure this path points to your profile component

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Register" component={RegisterForm} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="Bookingpage" component={Bookingpage} />
        <Stack.Screen name="BookingRequest" component={BookingRequest} />
        <Stack.Screen name="Itinerary" component={Itinerary} />
        <Stack.Screen name="Profile" component={Profile} />
        {/* Add other screens as necessary */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
