import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Color from './Color';
//c1
export const Love = () => {
  return (
    <AntDesign
      name="heart"
      style={{
        fontSize: 24,
        color: Color.switch,
      }}
    />
  );
};

export const Shoppingbags = () => {
  return <FontAwesome5 name="shopping-bag" style={{ fontSize: 24, color: Color.backgroud }} />;
};

export const Circle = () => {
  return <FontAwesome name="linux" style={{ fontSize: 24, color: 'black' }} />;
};

export const Arrow = () => {
  return <AntDesign name="arrowleft" style={{ fontSize: 30, marginTop: 10, color: '#c0c0c0' }} />;
};

export const DeteleTop = () => {
  return <AntDesign name="delete" style={{ fontSize: 30, marginTop: 10, color: 'white' }} />;
};

export const Sex = () => {
  return (
    <AntDesign name="caretdown" style={{ fontSize: 18, color: Color.backgroud, marginLeft: 10 }} />
  );
};

export const Detele = () => {
  return <Feather name="x-circle" style={{ fontSize: 30, marginTop: 5, color: '#c0c0c0' }} />;
};

export const Dotsthree = () => {
  return (
    <Entypo name="dots-three-vertical" style={{ fontSize: 25, marginTop: 10, color: '#c0c0c0' }} />
  );
};

export const Date = () => {
  return (
    <MaterialIcons
      name="date-range"
      style={{ fontSize: 25, marginLeft: 10, color: Color.backgroud }}
    />
  );
};

export const Phone = () => {
  return <Feather name="phone" style={{ fontSize: 20, color: Color.backgroud }} />;
};

export const Email = () => {
  return <Fontisto name="email" style={{ fontSize: 20, color: Color.backgroud }} />;
};

export const Telegram = () => {
  return <EvilIcons name="sc-telegram" style={{ fontSize: 30, color: Color.backgroud }} />;
};

export const Chevron = () => {
  return (
    <Entypo name="chevron-right" style={{ fontSize: 25, marginLeft: 230, color: Color.switch }} />
  );
};

export const OTP = () => {
  return (
    <MaterialCommunityIcons
      name="phone-refresh-outline"
      style={{ fontSize: 30, marginLeft: 15, color: 'gray', marginTop: 20 }}
    />
  );
};

export const Edit = () => {
  return <AntDesign name="edit" style={{ fontSize: 25, color: 'gray' }} />;
};

export const Save = () => {
  return <Entypo name="save" style={{ fontSize: 25, color: Color.buttom }} />;
};

export {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Fontisto,
  Octicons,
  AntDesign,
  Entypo,
  Feather,
  EvilIcons,
};
