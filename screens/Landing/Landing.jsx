import React, {useState} from 'react';
import {View, Text} from 'react-native';
import style from './Landing.style';
import Button from '../../components/Button';

const Landing = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('login');
  };

  const handleSignUp = () => {
    navigation.navigate('signUp');
  };

  return (
    <View style={style.landingContainer}>
      <Text style={style.landingTitle}>Landing Page Picture</Text>
      <View style={style.landingButtonContainer}>
        <Button styles={style} name="Login" handleButton={handleLogin} />
        <Button styles={style} name="Sign-up" handleButton={handleSignUp} />
      </View>
    </View>
  );
};
export default Landing;
