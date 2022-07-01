import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductNavigation from './ProductNavigation';
import Detail from '../Screens/Products/screens/Detail';
import Favourite from '../Screens/Products/screens/Favourite';
import InformationProduct from '../Screens/Products/screens/InformationProduct';
import Payproduct from '../Screens/Products/screens/Payproduct';
import EditProfile from '../Screens/Products/screens/EditProfile';

const Stack = createStackNavigator<Route>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="RootProductNavigation"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Stack.Screen name="RootProductNavigation" component={ProductNavigation} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Favourite" component={Favourite} />
      <Stack.Screen name="Payproduct" component={Payproduct} />
      <Stack.Screen name="InformationProduct" component={InformationProduct} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default RootStack;
