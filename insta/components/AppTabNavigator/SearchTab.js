import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SearchTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Ionicons name = "ios-search" size={32} style={{color:tintColor}}/>
    )
  }

  render() {
    return (
      <View style ={styles.container}>
       <Text>SearchTab</Text>
      </View>
    );
  }
}

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
