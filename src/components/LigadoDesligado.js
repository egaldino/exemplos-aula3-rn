import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const LigadoDesligado = () => {
  const [isLigado, setIsLigado] = useState(false);
  const [textoEstado, setTextoEstado] = useState('Off');
  const [textoBotao, setTextoBotao] = useState('Ligar');

  useEffect(() => {
    if (isLigado) {
      setTextoEstado('On');
      setTextoBotao('Desligar');
    } else {
      setTextoEstado('Off');
      setTextoBotao('Ligar');
    }
  }, [isLigado]);

  return (
    <View style={{margin: 12, alignItems: 'center'}}>
      <Text> {textoEstado} </Text>
      <Button title={textoBotao} onPress={() => setIsLigado(!isLigado)} />
    </View>
  );
};

export default LigadoDesligado;
