import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class LikesTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Ionicons name = "ios-heart" size={32} style={{color:tintColor}}/>
    )
  }

  render() {
    return (
      <View style ={styles.container}>
       <Text>LikesTab</Text>
      </View>
    );
  }
}
export default LikesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
