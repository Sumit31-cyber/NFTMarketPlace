
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';

import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

function App() {

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterBold: require("./assets/fonts/Inter-Light.ttf"),
    InterBold: require("./assets/fonts/Inter-Medium.ttf"),
    InterBold: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  })

  if (!loaded) return null;


  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;