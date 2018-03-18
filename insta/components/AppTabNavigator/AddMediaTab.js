import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class AddMediaTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Ionicons name = "ios-add-circle" size={32} style={{color:tintColor}}/>
    )
  }

  render() {
    return (
      <View style ={styles.container}>
       <Text>Add AddMediaTab</Text>
      </View>
    );
  }
}
export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
