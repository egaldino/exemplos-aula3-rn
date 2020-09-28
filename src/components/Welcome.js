import React from 'react';
import {Text} from 'react-native';
import Nome from './Nome';

//props -> props.nome
const Welcome = ({nome}) => {
  return (
    <>
      <Text>
        Seja bem vindo, <Nome nomeDaPessoa={nome} />
      </Text>
    </>
  );
};

export default Welcome;
