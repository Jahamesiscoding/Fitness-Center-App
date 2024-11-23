import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, Provider as PaperProvider, DarkTheme, Snackbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from './components/ProfileScreen';
import FitnessApp from './components/FitnessApp.js';
import ActivitiesPage from './components/ActivitesPage';
import SharingScreen from './components/SharingScreen';
import DarkModeToggle from './components/DarkModeToggle';
import AuthNavigator from './AuthNavigator';
import Game from './components/GameScreen.js';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');


  
function MainDrawer({ darkMode }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: darkMode ? '#333' : '#fff',
          width: 240,
        },
        headerStyle: {
          backgroundColor: darkMode ? '#333' : '#fff',
        },
        drawerActiveTintColor: darkMode ? '#fff' : '#000',
        drawerInactiveTintColor: darkMode ? '#aaa' : '#333',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={FitnessApp}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Activities"
        component={ActivitiesPage}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="fitness-center" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={() =>  <ProfileScreen setIsLoggedIn={setIsLoggedIn} />}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Sharing"
        component={SharingScreen}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="share" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}





  const theme = darkMode ? DarkTheme : DefaultTheme;


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              options={{ headerShown: false }}
              children={() => <MainDrawer darkMode={darkMode} />}
            />
            <Stack.Screen
              name="Reward Game"
              component={Game}
              options={{
                headerStyle: { backgroundColor: darkMode ? '#333' : '#fff' },
                headerTintColor: darkMode ? '#fff' : '#000',
              }}
            />
          </Stack.Navigator>
        ) : (
          <AuthNavigator setIsLoggedIn={setIsLoggedIn} />
        )}
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
          action={{
            label: 'Close',
            onPress: () => {
              setSnackbarVisible(false);
            },
          }}
        >
          {snackbarMessage}
        </Snackbar>
      </NavigationContainer>
    </PaperProvider>
  );
}