import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './Landing.style';
import Button from '../../components/Button';

const Landing = navigation => {
  const [log, setLog] = useState(false);
  const handleAgent = () => {
    navigation.navigate('agentHome');
  };

  const handleClient = () => {
    setLog(true);
  };

  return (
    <View style={style.container}>
      <Text>Landing Page</Text>
      <Button name="Agent" onPress={handleAgent} />
      <Button name="Client" onPress={handleClient} />
      <TouchableOpacity onPress={handleClient}>
        <Text>hogan</Text>
      </TouchableOpacity>
      {log ? <Text>Howdy</Text> : <Text>Nothing</Text>}
    </View>
  );
};
export default Landing;
