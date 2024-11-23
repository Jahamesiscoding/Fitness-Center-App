import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Game() {
  const [gameView, setGameView] = useState('image');


  const handlePlayNow = () => {
    setGameView('game'); 
  };


  const handleProxyGame = () => {
    setGameView('proxyGame'); 
  };


  const handleBackToImage = () => {
    setGameView('image'); 
  };


  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Fat to Fit</Text>
      </View>


      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>Game Overview</Text>
        <Text style={styles.sectionDescription}>
          Fat to Fit is an exciting game where you guide your character through various obstacles to transform from fat to fit.
          Collect healthy items to lose weight and avoid junk food that makes you gain weight.
        </Text>


        {/* Game container */}
        <View style={styles.gameContainer}>
          {gameView === 'image' && (
            <Image
              style={styles.gameImage}
              source={{
                uri: 'https://storage.googleapis.com/a1aa/image/K9z7NZj1vnbyGlAB0G7vHt2ypePZLeZIGGQ96RLJNs2iSazTA.jpg',
              }}
            />
          )}
          {gameView === 'game' && (
            <WebView
              source={{ uri: 'https://www.yad.com/Fat-2-Fit-3d#google_vignette' }}
              style={styles.webview}
            />
          )}
          {gameView === 'proxyGame' && (
            <WebView
              source={{ uri: 'https://artclass.site' }}
              style={styles.webview}
            />
          )}
        </View>


        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePlayNow}>
            <Text style={styles.buttonText}>Play Now</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={gameView !== 'image' ? styles.button : styles.disabledButton}
            onPress={handleProxyGame}
            disabled={gameView === 'image'}
          >
            <Text style={styles.buttonText}>MAKE ME FIT</Text>
          </TouchableOpacity>


          {gameView !== 'image' && (
            <TouchableOpacity style={styles.button} onPress={handleBackToImage}>
              <Text style={styles.buttonText}>Back to Image</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>


      {/* Game Features */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Game Features</Text>
        <View style={styles.featureCard}>
          <Text style={styles.icon}>🏋️‍♂️</Text>
          <Text style={styles.featureTitle}>Fitness Challenges</Text>
          <Text>Engage in various fitness challenges to help your character get fit.</Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.icon}>🍎</Text>
          <Text style={styles.featureTitle}>Healthy Eating</Text>
          <Text>Collect healthy food items to lose weight and avoid junk food.</Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.icon}>🏃‍♂️</Text>
          <Text style={styles.featureTitle}>Obstacle Courses</Text>
          <Text>Navigate through challenging obstacle courses to reach your fitness goals.</Text>
        </View>
      </View>


      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Fat to Fit. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#007BFF',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  mainContent: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  gameContainer: {
    marginBottom: 20,
  },
  gameImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  webview: {
    width: '100%',
    height: 400,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  featuresSection: {
    padding: 20,
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});