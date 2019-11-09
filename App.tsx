/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
<script src="http://192.168.3.28:8097"></script>
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MyPager from './src/components/Swipers'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MyPager />
    </>
  );
};

export default App;
