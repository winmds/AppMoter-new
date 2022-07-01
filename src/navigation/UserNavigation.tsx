import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

import RootStack from './RootStack';
import Waiting from '../Screens/user/Waiting';
import Loading from '../Screens/user/Loading';
import SignIn from '../Screens/user/SignIn';
import SignUp from '../Screens/user/SignUp';
import ForgotPass from '../Screens/user/ForgotPass';
import HookFrom from '../Screens/user/HookFrom';

const UserNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Waiting" component={Waiting} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="HookFrom" component={HookFrom} />
        <Stack.Screen name="ProductNavigation" component={RootStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//gggg
export default UserNavigation;

const styles = StyleSheet.create({});
