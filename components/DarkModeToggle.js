import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <View style={styles.toggleContainer}>
      <Text style={[styles.toggleText, { color: darkMode ? 'black' : 'black' }]}>Dark Mode</Text>
      <Switch
        value={darkMode}
        onValueChange={() => setDarkMode(!darkMode)}
        trackColor={{ false: '#767577', true: '#f5dd4b' }}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  toggleText: {
    marginRight: 10,
    fontSize: 16,
  },
});

export default DarkModeToggle;