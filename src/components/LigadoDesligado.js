import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const LigadoDesligado = () => {
  const [isLigado, setIsLigado] = useState(false);

  return (
    <View style={{margin: 12, alignItems: 'center'}}>
      <Text> {isLigado ? 'On' : 'Off'} </Text>
      <Button
        title={isLigado ? 'Desligar' : 'Ligar'}
        onPress={() => setIsLigado(!isLigado)}
      />
    </View>
  );
};

export default LigadoDesligado;
