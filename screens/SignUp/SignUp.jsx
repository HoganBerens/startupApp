import {View, Text} from 'react-native';
import Button from '../../components/Button';
import style from './SignUp.style';

const SignUp = props => {
  const handleSignUp = () => {
    props.navigation.navigate('home');
  };

  return (
    <View style={style.signUpContainer}>
      <Text style={style.signUpTitle}>SignUp</Text>
      <Button styles={style} name="Sign-Up" handleButton={handleSignUp} />
    </View>
  );
};
export default SignUp;
