import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserNavigation from './UserNavigation';
import ProductNavigation from './ProductNavigation';
import RootStack from './RootStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <UserNavigation />
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
