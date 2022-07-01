import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Screens/Products/screens/Home';
import Detail from '../Screens/Products/screens/Detail';
import Cart from '../Screens/Products/screens/Cart';
import InformationProduct from '../Screens/Products/screens/InformationProduct';
const Stack = createStackNavigator<Route>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
