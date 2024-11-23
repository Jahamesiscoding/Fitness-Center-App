import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const SharingScreen = () => {
  const initialUsers = [
    { id: 1, name: 'User  1', workouts: 3, image: 'https://storage.googleapis.com/a1aa/image/q6rlYfXGR6WOQS5wSyF2VKQEVllotldThdmfByiCKzWFwuyTA.jpg' },
    { id: 2, name: 'User  2', workouts: 5, image: 'https://storage.googleapis.com/a1aa/image/ddVAbQlssI5JNd9NFdApTw0TX6niFtc4ejNzYKu4molEYX5JA.jpg' },
    { id: 3, name: 'User  3', workouts: 2, image: 'https://storage.googleapis.com/a1aa/image/GAZBAfY2e4s8s0zEqLE9sQeqZnmYNxTAcfervEOyp2HzA2VeE.jpg' },
    { id: 4, name: 'User  4', workouts: 4, image: 'https://storage.googleapis.com/a1aa/image/XifdnMafgksrvkf4QmgmClIgg8HDeym34fDgKtZIoE2QA2VeE.jpg' },
    { id: 5, name: 'User  5', workouts: 1, image: 'https://storage.googleapis.com/a1aa/image/gt6WEDlT6ErXEBl57FWXzObt5fOfZnixPo3BTQQrUd4HwuyTA.jpg' },
  ];

  const initialFriends = [
    { id: 1, name: 'Friend 1', lastShared: '2 days ago', image: 'https://storage.googleapis.com/a1aa/image/q6rlYfXGR6WOQS5wSyF2VKQEVllotldThdmfByiCKzWFwuyTA.jpg' },
    { id: 2, name: 'Friend 2', lastShared: '1 week ago', image: 'https://storage.googleapis.com/a1aa/image/ddVAbQlssI5JNd9NFdApTw0TX6niFtc4ejNzYKu4molEYX5JA.jpg' },
    { id: 3, name: 'Friend 3', lastShared: '3 days ago', image: 'https://storage.googleapis.com/a1aa/image/GAZBAfY2e4s8s0zEqLE9sQeqZnmYNxTAcfervEOyp2HzA2VeE.jpg' },
    { id: 4, name: 'Friend 4', lastShared: '5 days ago', image: 'https://storage.googleapis.com/a1aa/image/XifdnMafgksrvkf4QmgmClIgg8HDeym34fDgKtZIoE2QA2VeE.jpg' },
    { id: 5, name: 'Friend 5', lastShared: '2 weeks ago', image: 'https://storage.googleapis.com/a1aa/image/gt6WEDlT6ErXEBl57FWXzObt5fOfZnixPo3BTQQrUd4HwuyTA.jpg' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [friends, setFriends] = useState(initialFriends);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUserNameChange = (id, newName) => {
    setUsers(users.map(user => (user.id === id ? { ...user, name: newName } : user)));
  };

  const handleFriendNameChange = (id, newName) => {
    setFriends(friends.map(friend => (friend.id === id ? { ...friend, name: newName } : friend)));
    const correspondingUser  = users.find(user => user.id === id);
    if (correspondingUser ) {
      handleUserNameChange(correspondingUser .id, newName); 
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sharing</Text>
        <Image source={require('../health_icon.png')} style={styles.healthIcon} />
        <View style={styles.header2}>
          <TouchableOpacity onPress={handleEditToggle}>
            <Text style={styles.editButton}>{isEditing ? 'Done' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>
      </View>

     

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Friends</Text>
          {friends.map(friend => (
            <View key={friend.id} style={styles.userContainer}>
              <Image source={{ uri: friend.image }} style={styles.profileImage} />
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={friend.name}
                  onChangeText={newName => handleFriendNameChange(friend.id, newName)}
                />
              ) : (
                <Text style={styles.userName}>{friend.name}</Text>
              )}
              <Text style={styles.boldText}>Last shared <Text style={styles.boldText2}>{friend.lastShared}</Text></Text>
            </View>
          ))}
        </Card.Content>
      </Card>
       <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Activity</Text>
          {users.map(user => (
            <View key={user.id} style={styles.userContainer}>
              <Image source={{ uri: user.image }} style={styles.profileImage} />
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={user.name}
                  onChangeText={newName => handleUserNameChange(user.id, newName)}
                />
              ) : (
                <Text style={styles.userName}>{user.name}</Text>
              )}
              <Text style={styles.boldText}>Completed <Text style={styles.boldText2}>{user.workouts}</Text> workouts</Text>
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7FAFC', // bg-gray-100
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  header2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'end',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  healthIcon: {
    width: 32, // Adjusted width
    height: 32, // Adjusted height
    marginLeft: 4, // Reduced margin
    marginRight: 200, // Reduced margin
  },
  editButton: {
    color: '#3182CE', // text-blue-500
    fontWeight: '600',
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#3B82F6'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userName: {
    fontWeight: '600',
    color: 'orange'
  },
  boldText: {
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'end',
    alignSelf: 'end',
    alignItems: 'end',
    alignContent: 'end',
  },
  boldText2: {
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'end',
    alignSelf: 'end',
    alignItems: 'end',
    alignContent: 'end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A0AEC0',
    borderRadius: 4,
    padding: 4,
    marginRight: 8,
    flex: 1,
  },
});

export default SharingScreen;