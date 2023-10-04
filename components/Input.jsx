import {View, TextInput, Text} from 'react-native';

const Input = props => {
  return (
    <TextInput>
      <Text>{props.name}</Text>
    </TextInput>
  );
};
export default Input;
