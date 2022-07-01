import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { MotiView } from 'moti';
import { Feather, Phone } from '../../../Styles/Icon';
import Color from '../../../Styles/Color';
import { registerRootComponent } from 'expo';

const Payproduct = () => {
  // const [sum, setSum] = useState();
  const a = 1;
  const b = 2;
  const c = 6;

  const result = Tong(a, b, c);

  function check(number: number) {
    if (number % 2 === 0) {
      return number;
    } else {
      return 0;
    }
  }

  function Tong(a: any, b: any, c: any) {
    // const tem: any = a + b;
    // console.log('==dsa=dsa=da=sd=ad=ad=a', tem);
    // setSum(tem);

    let a2 = check(a);
    let b2 = check(b);
    let c2 = check(c);

    console.log(a2);
    console.log(b2);
    console.log(c2);

    return a2 + b2 + c2;
  }

  console.log(result);

  let arr = [
    {
      id: 1,
      name: 'thang',
      price: 10,
    },
    {
      id: 2,
      name: 'thang',
      price: 10,
    },
    {
      id: 3,
      name: 'thang',
      price: 10,
    },
    {
      id: 4,
      name: 'thang',
      price: 10,
    },
    {
      name: 'thang',
      price: 10,
    },
    {
      id: 5,
      name: 'thang',
      price: 10,
    },
    {
      id: 6,
      name: 'thang',
      price: 10,
    },
    {
      id: 7,
      name: 'thang',
      price: 10,
    },
    {
      id: 8,
      name: 'thang',
      price: 10,
    },
  ];

  const Editdata = () => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].price = i;
    }
    console.log('arr :', arr);
  };
  Editdata();

  const detele = arr.splice(1, 1);

  console.log('daytaadasdadsada', detele);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.backgroud,
      }}
    >
      <View style={[styles.dot, styles.center]}>
        <Phone />
      </View>
    </View>
  );
};

export default Payproduct;

const styles = StyleSheet.create({
  dot: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
