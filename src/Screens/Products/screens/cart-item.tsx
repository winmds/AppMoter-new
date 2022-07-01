import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';

const topAnimation = {
  0: { opacity: 0, translateY: -10 },
  1: { opacity: 1, translateY: 0 },
};
const ceneterAnimation = {
  0: { opacity: 0 },
  1: { opacity: 1 },
};
const rigthAnimation = {
  0: { opacity: 0, translateX: 10 },
  1: { opacity: 1, translateX: 0 },
};
const leftAnimation = {
  0: { opacity: 0, translateX: 0 },
  1: { opacity: 1, translateX: 1 },
};

import Color from '../../../Styles/Color';

const { width: w, height: h } = Dimensions.get('window');

const CartItem = (props: any) => {
  const { data, item, onExcept, onAdd } = props;

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(item?.quantity);
  }, [item]);

  console.log('----- item: ', item);

  return (
    <View style={styles.contanier}>
      <View style={styles.Fromall}>
        <Animatable.View
          style={styles.Fromleft}
          useNativeDriver
          animation={ceneterAnimation}
          delay={700}
        >
          <Image
            source={{ uri: item.Image }}
            style={{ width: 150, height: 150, borderRadius: 15 }}
          />
        </Animatable.View>

        <View style={styles.FromRight}>
          <Animatable.View
            style={{ width: w / 1.8, height: 30 }}
            useNativeDriver
            animation={leftAnimation}
            delay={600}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: Color.backgroud,
              }}
            >
              {item.Name}
            </Text>
          </Animatable.View>
          <Animatable.View
            style={{ width: w / 1.8, height: 100 }}
            useNativeDriver
            animation={topAnimation}
            delay={800}
          >
            <Text numberOfLines={5} style={{ color: Color.backgroud, fontSize: 14 }}>
              {item.Description}
            </Text>
          </Animatable.View>

          <Animatable.View
            style={{ flexDirection: 'row' }}
            useNativeDriver
            animation={rigthAnimation}
            delay={850}
          >
            <View style={{ width: 95, height: 30, flexDirection: 'row' }}>
              <Text style={{ color: Color.backgroud, fontWeight: '900', fontSize: 18 }}>
                {item.Price * quantity}$
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  marginLeft: 5,
                }}
              >
                {item.Volume} ml
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: 25,
                width: 100,
                borderRadius: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#C0C0C0',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}
                onPress={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                    onExcept(item);
                  }
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>-</Text>
              </TouchableOpacity>
              <View style={{ width: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{quantity}</Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#C0C0C0',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}
                onPress={() => {
                  if (quantity < 10) {
                    setQuantity(quantity + 1);
                    onAdd(item);
                  }
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>+</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: Color.backgroud,
    marginHorizontal: 10,
  },
  Fromall: {
    width: w / 1.05,
    height: h / 4.5,
    backgroundColor: '#7A7978',
    borderRadius: 15,
    flexDirection: 'row',
  },
  Fromleft: {
    width: w / 2.5,
    height: h / 4.5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  FromRight: {
    paddingVertical: 8,
  },
});
