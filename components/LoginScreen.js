import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Button } from 'react-native-paper';

const LoginScreen = ({ setIsLoggedIn }) => {
  const [showSplash, setShowSplash] = useState(false);
  const [typingText, setTypingText] = useState('');
  const fullText = "Welcome to the Fitness Center made by James Quattro and Antonio. In this app you can compete and do challenges against other users and friends while still tracking and maintaining your fitness levels!";

  const scaleAnim1 = useRef(new Animated.Value(1)).current; // Scale for the first image
  const scaleAnim2 = useRef(new Animated.Value(1)).current; // Scale for the proceed button
  const heartbeatInterval1 = useRef(null);
  const heartbeatInterval2 = useRef(null);

  const startHeartbeat = (scaleValue, intervalRef) => {
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.5,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }, 400); // Repeat every 400ms
  };

  const stopHeartbeat = (scaleValue, intervalRef) => {
    clearInterval(intervalRef.current); // Stop the interval
    scaleValue.setValue(1); // Reset scale
  };

  const handleLogin = () => {
    setShowSplash(true);
    startTyping();
  };

  const startTyping = async () => {
    for (let i = 0; i <= fullText.length; i++) {
      setTypingText(fullText.substring(0, i));
      await new Promise(resolve => setTimeout(resolve, 75)); // Typing speed
    }
  };

  const handleProceed = () => {
    stopHeartbeat(scaleAnim2, heartbeatInterval2); // Stop the heartbeat on proceed
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (showSplash) {
      startHeartbeat(scaleAnim2, heartbeatInterval2); // Start heartbeat for proceed button when splash is shown
    }
    return () => {
      stopHeartbeat(scaleAnim2, heartbeatInterval2); // Cleanup on unmount
    };
  }, [showSplash, scaleAnim2]); // Include scaleAnim2 in the dependency array

  return (
    <View style={styles.container}>
      {!showSplash ? (
        <>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.titleTitle}>Fitness Center</Text>
          <Text style={styles.subtitleTitle}>Your Personal Online Trainer!</Text>
          <TouchableOpacity 
            onPress={() => {
              stopHeartbeat(scaleAnim1, heartbeatInterval1); // Stop the heartbeat on press
              handleLogin(); // Trigger login on press
            }} 
          >
            <Animated.Image
              source={require('../health_icon.png')}
              style={[styles.activityImage3, { transform: [{ scale: scaleAnim1 }] }]}
            />
          </TouchableOpacity>
        </>
      ) : (
        < View style={styles.splashScreen}>
          <Text style={styles.splashTitle}>Fitness Center</Text>
          <Animated.Image
            source={require('../health_icon.png')}
            style={[styles.activityImage3, { transform: [{ scale: scaleAnim2 }] }]}
          />
          <Text style={styles.typingText}>{typingText}</Text>
          <TouchableOpacity 
            style={[styles.proceedButton, { opacity: typingText.length === fullText.length ? 1 : 0 }]} 
            onPress={handleProceed} 
          >
            <Animated.Text style={styles.proceedButtonText}>
              Proceed
            </Animated.Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#2C3E50',
  },
  titleTitle: {
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  subtitleTitle: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#34495E',
  },
  activityImage3: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
  },
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  splashTitle: {
    fontSize: 36,
    marginBottom: 20,
    color: '#2980B9',
  },
  typingText: {
    fontSize: 18,
    color: '#34495E',
    marginVertical: 20,
  },
  proceedButton: {
    marginTop: 'auto',
    backgroundColor: '#3498DB',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default LoginScreen;