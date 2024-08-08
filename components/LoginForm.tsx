import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = { uri: 'https://docs.expo.dev/static/images/tutorial/background-image.png' };

const LoginForm: React.FC = () => {
  const [isModelvalue, setModelvalue] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const toggleModel = () => {
    setModelvalue(!isModelvalue);
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Proceed with your login logic
   // navigation.navigate('newtab'); // Use string route name here
  };

  return (
    <ImageBackground blurRadius={6} source={image} style={styles.image}>
      <View style={styles.container}>
        <Image source={require('./logo.png')} style={styles.logo} />
        <Text style={styles.subtitle}>Explore the world</Text>
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
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don’t have an account?</Text>
          <TouchableOpacity onPressIn={toggleModel}>
            <Text style={styles.signUpLinkText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Sign In With Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Sign In With Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Sign In With Facebook</Text>
          </TouchableOpacity>
        </View>
        <Modal visible={isModelvalue} animationType="fade" onRequestClose={toggleModel}>
          <View style={styles.modalContent}>
            <Text>SignUp User Registration Form</Text>
            <TextInput placeholder="Enter Name" />
            <TouchableOpacity onPress={toggleModel}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#4A4A4A',
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
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#1E90FF',
    textAlign: 'right',
    marginBottom: 20,
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
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  signUpLinkText: {
    fontSize: 14,
    color: '#1E90FF',
    marginLeft: 5,
  },
  orText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#A9A9A9',
    marginBottom: 20,
  },
  socialButtonsContainer: {
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#000',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginForm;
