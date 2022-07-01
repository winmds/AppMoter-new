import { Dimensions, StyleSheet, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../Screens/Products/screens/Home';
import Favourite from '../Screens/Products/screens/Favourite';
import Profile from '../Screens/Products/screens/Profile';
import Cart from '../Screens/Products/screens/Cart';

const { width: width, height: height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const ProductNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            if (color == '#8fd100') {
              return <Ionicons name={'home'} size={size} color={color} />;
            } else {
              return <AntDesign name={'home'} size={size} color={color} />;
            }
          } else if (route.name === 'Cart') {
            if (color == '#8fd100') {
              return <FontAwesome name={'shopping-cart'} size={size} color={color} />;
            } else {
              return <AntDesign name={'shoppingcart'} size={size} color={color} />;
            }
          } else if (route.name === 'Favourite') {
            if (color == '#8fd100') {
              return <AntDesign name={'heart'} size={size} color={color} />;
            } else {
              return <AntDesign name={'hearto'} size={size} color={color} />;
            }
          } else if (route.name === 'Profile') {
            if (color == '#8fd100') {
              return <FontAwesome name={'user'} size={size} color={color} />;
            } else {
              return <AntDesign name={'user'} size={size} color={color} />;
            }
          }
        },

        tabBarLabel: ({ focused }) => {
          if (route.name == 'Home' && focused) {
            return <Text style={styles.fromText}>Home</Text>;
          } else if (route.name == 'Favourite' && focused) {
            return <Text style={styles.fromText}>Favourite</Text>;
          } else if (route.name == 'Cart' && focused) {
            return <Text style={styles.fromText}>Cart</Text>;
          } else if (route.name == 'Profile' && focused) {
            return <Text style={styles.fromText}>Profile</Text>;
          }
        },

        tabBarStyle: {
          width: width / 1.1,
          height: height / 12,
          position: 'absolute',
          backgroundColor: 'black',
          marginHorizontal: 20,
          marginVertical: 20,
          borderRadius: 15,
        },

        headerShown: false,
        tabBarActiveTintColor: '#8fd100',
        tabBarInactiveTintColor: '#687a37',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default ProductNavigation;

const styles = StyleSheet.create({
  fromText: {
    color: '#C0C0C0',
    fontWeight: 'bold',
  },
});
