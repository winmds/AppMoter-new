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
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { isValidEmail, isValidPassword, isValidPhone } from '../../utils/Validition';
import { ViewProps } from '../../navigation/ViewPops';
import Color from '../../Styles/Color';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../utils/axion';

const { width: width, height: height } = Dimensions.get('window');

const SignIn = () => {
  const navigation = useNavigation<ViewProps['navigation']>();
  const [passwordeye, setPasswordeye] = useState(true);

  const [Phone, setPhone] = useState('09988776655');
  const [password, setPassword] = useState('1234');

  const [errorPhone, setErrorPhone] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  // FETCH

  const fetchLogin = async (phone: any, password: any) => {
    const formdata = new FormData();
    formdata.append('Phone', phone);
    formdata.append('Password', password);

    fetch('https://vietsocials.000webhostapp.com/api/user/login.php', {
      method: 'POST',
      body: formdata,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('resssssslllllllllllllll', result);

        async function loginAsync(result: any) {
          try {
            const jsonValue = JSON.stringify(result?.data);
            await AsyncStorage.setItem('loginUser', jsonValue);
            console.log('jsonValudsadadadae===============', jsonValue);
          } catch (error) {}
        }
        loginAsync(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchLogin;
  }, []);

  const login = async () => {
    const result = await fetchLogin(Phone, password);
    console.log(result);

    if (Phone === '' && password === '') {
      ToastAndroid.show('Đăng nhập không thành công ', ToastAndroid.BOTTOM);
    } else {
      ToastAndroid.show('Đăng Nhập thành công', ToastAndroid.BOTTOM);
      navigation.navigate('ProductNavigation');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.fromImg}>
          <Image
            source={require('../../Imgs/maneLogin.png')}
            resizeMode="cover"
            style={styles.Img}
          />
        </View>

        <View style={styles.FromtextInput}>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ height: height / 10 }}>
              <Text style={{ fontSize: 24, color: Color.text, fontWeight: 'bold' }}>
                Welcome Back
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, color: 'grey' }}>Phone</Text>
            </View>

            <TextInput
              value={Phone}
              // onChangeText={setPhone}
              onChangeText={(text) => {
                setErrorPhone(isValidPhone(text) == true ? 'Wrong phone number' : '');
                setPhone(text);
              }}
              placeholder="Phone address"
              placeholderTextColor={'grey'}
              keyboardType="phone-pad"
              style={{
                height: 50,
                borderBottomWidth: 1,
                borderColor: Color.switch,
                fontSize: 16,
                marginTop: 10,
                color: Color.text,
              }}
            />
            <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>{errorPhone}</Text>
            <View style={{ height: 20 }}></View>
            <View>
              <Text style={{ fontSize: 16, color: 'gray' }}>Password</Text>
            </View>

            <View style={{ flexDirection: 'row', width: width }}>
              <TextInput
                value={password}
                // onChangeText={setPassword}
                onChangeText={(text) => {
                  setErrorPassword(isValidPassword(text) == true ? 'Wrong phone number' : '');
                  setPassword(text);
                }}
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

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPass')}
              style={{
                flexDirection: 'row-reverse',
                height: height / 20,
              }}
            >
              <Text style={{ fontSize: 16, color: 'grey' }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.FromBtn}>
          <View style={{ marginHorizontal: 16 }}>
            <View style={{ height: height / 10 }}></View>

            <TouchableOpacity
              // disabled={isValidltionOk() == false}
              onPress={login}
              style={styles.btn}
            >
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

        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 18, color: 'gray' }}>Don't have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ fontSize: 17, color: Color.buttom }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: Color.backgroud,
  },
  fromImg: {
    width: width,
    height: height / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Img: {
    width: width / 1,
    height: height / 4,
  },
  FromtextInput: {
    width: width,
    height: height / 2.5,
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
});
