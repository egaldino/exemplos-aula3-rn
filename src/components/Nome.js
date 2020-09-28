import React, {Component} from 'react';
import {Text} from 'react-native';

class Nome extends Component {
  render() {
    return <Text>{this.props.nomeDaPessoa}</Text>;
  }
}

export default Nome;
