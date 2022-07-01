import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Color from '../../../Styles/Color';
import { ViewProps } from '../../../navigation/ViewPops';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Love, Shoppingbags } from '../../../Styles/Icon';
import * as Animatable from 'react-native-animatable';

const { width: w, height: h } = Dimensions.get('window');
const topAnimation = {
  0: { opacity: 0, translateY: -50 },
  1: { opacity: 1, translateY: 0 },
};
const ceneterAnimation = {
  0: { opacity: 0 },
  1: { opacity: 1 },
};
const buttomAnimation = {
  0: { opacity: 0, translateY: h },
  1: { opacity: 1, translateY: 0 },
};

const Detail = () => {
  const naigation = useNavigation<ViewProps['navigation']>();
  const route: any = useRoute();

  const { params } = useRoute<any>();

  const item = params.item;

  const [dataCart, setDataCart] = useState<typeProduct[]>([]);

  useEffect(() => {
    getDataCart();
  }, []);

  const getDataCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('DataDetail');
      if (jsonValue != null) {
        const data = JSON.parse(jsonValue);
        setDataCart(data);
      } else {
        return null;
      }
    } catch (e) {}
  };
  console.log('dataCart:======================== ', dataCart);

  const handleAddProducts = async () => {
    getDataCart();
    if (dataCart.length === 0) {
      try {
        const jsonValue = JSON.stringify([{ ...item, quantity: 1 }]);
        await AsyncStorage.setItem('DataDetail', jsonValue);
        console.log(jsonValue);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('----- else');
      let cloneArr = dataCart;
      console.log('-------------------------------------------------------');
      console.log('cloneArr: ', cloneArr);

      cloneArr.push({ ...item, quantity: 1 }); // add
      console.log('cloneArr:====================================== ', cloneArr);

      try {
        const jsonValue = JSON.stringify(cloneArr); // thêm sp mơi vào cái cũ
        await AsyncStorage.setItem('DataDetail', jsonValue);
        console.log(jsonValue);
      } catch (e) {
        console.log(e);
      }
    }

    naigation.navigate('Cart', { item: item });
  };

  return (
    <View style={styles.contanier}>
      <StatusBar backgroundColor={'black'} />

      <Animatable.View
        style={styles.FromInges}
        useNativeDriver
        animation={topAnimation}
        delay={300}
      >
        <Image source={{ uri: item.Image }} style={{ width: 250, height: 250, borderRadius: 30 }} />
      </Animatable.View>

      <Animatable.View
        style={{ marginHorizontal: 30, height: h / 2.1 }}
        useNativeDriver
        animation={ceneterAnimation}
        delay={700}
      >
        <View style={{ marginTop: 20, marginStart: 10 }}>
          <Text style={{ color: Color.text, fontSize: 20, fontWeight: 'bold' }} numberOfLines={1}>
            {item.Name}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: Color.text,
              paddingLeft: 10,
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            ${item.Price}
          </Text>
          <Text style={{ color: Color.switch, marginStart: 8, fontSize: 12, marginTop: 5 }}>
            {item.Volume}ml
          </Text>

          <Text
            style={{
              color: Color.switch,
              paddingLeft: 10,
              marginTop: 15,
              fontSize: 15,
              marginLeft: 125,
            }}
          >
            Genuine product
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: Color.text,
              marginStart: 10,
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 5,
            }}
          >
            About
          </Text>
          <Text style={{ color: Color.switch, marginStart: 10, fontSize: 14 }}>
            {item.Description}
          </Text>
        </View>
      </Animatable.View>

      <Animatable.View
        style={{ marginHorizontal: 20 }}
        useNativeDriver
        animation={buttomAnimation}
        delay={800}
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => handleAddProducts()}
            style={{
              backgroundColor: Color.switch,
              width: w / 7,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Shoppingbags />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => naigation.navigate('Payproduct', { item: item })}
            style={{
              backgroundColor: Color.buttom,
              width: w / 1.4,
              height: h / 15,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginStart: 20,
            }}
          >
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Buy now</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  contanier: {
    width: w,
    height: h,
    backgroundColor: Color.backgroud,
  },
  FromInges: {
    width: w,
    height: h / 2.5,
    backgroundColor: '#1c1a18',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
