// ActivitiesPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ActivitiesPage = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, title: 'Plank - 3 sets', completed: false },
    { id: 2, title: 'Crunches - 3 sets', completed: false },
    { id: 3, title: 'Bicycle Crunches - 3 sets', completed: false },
    { id: 4, title: 'Aztec Planks - 3 sets', completed: false },
  ]);

  const toggleChecklistItem = (id) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = checklist.filter((item) => item.completed).length;
  const progressPercentage = (completedCount / checklist.length) * 100;

  const navigation = useNavigation();

  const goToReward = () => {
    if (completedCount === checklist.length) {
      navigation.navigate('Reward Game'); 
    } else {
      Alert.alert('Page Locked', 'You must finish all challenges before accessing the game.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card2}>
        <Card.Content>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Activities</Text>
            <Image style={styles.activityImage2} source={require('../health_icon.png')} />
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Today: Abs</Text>
          <Image
            source={{ uri: 'https://i.ytimg.com/vi/w7MYm7mpygw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC67MkNjHZYcOctPkw5KmjNyTekVA' }}
            style={styles.image}
          />
          <Text style={styles.routineText}>Routine:</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.checklist}>
            {checklist.map((item) => (
              <TouchableOpacity key={item.id} style={styles.checklistItem} onPress={() => toggleChecklistItem(item.id)}>
                <Text style={[styles.checklistText, item.completed && styles.checked]}>
                  {item.completed ? '✔️' : '⬜'} {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
          </View>
        </Card.Content>
      </Card>

      {progressPercentage === 100 && (
        <TouchableOpacity style={styles.button} onPress={goToReward}>
          <Text style={styles.buttonText}>Go to Reward</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.youtube.com/playlist?list=PLJS JM_HTKEqSPxX0VupmpxSwZmGyunRSt')}>
        <Text style={styles.buttonText}>Start Challenges</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F7FAFC',
  },
  card: {
    marginBottom: 24,
  },
  card2: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3182CE',
  },
  title: {
    fontSize: 24,
    color: '#4A5568',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  routineText: {
    fontSize: 20,
    color: '#4A5568',
    textDecorationLine: 'underline',
    marginBottom: 16,
  },
  checklist: {
    marginBottom: 16,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checklistText: {
    fontSize: 18,
    color: '#FFA500',
    marginLeft: 8,
  },
  checked: {
    textDecorationLine: 'line-through',
    color: '#6B7280',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    marginBottom: 16,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3182CE',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#3182CE',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityImage2: {
    height: 64,
    width: 64,
  },
});

export default ActivitiesPage;