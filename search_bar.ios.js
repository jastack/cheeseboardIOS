import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: '#e6e6e6',
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: 'center',
      search: false
    };
  }

  render(){
    return(
      <View style={styles.container}>
      <TextInput
        style={[styles.input,
          {backgroundColor: this.state.backgroundColor,
           marginLeft: this.state.marginLeft,
           marginRight: this.state.marginRight,
           textAlign: this.state.textAlign}]}
        placeholder="Search for pizza!"
        value={this.state.text}
        onChangeText={(text) => this.props.pizzaArray(text)}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 30,
    width: '60%',
    marginTop: 27,
    borderRadius: 15,
    paddingLeft: 10,
  }
});

AppRegistry.registerComponent('SearchBar', () => SearchBar);
