import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Touchable,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('#000000');

  const changeBG = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  const reset = () => {
    let color = '#000000';
    setRandomColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text style={styles.reset}>reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#ffffff',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
  reset: {
    fontSize: 18,
    color: '#ffffff',
    marginVertical: 40,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#BB2aD0',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});
