import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';


const SignupScreen = () => {
  return (
    <View style={styles.authSection}>
      <Text style={styles.title}>Signup</Text>
      <Button title="Create Account" onPress={() => console.log('Account created')} />
    </View>
  );
};

export default SignupScreen;