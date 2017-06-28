import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Cancel extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    if (!this.props.return) {
      console.log("Not yet loaded");
    } else {
      this.props.return();
    }
  }

  render(){
    console.log(this.props);
    return(
      <View style={styles.container}>
        <Button
         title='Cancel'
         onPress={this.handleClick}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {

  }
});

AppRegistry.registerComponent('Cancel', () => Cancel);
