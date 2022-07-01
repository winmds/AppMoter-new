import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ViewProps } from '../../navigation/ViewPops';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from '../../Styles/Color';

const Waiting = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('loadFirst');
        console.log('value', value);

        if (value !== null) {
          if (value === '1') {
            setTimeout(() => {
              navigation.navigate('SignIn');
            }, 2000);
          }
        } else {
          setTimeout(() => {
            navigation.navigate('Loading');
          }, 2000);
        }
      } catch (e) {}
    };
    getData();
    // const clearAll = async () => {
    //   try {
    //     await AsyncStorage.clear();
    //   } catch (e) {}
    //   console.log('Done.');
    // };
    // clearAll();
  }, []);

  const navigation = useNavigation<ViewProps['navigation']>();

  return (
    <View style={[styles.container, styles.horizontal]}>
      <StatusBar backgroundColor={Color.backgroud} />
      <ActivityIndicator size="large" color={Color.loading} />
    </View>
  );
};

export default Waiting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.backgroud,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
