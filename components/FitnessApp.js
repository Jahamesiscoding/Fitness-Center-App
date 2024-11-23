import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Linking,  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Card, Button } from 'react-native-paper';
import ActivitiesPage from './ActivitesPage.js';

const FitnessApp = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fitness Center</Text>
        <Image style={styles.activityImage2} source={require('../health_icon.png')} />
      </View>

      <View style={styles.main}>
        <Card style={styles.welcomeCard}>
          <Card.Content>
            <Text style={styles.welcomeTitle}>Welcome to Fitness Center</Text>
            <Text style={styles.welcomeText}>Track and Control Your Fitness Levels</Text>
          </Card.Content>
        </Card>

        <View style={styles.activitiesSection}>
          <Text style={styles.sectionTitle}>Upcoming Workout Challenges</Text>
          <View style={styles.activityGrid}>
            {activityData.map((activity, index) => (
              <Card key={index} style={styles.activityCard}>
                <Card.Cover source={{ uri: activity.image }} style={styles.activityImage} />
                <Card.Content>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activityDescription}>{activity.description}</Text>
                </Card.Content>
                <Card.Actions>
                  <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.youtube.com/playlist?list=PLJSJM_HTKEqRJ7LRFKTUpdsOiwBTaodNv')}>
                    <Text style={styles.buttonText}>Start {activity.title}</Text>
                  </TouchableOpacity>
                </Card.Actions>
              </Card>
            ))}
          </View>
        </View>

        <View style={styles.newsSection}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          {newsData.map((news, index) => (
            <Card key={index} style={styles.newsCard}>
              <Card.Content>
                <Text style={styles.newsTitle}>{news.title}</Text>
                <Text style={styles.newsText}>{news.text}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Fitness Center. All rights reserved to James, Antonio, Quattro.</Text>
      </View>
    </ScrollView>
  );
};

const activityData = [
  {
    title: 'Running',
    description: 'Track your running sessions and improve your stamina.',
    image: 'https://storage.googleapis.com/a1aa/image/5yfGp8ef7Cc7LJZelzRPN9de1S1kFUSe8U9cABQ8863xZMr8E.jpg',
  },
  {
    title: 'Weight Lifting',
    description: 'Track your weight lifting sessions and build muscle.',
    image: 'https://storage.googleapis.com/a1aa/image/ef1tyfyHIVPd3ppmdQ1SwgLuJr27Dz4TkdSH5WSDzD4VjZlnA.jpg',
  },
  {
    title: 'Yoga',
    description: 'Track your yoga sessions and improve your flexibility.',
    image: 'https://storage.googleapis.com/a1aa/image/btLf3AlY6gw6FSphIilGhR8fceHyFIeesX0fjy2Ljk4f0YW5JA.jpg',
  },
];

const newsData = [
  {
    title: 'Todays Workout Plan!',
    text: 'Go to Activities Page to See Todays Daily Workout Challenge!',
  },
  {
    title: 'Winter Fitness Challenge',
    text: 'Winner of our winter fitness challenge gets to stay fit during the cold months. So congrats to yourself!',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  main: {
    flex: 1,
    padding: 16,
  },
  welcomeCard: {
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B82F6',
 },
  welcomeText: {
    fontSize: 16,
    color: '#4B5563',
  },
  activitiesSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B5563',
    marginBottom: 8,
  },
  activityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  activityCard: {
    width: '30%',
    marginBottom: 16,
  },
  activityImage: {
    height: 120,
  },
  activityImage2: {
    height: 64,
    width: 64,
    alignItems: 'center',
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  activityDescription: {
    color: '#6B7280',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  newsSection: {
    marginBottom: 16,
  },
  newsCard: {
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  newsText: {
    color: '#6B7280',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#6B7280',
  },
});

export default FitnessApp;