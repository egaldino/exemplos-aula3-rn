import React, {Component} from 'react';
import {Text} from 'react-native';
import Nome from './Nome';

class Welcome extends Component {
  componentDidMount() {
    console.log('Componente Welcome montado');
  }

  render() {
    return (
      <>
        <Text>
          Seja bem vindo, <Nome nomeDaPessoa={this.props.nome} />
        </Text>
      </>
    );
  }
}

export default Welcome;
