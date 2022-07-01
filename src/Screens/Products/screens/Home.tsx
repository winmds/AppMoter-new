import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import Data from '../Data/Data.json';
import DataHoztantol from '../Data/DataHoztantol.json';
import DataImg from '../Data/DataImg.json';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
import { ViewProps } from '../../../navigation/ViewPops';
import Color from '../../../Styles/Color';

import axios from 'axios';
import { Love } from '../../../Styles/Icon';
import { floor } from 'react-native-reanimated';

const { width: width, height: height } = Dimensions.get('window');

const rigthAnimation = {
  0: { opacity: 0, translateX: width },
  1: { opacity: 1, translateX: 0 },
};

const leftAnimation = {
  0: { opacity: 0, translateX: -width },
  1: { opacity: 1, translateX: 0 },
};

const centerAnimation = {
  0: { opacity: 0 },
  1: { opacity: 1 },
};

const Home = () => {
  const [bell, setbell] = useState(true);

  const naigation = useNavigation<ViewProps['navigation']>();

  const [data, setData] = useState<Array<typeProduct>>([]);

  const [product, setProduct] = useState<any>([]);

  const [search, setSearch] = useState();

  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getdataHoztantol();
  }, []);

  async function getdataHoztantol() {
    try {
      const response = await axios.get(
        'https://vietsocials.000webhostapp.com/api/products/getAll.php'
      );

      setData(response.data.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  function hanldedNotification() {
    setbell(!bell);
    alert('Chuông kêu reng reng 😀😀😀');
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        'https://vietsocials.000webhostapp.com/api/products/getAll.php'
      );

      setProduct(response.data.data);

      console.log('Product================================', JSON.stringify(product));
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const [iskeyboard, setIskeyboard] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setIskeyboard(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setIskeyboard(false);
    });
  }, []);

  const onSearch = async (text: any) => {
    try {
      const response = await axios.get(
        'https://vietsocials.000webhostapp.com/api/products/getAll.php'
      );
      const dataProduct = response.data.data;
      console.log('texxttxtxtxtxtxxt', dataProduct);

      // console.log('dataProduts', dataProduct);
      if (!text) {
        setProduct(dataProduct);
        return;
      } else {
        const indexSearch = dataProduct.findIndex((item: any) => item.ID === text);
        const dataSearch = [dataProduct[indexSearch]];
        // const dataSearch = dataProduct.map((item: any, index: any) => {
        //   if (item.ID.indexOf(text) > -1) {
        //     return item;
        //   }
        // });
        setProduct(dataSearch);
      }
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsloading(false);
    }
  };
  console.log('textdsadadadadasd', product);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.backgroud} />

      {iskeyboard == false && (
        <View style={styles.FromAccount}>
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => naigation.navigate('Profile')}
            >
              <Image source={require('../../../Imgs/Logo.png')} style={{ width: 50, height: 50 }} />
              <Text
                style={{
                  fontSize: 18,
                  color: 'gray',
                  marginVertical: 15,
                  marginLeft: 10,
                }}
              >
                Do manh Thang
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => hanldedNotification()}>
              <FontAwesome
                name={bell ? 'bell-o' : 'bell'}
                style={{
                  fontSize: 30,
                  color: Color.buttom,
                  marginVertical: 10,
                  marginStart: 180,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <FlatList
        ListHeaderComponent={
          <>
            <Animatable.View useNativeDriver animation={centerAnimation} delay={300}>
              <View style={styles.FromSearch}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'gray',
                    borderRadius: 10,
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    height: 45,
                  }}
                >
                  <AntDesign
                    name="search1"
                    style={{
                      fontSize: 24,
                      color: Color.switch,
                      marginVertical: 10,
                    }}
                  />

                  <TextInput
                    placeholder="Search ID..."
                    style={{
                      flex: 1,
                      marginStart: 18,
                      fontSize: 18,
                      color: 'white',
                      height: '100%',
                    }}
                    onChangeText={onSearch}
                    placeholderTextColor={Color.switch}
                  />
                </View>
              </View>

              <View style={styles.FromSlideshow}>
                <SwiperFlatList
                  autoplay
                  autoplayDelay={2}
                  autoplayLoop
                  showPagination
                  data={DataImg.Img}
                  renderItem={({ item }) => (
                    <View style={{ margin: 2 }}>
                      <Image
                        source={{ uri: item.url }}
                        style={{
                          width: width / 1.09,
                          height: height / 4.3,
                          borderRadius: 15,
                          marginVertical: 10,
                        }}
                      />
                    </View>
                  )}
                />
              </View>

              <View style={{ paddingHorizontal: 18, height: 35 }}>
                <Animatable.Text
                  useNativeDriver
                  animation={leftAnimation}
                  delay={600}
                  style={{
                    fontSize: 18,
                    color: Color.switch,
                    fontWeight: 'bold',
                  }}
                >
                  Categories
                </Animatable.Text>
              </View>
            </Animatable.View>

            <FlatList
              data={data}
              horizontal={true}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => {
                return (
                  <Animatable.View
                    style={styles.FromListProduct}
                    useNativeDriver
                    animation={rigthAnimation}
                    delay={100}
                  >
                    <TouchableOpacity
                      style={{
                        margin: 8,
                        width: width / 3.5,
                        marginHorizontal: 10,
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={{ uri: item.Image }}
                        style={{ width: 100, height: 100, borderRadius: 15 }}
                      />
                    </TouchableOpacity>
                  </Animatable.View>
                );
              }}
            />
            <View
              style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                height: 30,
                paddingVertical: 5,
              }}
            >
              <Animatable.Text
                useNativeDriver
                animation={leftAnimation}
                delay={600}
                style={{ fontSize: 18, color: Color.switch, fontWeight: 'bold' }}
              >
                ProductList
              </Animatable.Text>
              <TouchableOpacity style={{ flexDirection: 'row-reverse', width: width / 1.5 }}>
                <Animatable.Text
                  useNativeDriver
                  animation={rigthAnimation}
                  delay={600}
                  style={{
                    fontSize: 18,
                    color: Color.switch,
                    fontWeight: 'bold',
                  }}
                >
                  See all
                </Animatable.Text>
              </TouchableOpacity>
            </View>
          </>
        }
        // horizontal={true}
        data={product}
        extraData={product}
        refreshing={isLoading}
        numColumns={2}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          return (
            <Animatable.View useNativeDriver animation={leftAnimation} delay={300}>
              <TouchableOpacity
                style={{
                  // backgroundColor: index % 2 == 0 ? '#808080' : '#808080',
                  backgroundColor: '#7A7978',
                  width: width / 2.2,
                  height: height / 3,
                  marginTop: 15,
                  borderRadius: 20,
                  marginLeft: 12,
                }}
                onPress={() => naigation.navigate('Detail', { item: item })}
              >
                <View style={{ flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 18 }}>
                  <Text style={{ color: Color.backgroud, fontWeight: '900', fontSize: 18 }}>
                    ${item.Price}
                  </Text>
                  <TouchableOpacity
                    onPress={() => naigation.navigate('Favourite')}
                    style={{ marginLeft: 75, shadowColor: 'black', elevation: 20 }}
                  >
                    <Love />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    height: height,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: item.Image }}
                    style={{ width: 150, height: 190, borderRadius: 15 }}
                  />
                </View>
              </TouchableOpacity>
            </Animatable.View>
          );
        }}
        ListFooterComponent={<View style={{ height: height / 5 }}></View>}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backgroud,
    width: width,
    height: height,
  },
  FromAccount: {
    width: width,
    height: height / 15,
  },
  FromSearch: {
    width: width,
    height: height / 12,
    paddingHorizontal: 20,
  },
  FromSlideshow: {
    width: width,
    height: height / 3.4,
    paddingHorizontal: 16,
    borderTopLeftRadiusRadius: 30,
  },
  FromListProduct: {
    width: width / 3,
    height: height / 7,
  },
});
