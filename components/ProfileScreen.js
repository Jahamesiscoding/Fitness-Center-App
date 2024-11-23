import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

const ProfileScreen = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(require('../assets/avatar.png'));


  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        const storedUsername = await AsyncStorage.getItem('username');
        const storedEmail = await AsyncStorage.getItem('email');
        const storedProfileImage = await AsyncStorage.getItem('profileImage');

        if (storedName) setName(storedName);
        if (storedUsername) setUsername(storedUsername);
        if (storedEmail) setEmail(storedEmail);
        if (storedProfileImage) setProfileImage({ uri: storedProfileImage });
      } catch (error) {
        console.error('Failed to load profile data:', error);
      }
    };

    loadProfileData();
  }, []);

  useEffect(() => {
    const saveProfileData = async () => {
      try {
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('email', email);
        if (profileImage.uri) {
          await AsyncStorage.setItem('profileImage', profileImage.uri);
        }
      } catch (error) {
        console.error('Failed to save profile data:', error);
      }
    };

    saveProfileData();
  }, [name, username, email, profileImage]);

  const handleImageChange = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const selectedImage = result.assets[0];
      setProfileImage({ uri: selectedImage.uri });
    }
  };

  return (
    <ScrollView style={styles.container1}>
      <View style={styles.headerContainer}>
        <View style={styles.profileInfo}>
          <TextInput
            style={styles.profileText}
            value={name}
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor="#A0AEC0"
          />
          <TextInput
            style={styles.profileText}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#A0AEC0"
          />
          <TextInput
            style={styles.profileText}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#A0AEC0"
          />
        </View>
        <TouchableOpacity onPress={handleImageChange}>
          <Image style={styles.profileImage} source={profileImage} />
        </TouchableOpacity>
      </View>
      
      <Card style={styles.card}>
        <Card.Title title='Stats' subtitle='Your Statistics for the Past Year' />
        <Card.Content>
          <View style={styles.statsContainer}>
            <View style={styles.statsTextContainer}>
              <Text>Total Workouts: 100</Text>
              <Text>Total Steps Walked: 300,000</Text>
              <Text>Total Miles Run: 100</Text>
            </View>
            <Image style={styles.healthIcon} source={require('../health_icon.png')} />
          </View>
        </Card.Content>
      </Card>
      
      <TouchableOpacity style={styles.button1} onPress={() => setIsLoggedIn(false)}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;