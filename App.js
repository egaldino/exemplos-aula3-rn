/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Welcome from './src/components/Welcome';
import LigadoDesligado from './src/components/LigadoDesligado';

const App = () => {
  return (
    <>
      <Welcome nome="Diego" />
      <Welcome nome="Maycon" />
      <Welcome nome="Gabriela" />

      <LigadoDesligado />
    </>
  );
};

//const styles = StyleSheet.create({});

export default App;
