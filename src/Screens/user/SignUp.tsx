import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { ViewProps } from '../../navigation/ViewPops';
import Color from '../../Styles/Color';

const { width: width, height: height } = Dimensions.get('window');

const SignUp = () => {
  const navigation = useNavigation<ViewProps['navigation']>();
  const [passwordeye, setPasswordeye] = useState(true);
  const [passwordeye1, setPasswordeye1] = useState(true);

  const [Phone, setPhone] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [username, setUsername] = useState<any>('');

  const fetchLogin = async (phone: any, password: any, username: any) => {
    const formdata = new FormData();
    formdata.append('Phone', phone);
    formdata.append('Password', password);
    formdata.append('Name', 'thắng đẹp trai');
    formdata.append('Username', username);
    formdata.append('Sex', '1');
    formdata.append('Role', '1');

    console.log('formdata============', formdata);

    fetch('https://vietsocials.000webhostapp.com/api/user/add.php', {
      method: 'POST',
      body: formdata,
    })
      .then((response) => response.json())

      .then((result) => {
        console.log('result', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchLogin;
  }, []);

  const login = async () => {
    const result = await fetchLogin(Phone, password, username);
    console.log(result);

    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.FromImges}>
          <Image
            source={require('../../Imgs/maneLogin.png')}
            style={{ width: width, height: height / 6 }}
          />
        </View>

        <View style={styles.FromtextInput}>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ height: height / 10, paddingVertical: 20 }}>
              <Text style={{ fontSize: 24, color: Color.text, fontWeight: 'bold' }}>Sign Up</Text>
            </View>

            <View>
              <Text style={{ fontSize: 16, color: Color.switch }}>UserName</Text>
            </View>

            <View>
              <TextInput
                placeholder="UserName"
                placeholderTextColor={'grey'}
                style={styles.TextInput}
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={{ height: height / 25 }}></View>

            <View>
              <Text style={{ fontSize: 16, color: Color.switch }}>Phone</Text>
            </View>

            <View>
              <TextInput
                placeholder="Phone address"
                placeholderTextColor={'grey'}
                style={styles.TextInput}
                value={Phone}
                onChangeText={setPhone}
                keyboardType={'phone-pad'}
              />
            </View>

            <View style={{ height: height / 25 }}></View>
            <View>
              <Text style={{ fontSize: 16, color: Color.switch }}>Password</Text>
            </View>

            <View style={{ flexDirection: 'row', width: width }}>
              <TextInput
                placeholder="*******"
                placeholderTextColor={'grey'}
                secureTextEntry={passwordeye}
                style={styles.TextInput}
                value={password}
                onChangeText={setPassword}
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

            <View
              style={{
                height: height,
                paddingVertical: 60,
                alignItems: 'center',
              }}
            >
              <View>
                <Text style={{ color: Color.switch, fontSize: 18 }}>
                  By continuing, you agree to our{' '}
                  <Text style={{ color: Color.switch, fontSize: 18 }}>Terms of </Text>
                </Text>
              </View>
              <View>
                <Text style={{ color: Color.buttom, fontSize: 18 }}>
                  Service <Text style={{ color: Color.switch, fontSize: 18 }}>and</Text> Privacy
                  Policy.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Frombtn}>
          <View style={{ height: height / 18 }}></View>
          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity style={styles.btn} onPress={login}>
              <Text style={{ fontSize: 18, color: '#2A2627', fontWeight: 'bold' }}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ height: height / 35 }}></View>
            <View style={styles.Fromtext}>
              <Text style={{ textAlign: 'center', color: Color.switch, fontSize: 18 }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: Color.buttom, marginStart: 4, fontSize: 18 }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#2A2627',
  },
  FromImges: {
    width: width,
    height: height / 6,
  },
  FromtextInput: {
    width: width,
    height: height / 1.7,
  },
  TextInput: {
    borderBottomWidth: 1,
    height: height / 15,
    borderColor: 'grey',
    fontSize: 18,
    color: 'white',
    width: width / 1.1,
  },
  Frombtn: {
    width: width,
    height: height,
  },
  btn: {
    width: width / 1.1,
    height: height / 14,
    backgroundColor: Color.buttom,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  Fromtext: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
