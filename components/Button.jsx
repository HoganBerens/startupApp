import {View, TouchableOpacity, Text} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default Button;
