import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Animated,
  PanResponder,
  Switch,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Color from '../../../Styles/Color';
import { AntDesign, Entypo, FontAwesome, FontAwesome5 } from '../../../Styles/Icon';
import { useNavigation } from '@react-navigation/native';
import { ViewProps } from '../../../navigation/ViewPops';

const { width: w, height: h } = Dimensions.get('window');
const Profile = () => {
  const navigation = useNavigation<ViewProps['navigation']>();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const naigation = useNavigation<ViewProps['navigation']>();
  return (
    <View style={styles.contanier}>
      <StatusBar backgroundColor={Color.backgroud} />

      <View style={styles.FromTop}>
        <View style={{ flexDirection: 'row', width: w / 1.1, height: h / 15 }}>
          <TouchableOpacity style={{ width: '90%' }} onPress={() => naigation.goBack()}>
            <AntDesign name="arrowleft" style={{ fontSize: 30, marginTop: 10, color: '#c0c0c0' }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="navicon" style={{ fontSize: 25, marginTop: 10, color: '#c0c0c0' }} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: h / 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View>
            <Image
              source={require('../../../Imgs/Profile.png')}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </View>
      </View>

      <View style={styles.FromCennter}>
        <TouchableOpacity
          style={styles.Tab1}
          onPress={() => naigation.navigate('InformationProduct')}
        >
          <View style={{ alignItems: 'center', marginStart: 10 }}>
            <Pressable
              style={{
                width: 45,
                height: 45,
                backgroundColor: Color.buttom,
                position: 'absolute',
                borderRadius: 10,
              }}
            />
            <AntDesign
              name="infocirlceo"
              style={{ fontSize: 25, marginTop: 9, color: Color.text }}
            />
          </View>

          <View
            style={{
              width: w / 1.5,
              height: h / 16,
              marginStart: 10,
              marginEnd: 10,
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: Color.text,
              }}
            >
              Account information
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Pressable
              style={{
                width: 45,
                height: 45,
                backgroundColor: Color.buttom,
                position: 'absolute',
                borderRadius: 10,
              }}
            />
            <Entypo
              name="chevron-right"
              style={{ fontSize: 25, marginTop: 10, color: Color.text }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Tab1} onPress={() => naigation.navigate('EditProfile')}>
          <View style={{ alignItems: 'center', marginStart: 10 }}>
            <Pressable
              style={{
                width: 45,
                height: 45,
                backgroundColor: Color.buttom,
                position: 'absolute',
                borderRadius: 10,
              }}
            />

            <FontAwesome5
              name="user-edit"
              style={{ fontSize: 20, marginTop: 10, color: Color.text }}
            />
          </View>

          <View
            style={{
              width: w / 1.5,
              height: h / 16,
              marginStart: 10,
              marginEnd: 10,
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: Color.text,
              }}
            >
              Edit account information
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Pressable
              style={{
                width: 45,
                height: 45,
                backgroundColor: Color.buttom,
                position: 'absolute',
                borderRadius: 10,
              }}
            />
            <Entypo
              name="chevron-right"
              style={{ fontSize: 25, marginTop: 10, color: Color.text }}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.Tab1}>
          <View style={{ alignItems: 'center', marginStart: 10 }}>
            <Pressable
              style={{
                width: 45,
                height: 45,
                backgroundColor: Color.buttom,
                position: 'absolute',
                borderRadius: 10,
              }}
            />
            <AntDesign name="find" style={{ fontSize: 25, marginTop: 9, color: Color.text }} />
          </View>

          <View
            style={{
              width: w / 1.55,
              height: h / 16,
              marginStart: 10,
              marginEnd: 10,
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: Color.text,
              }}
            >
              Your position
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Switch
              trackColor={{ false: Color.buttom, true: Color.buttom }}
              thumbColor={isEnabled ? Color.buttom : Color.switch}
              ios_backgroundColor={Color.buttom}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>

      <View style={styles.FromButoom}>
        <TouchableOpacity style={styles.Tab1}>
          <View style={{ alignItems: 'center', marginStart: 10 }}>
            <Pressable
              style={{
                width: 45,
                height: 45,
                backgroundColor: Color.buttom,
                position: 'absolute',
                borderRadius: 10,
              }}
            />
            <AntDesign
              name="questioncircleo"
              style={{ fontSize: 25, marginTop: 9, color: Color.text }}
            />
          </View>

          <View
            style={{
              width: w / 1.5,
              height: h / 16,
              marginStart: 10,
              marginEnd: 10,
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: Color.text,
              }}
            >
              Help & support
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Pressable
              style={{
                width: 45,
                height: 45,
                backgroundColor: Color.buttom,
                position: 'absolute',
                borderRadius: 10,
              }}
            />
            <Entypo
              name="chevron-right"
              style={{ fontSize: 25, marginTop: 10, color: Color.text }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Tab1} onPress={() => naigation.navigate('SignIn')}>
          <View style={{ alignItems: 'center', marginStart: 10 }}>
            <Pressable
              style={{
                width: 45,
                height: 45,
                backgroundColor: Color.buttom,
                position: 'absolute',
                borderRadius: 10,
              }}
            />
            <Entypo name="log-out" style={{ fontSize: 25, marginTop: 10, color: Color.text }} />
          </View>

          <View
            style={{
              width: 300,
              height: h / 16,
              marginStart: 10,
              marginEnd: 10,
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: Color.text,
              }}
            >
              LogOut
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  contanier: {
    width: w,
    height: h,
    backgroundColor: Color.backgroud,
  },
  FromTop: {
    width: w,
    height: h / 4,
    paddingHorizontal: 20,
  },
  FromCennter: {
    width: w,
    height: h / 2.7,
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  FromButoom: {
    width: w,
    height: h,
    paddingHorizontal: 28,
  },
  Tab1: {
    flexDirection: 'row',
    marginVertical: 15,
    width: w / 1.1,
  },
});
