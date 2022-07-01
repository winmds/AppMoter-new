import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useRoute } from '@react-navigation/native';
import Color from '../../../Styles/Color';
const { width: w, height: h } = Dimensions.get('window');

const Favourite = () => {
  const [datafavourite, setDatafavourite] = useState<any>([]);
  const route: any = useRoute();
  const { params } = useRoute<any>();
  const [loading, setLoading] = useState<any>(true);

  const isFocused = useIsFocused();

  const item = params?.item;

  // useEffect(() => {
  //   const clearAll = async () => {
  //     try {
  //       await AsyncStorage.clear();
  //     } catch (e) {
  //       // clear error
  //     }

  //     console.log('Done.');
  //   };
  //   clearAll();
  // }, []);

  const getIteamStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('DataDetail');
      if (jsonValue === null) {
        setDatafavourite([]);
      } else {
        setDatafavourite(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    isFocused && getIteamStorage();
  }, [isFocused]);

  useEffect(() => {
    console.log('data changed =========================: ', datafavourite);
  }, [datafavourite]);

  return (
    <View style={{ backgroundColor: Color.backgroud, height: h }}>
      {!loading && (
        <FlatList
          data={datafavourite}
          numColumns={1}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <View>
              <Image
                source={{ uri: item.Image }}
                style={{ width: 150, height: 180, borderRadius: 15 }}
              />
              <Text style={{ color: 'white', fontWeight: '900' }}>{item.Price}$</Text>
              <Text style={{ color: 'white', fontWeight: '900' }}>{item.Volume}ml</Text>
              <Text style={{ color: 'white', fontWeight: '900' }}>{item.Description}ml</Text>
            </View>
          )}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', justifyContent: 'center', width: w, height: 650 }}>
              <Text style={{ color: '#fff' }}> Chưa có mục yêu thích nào</Text>
            </View>
          }
        />
      )}
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  contanier: {
    width: w,
    height: h,
    paddingHorizontal: 10,
    backgroundColor: Color.backgroud,
  },
});
