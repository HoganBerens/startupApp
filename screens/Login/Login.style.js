import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  landingContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#0047AB',
  },
  landingTitle: {
    fontSize: 24,
    marginBottom: 400,
    color: '#FAF9F6',
    paddingTop: 50,
  },
  landingButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    minWidth: '80%',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    padding: 12,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
});

export default style;
