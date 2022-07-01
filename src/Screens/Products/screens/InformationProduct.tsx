import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from '../../../Styles/Color';
import { Arrow, Chevron, Date, Edit, Email, Phone, Sex, Telegram } from '../../../Styles/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { ViewProps } from '../../../navigation/ViewPops';
import { useNavigation } from '@react-navigation/native';

const { width: w, height: h } = Dimensions.get('window');

const TopAnimation = {
  0: { opacity: 0, translateY: -80 },
  1: { opacity: 1, translateY: 0 },
};

const leftAnimation = {
  0: { opacity: 0, translateX: -w },
  1: { opacity: 1, translateX: 0 },
};

const rightAnimation = {
  0: { opacity: 0, translateX: w },
  1: { opacity: 1, translateX: 0 },
};

const centerAnimation = {
  0: { opacity: 0 },
  1: { opacity: 1 },
};

const InformationProduct = () => {
  const naigation = useNavigation<ViewProps['navigation']>();
  const [data, setData] = useState<typeUser>();
  const [loading, setLoading] = useState(true);

  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('loginUser');
      const logindata = jsonValue != null ? JSON.parse(jsonValue) : null;

      setData(logindata);
      console.log('logindata=======', logindata);
    } catch (e) {
      // read error
    } finally {
      setLoading(false);
    }

    console.log('Done.');
  };
  useEffect(() => {
    getMyObject();
  }, []);

  return (
    <>
      {!loading && (
        <View style={styles.contaneir}>
          <Animatable.View
            style={{ width: w, height: h / 4, position: 'absolute' }}
            useNativeDriver
            animation={TopAnimation}
            delay={200}
          >
            <Image
              source={require('../../../Imgs/banenrMona.jpg')}
              style={{ width: w, height: 200 }}
            />
          </Animatable.View>
          <ScrollView>
            <View style={styles.Frombuutom}>
              <Animatable.View
                style={{ backgroundColor: Color.backgroud, width: w }}
                useNativeDriver
                animation={centerAnimation}
                delay={100}
              >
                <Image
                  source={require('../../../Imgs/Profile.png')}
                  style={{ width: 140, height: 200, marginTop: -100 }}
                />
              </Animatable.View>

              <Animatable.View
                useNativeDriver
                animation={centerAnimation}
                delay={500}
                style={{ paddingHorizontal: 16, backgroundColor: Color.backgroud }}
              >
                <View style={{ marginTop: -35, height: h / 2.8 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', width: 360 }}>
                      {data?.Name}
                    </Text>
                    <TouchableOpacity onPress={() => naigation.navigate('EditProfile')}>
                      <Edit />
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: w, height: 30 }}>
                    <Text style={styles.text}>{data?.Username}</Text>
                  </View>

                  <View style={{ width: w, height: 50, flexDirection: 'row' }}>
                    <View
                      style={{
                        backgroundColor: Color.buttom,
                        width: 100,
                        height: 20,
                        borderRadius: 5,
                        alignItems: 'center',
                        marginTop: 5,
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={styles.textaddress}>BACH DANG </Text>
                    </View>
                    <View style={styles.fromadress}>
                      <Text>TAN BINH </Text>
                    </View>
                    <View style={styles.fromadress}>
                      <Text>TP.HCM </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: w / 1.5 }}>
                      <Text style={{ color: '#c0c0c0', fontSize: 16 }}> Date of birth</Text>
                      <View>
                        <View
                          style={{
                            width: 150,
                            height: 30,
                            marginTop: 10,
                            backgroundColor: Color.buttom,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            flexDirection: 'row',
                          }}
                        >
                          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>06-08-2002</Text>
                          <TouchableOpacity>
                            <Date />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text style={{ color: '#c0c0c0', fontSize: 16 }}> Gender</Text>
                      <View
                        style={{
                          width: 100,
                          height: 30,
                          marginTop: 10,
                          backgroundColor: Color.buttom,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 10,
                          flexDirection: 'row',
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data?.Sex}</Text>
                        <TouchableOpacity>
                          <Sex />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={{ height: h, marginVertical: 20 }}>
                    <Text style={{ fontSize: 16, color: '#c0c0c0' }}>Introduce yourself</Text>
                    <View style={{ marginTop: 5 }}>
                      <Text style={{ color: 'gray' }}>
                        {data?.Introduce} ádsaasdsadasdasdsadđâsdasdsaaddasdadsadsadasdsasdadasda
                        dđâsdadsadasdđasadsadsadasdasdasdasdsada
                        đasadasdasdasdsdasdsadasdsadsadsadasdsad
                      </Text>
                    </View>
                  </View>
                </View>
              </Animatable.View>

              <Animatable.View
                style={{
                  height: h / 6,
                  justifyContent: 'center',
                }}
                useNativeDriver
                animation={leftAnimation}
                delay={250}
              >
                <View style={{ flexDirection: 'row', width: w / 10 }}>
                  <View style={styles.fromtable1}>
                    <View style={styles.iconAll}>
                      <Phone />
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 2 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Phone</Text>
                      <Text style={{ fontWeight: 'bold' }}>{data?.Phone}</Text>
                    </View>
                  </View>

                  <View style={styles.fromtable1}>
                    <View style={styles.iconAll}>
                      <Email />
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 2 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Email</Text>
                      <View style={{ width: 110 }}>
                        <Text numberOfLines={1}>{data?.Mail}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.fromtable1}>
                    <View style={styles.iconAll}>
                      <Telegram />
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 2 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Telegram</Text>
                      <View style={{ width: 110 }}>
                        <Text numberOfLines={1}>{data?.Mail}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Animatable.View>

              <Animatable.View
                style={{
                  width: w,
                  height: h,
                  backgroundColor: Color.backgroud,
                  paddingHorizontal: 16,
                }}
                useNativeDriver
                animation={rightAnimation}
                delay={250}
              >
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                  <Text style={{ fontSize: 16, color: Color.switch }}>Team and Leaders</Text>
                  <TouchableOpacity>
                    <Chevron />
                  </TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                  <View
                    style={{
                      backgroundColor: Color.buttom,
                      width: 200,
                      height: 150,
                      borderRadius: 10,
                    }}
                  ></View>
                  <View style={styles.fromTeam}></View>
                  <View style={styles.fromTeam}></View>
                </ScrollView>
              </Animatable.View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default InformationProduct;

const styles = StyleSheet.create({
  contaneir: {},
  Frombuutom: {
    width: w,
    height: h / 1.16,
    marginTop: 200,
    backgroundColor: Color.backgroud,
  },
  text: {
    color: '#c0c0c0',
    fontSize: 16,
  },
  fromadress: {
    backgroundColor: Color.switch,
    width: 100,
    height: 20,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
    justifyContent: 'center',
  },
  textaddress: {
    color: Color.backgroud,
    fontSize: 12,
  },

  fromtable1: {
    backgroundColor: Color.buttom,
    width: 130,
    height: 100,
    borderRadius: 20,
    marginLeft: 10,
  },
  iconAll: {
    width: 40,
    height: 40,
    backgroundColor: '#C8D35B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  fromTeam: {
    backgroundColor: Color.buttom,
    width: 200,
    height: 150,
    borderRadius: 10,
    marginLeft: 15,
  },
});
