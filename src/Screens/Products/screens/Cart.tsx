import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Pressable,
  Animated,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
  Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import Color from '../../../Styles/Color';
import { Arrow, Circle, Detele, DeteleTop, Dotsthree } from '../../../Styles/Icon';
import { ViewProps } from '../../../navigation/ViewPops';
import CartItem from './cart-item';

const { width: w, height: h } = Dimensions.get('window');

const letterAnimation = {
  0: { opacity: 0, translateY: -42 },
  1: { opacity: 1, translateY: 0 },
};
const leftAnimation = {
  0: { opacity: 0, translateX: -42 },
  1: { opacity: 1, translateX: 0 },
};

const Cart = () => {
  const navigation = useNavigation<ViewProps['navigation']>();
  const route: any = useRoute();
  const { params } = useRoute<any>();

  const item = params?.item;

  const [loading, setLoading] = useState<any>(true);

  const [data, setData] = useState<any>([]);

  const [delObject, setDelObject] = useState<any>();

  const isFocused = useIsFocused();

  const onAdd = async (item: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID === item.ID) {
        data[i].quantity = data[i].quantity + 1;
      }
    }

    setData(data);
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('DataDetail', jsonValue);
  };

  const onExcept = async (item: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID == item.ID) {
        data[i].quantity = data[i].quantity - 1;
      }
      setData(data);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('DataDetail', jsonValue);
    }
  };

  const getIteamStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('DataDetail');
      if (jsonValue === null) {
        setData([]);
      } else {
        setData(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (productID: any) => {
    let dataArrr = data;

    let index = dataArrr.findIndex((item: any) => item.ID === productID);

    console.log('Index=========', index);

    dataArrr.splice(index, 1);

    console.log('dataArr', dataArrr);

    const jsonValue = JSON.stringify(dataArrr);
    await AsyncStorage.setItem('DataDetail', jsonValue);

    setDelObject(new Date());
  };
  useEffect(() => {
    isFocused && getIteamStorage();
  }, [isFocused]);

  useEffect(() => {
    console.log('data changed =========================: ', data);
  }, [data]);

  return (
    <View style={styles.contanier}>
      <View style={{ flexDirection: 'row', width: w / 1.05, height: 50, marginLeft: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arrow />
        </TouchableOpacity>

        <View style={{ width: 350 }}></View>

        <TouchableOpacity>
          <Dotsthree />
        </TouchableOpacity>
      </View>

      {!loading && (
        <FlatList
          data={data}
          numColumns={1}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <SafeAreaView style={{ paddingVertical: 10 }}>
              <ScrollView horizontal={true}>
                <View style={{ width: w }}>
                  <Animatable.View useNativeDriver animation={leftAnimation} delay={20}>
                    <CartItem
                      item={item}
                      index={index}
                      data={data}
                      onExcept={onExcept}
                      onAdd={onAdd}
                    />
                  </Animatable.View>
                </View>

                <TouchableOpacity
                  onPress={() => deleteItem(item.ID)}
                  style={{
                    backgroundColor: 'red',
                    width: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}
                >
                  <DeteleTop />
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
          )}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', justifyContent: 'center', width: w, height: 650 }}>
              <Animatable.Text
                style={{ color: '#fff', fontSize: 18 }}
                useNativeDriver
                animation={letterAnimation}
                delay={230}
              >
                Giò Hàng Trống
              </Animatable.Text>
            </View>
          }
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  contanier: {
    width: w,
    height: h,
    backgroundColor: Color.backgroud,
  },
});
