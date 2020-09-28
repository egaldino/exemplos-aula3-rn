import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class LigadoDesligado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLigado: true,
    };
  }

  //   checaSeEstaLigado() {
  //     if (this.state.isLigado) {
  //       return 'On';
  //     }
  //     return 'Off';
  //   }

  render() {
    return (
      <View style={{margin: 12, alignItems: 'center'}}>
        <Text> {this.state.isLigado ? 'On' : 'Off'} </Text>
        <Button
          title={this.state.isLigado ? 'Desligar' : 'Ligar'}
          onPress={() => this.setState({isLigado: !this.state.isLigado})}
        />
      </View>
    );
  }
}

export default LigadoDesligado;
