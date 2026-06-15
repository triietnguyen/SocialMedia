import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFontFamily } from './assets/fonts/helper';
import {
  StyleSheet,
  Text,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Hello World!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontFamily: getFontFamily('Inter_18pt', '500'),
  },
});

export default App;
