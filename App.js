import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from './components/Title/Title';

const App = () => {
  return (
    <SafeAreaView>
      <Title title={'Let’s Explore'} />
    </SafeAreaView>
  );
};
export default App;
