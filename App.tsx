import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import UserNavigation from './src/navigation/UserNavigation';
import ProductNavigation from './src/navigation/ProductNavigation';
import Home from './src/Screens/Products/screens/Home';
import HookFrom from './src/Screens/user/HookFrom';

LogBox.ignoreAllLogs();

export default function App() {
  return <UserNavigation />;
}
