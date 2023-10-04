import {View, Text} from 'react-native';
import Button from '../../components/Button';
import style from './Login.style';

const Login = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('home');
  };
  return (
    <View>
      <Text>Login</Text>
      <Button styles={style} name="Login" handleButton={handleLogin} />
    </View>
  );
};
export default Login;
