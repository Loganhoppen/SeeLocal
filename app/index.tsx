import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import Constants from 'expo-constants';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const apiUrl = Constants.expoConfig?.extra?.apiUrl;

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      console.log(`Sending request to: ${apiUrl}/users/login`);
      const payload = { email, password };
      console.log(`Payload: ${JSON.stringify(payload)}`);

      const response = await axios.post(`${apiUrl}/users/login`, payload);

      console.log('Response data:', response.data);

      if (response.data) {
        const { token } = response.data;
        Alert.alert('Success', 'Login successful');
        router.push('/auth');
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', error.response?.data?.message || 'Server error');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/7.png')} style={styles.logo} />
      <Text style={styles.signInText}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A9A9A9"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/register')}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 10,
  },
  signInText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
  },
  loginButton: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#000',
  },
  registerButton: {
    backgroundColor: '#4285F4',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default LoginForm;