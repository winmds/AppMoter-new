import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ViewProps } from '../../navigation/ViewPops';

import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: width, height: height } = Dimensions.get('window');

const Loading = () => {
  const navigation = useNavigation<ViewProps['navigation']>();

  const handleStarted = () => {
    /// luu thong tin lai
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('loadFirst', '1');
      } catch (e) {}
    };
    storeData();
    navigation.navigate('SignIn');
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('loadFirst');
  //       console.log('value', value);
  //       if (value !== null) {
  //         if (value === '1') {
  //           navigation.navigate('SignIn');
  //         }
  //       }
  //     } catch (e) {}
  //   };
  //   getData();
  // }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#2A2627'} />

      <View style={styles.ImgLogo}>
        <View style={{ height: height / 4 }}></View>
        <Image
          source={require('../../Imgs/Logo.png')}
          resizeMode="cover"
          style={{
            width: width / 2,
            height: height / 4,
          }}
        />
      </View>

      <View style={styles.FromBtn}>
        <View style={{ height: height / 4 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => handleStarted()}>
          <Text style={{ fontSize: 18, color: '#2A2627', fontWeight: 'bold' }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#2A2627',
    alignItems: 'center',
  },
  ImgLogo: {
    width: width / 1,
    height: height / 2,
    alignItems: 'center',
  },
  FromBtn: {
    width: width,
    height: height,
    alignItems: 'center',
  },
  btn: {
    width: width / 1.5,
    height: height / 15,
    borderRadius: 15,
    backgroundColor: '#9BC236',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
