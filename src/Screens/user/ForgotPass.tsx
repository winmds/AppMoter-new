import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { isValidEmail, isValidPassword } from '../../utils/Validition';
import { ViewProps } from '../../navigation/ViewPops';
import Color from '../../Styles/Color';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../utils/axion';
import { OTP } from '../../Styles/Icon';

const { width: width, height: height } = Dimensions.get('window');

const ForgotPass = () => {
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const navigation = useNavigation<ViewProps['navigation']>();
  const [passwordeye, setPasswordeye] = useState(true);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.fromImg}></View>
        <View style={styles.FromtextInput}>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ height: height / 6 }}>
              <Text
                style={{ fontSize: 24, color: Color.text, fontWeight: 'bold', textAlign: 'center' }}
              >
                Please fill in the information to get your account back
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, color: 'grey' }}>Phone</Text>
            </View>

            <TextInput
              placeholder="Phone address"
              placeholderTextColor={'grey'}
              style={{
                height: 50,
                borderBottomWidth: 1,
                borderColor: Color.switch,
                fontSize: 16,
                marginTop: 10,
                color: Color.text,
              }}
            />
            <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>{errorEmail}</Text>

            <View style={{ height: 20 }}></View>
            <View>
              <Text style={{ fontSize: 16, color: 'gray' }}>Otp code</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: width,
              }}
            >
              <TextInput
                placeholder=""
                placeholderTextColor={'grey'}
                style={styles.textInputOTP1}
              />
              <TextInput placeholder="" placeholderTextColor={'grey'} style={styles.textInputOTP} />
              <TextInput placeholder="" placeholderTextColor={'grey'} style={styles.textInputOTP} />
              <TextInput placeholder="" placeholderTextColor={'grey'} style={styles.textInputOTP} />
              <TouchableOpacity
                onPress={() => {
                  alert('Đợi tầm mấy tiếng là có mã về đó 😀😀😀 ');
                }}
              >
                <OTP />
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>{errorEmail}</Text>

            <View style={{ height: 20 }}></View>
            <View>
              <Text style={{ fontSize: 16, color: 'gray' }}>New password</Text>
            </View>

            <View style={{ flexDirection: 'row', width: width }}>
              <TextInput
                placeholder="*********"
                placeholderTextColor={'grey'}
                secureTextEntry={passwordeye}
                style={{
                  height: 50,
                  borderBottomWidth: 1,
                  borderColor: Color.switch,
                  fontSize: 16,
                  marginTop: 10,
                  color: Color.text,
                  width: width / 1.1,
                }}
              />
              <Icon
                name={passwordeye ? 'eye' : 'eye-with-line'}
                onPress={() => setPasswordeye(!passwordeye)}
                style={{
                  fontSize: 24,
                  color: 'grey',
                  marginLeft: -25,
                  marginTop: 20,
                }}
              />
            </View>

            <Text
              style={{
                fontSize: 16,
                color: 'red',
                marginTop: 10,
              }}
            >
              {errorPassword}
            </Text>

            <View style={{ height: 20 }}></View>
            <View>
              <Text style={{ fontSize: 16, color: 'gray' }}>Re-Password</Text>
            </View>

            <View style={{ flexDirection: 'row', width: width }}>
              <TextInput
                placeholder="*********"
                placeholderTextColor={'grey'}
                secureTextEntry={passwordeye}
                style={{
                  height: 50,
                  borderBottomWidth: 1,
                  borderColor: Color.switch,
                  fontSize: 16,
                  marginTop: 10,
                  color: Color.text,
                  width: width / 1.1,
                }}
              />
              <Icon
                name={passwordeye ? 'eye' : 'eye-with-line'}
                onPress={() => setPasswordeye(!passwordeye)}
                style={{
                  fontSize: 24,
                  color: 'grey',
                  marginLeft: -25,
                  marginTop: 20,
                  width: 30,
                }}
              />
            </View>

            <Text
              style={{
                fontSize: 16,
                color: 'red',
                marginTop: 10,
              }}
            >
              {errorPassword}
            </Text>
          </View>
        </View>

        <View style={styles.FromBtn}>
          <View style={{ marginHorizontal: 16 }}>
            <View style={{ height: height / 10 }}></View>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.backgroud,
                  fontWeight: '900',
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: Color.backgroud,
  },
  fromImg: {
    width: width,
    height: height / 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Img: {
    width: width / 1,
    height: height / 4,
  },
  FromtextInput: {
    width: width,
    height: height / 1.4,
  },
  FromBtn: {
    width: width,
    height: height / 4.5,
  },
  btn: {
    backgroundColor: Color.buttom,
    width: width / 1.1,
    height: height / 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textInputOTP1: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: Color.switch,
    fontSize: 18,
    color: Color.text,
    width: 80,
    textAlign: 'center',
  },
  textInputOTP: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: Color.switch,
    fontSize: 18,
    color: Color.text,
    width: 80,
    marginLeft: 10,
    textAlign: 'center',
  },
});
