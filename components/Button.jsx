import {View, TouchableOpacity, Text} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={props.styles.button} onPress={props.handleButton}>
      <Text style={props.styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default Button;
