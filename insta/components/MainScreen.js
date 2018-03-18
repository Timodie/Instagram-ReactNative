import React, {Component} from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import HomeTab from './AppTabNavigator/HomeTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';
import {TabNavigator} from 'react-navigation';


class MainScreen extends Component {

  componentWillMount(){

  }
  static navigationOptions = {
    // headerLeft : <Ionicons name = "ios-camera-outline" size ={32}
    //   style={{paddingLeft:10}}/>,
    // title : "Instagram",
    // headerRight :<Ionicons name = "ios-send-outline" size = {32}
    //   style={{paddingRight:10}}/>
    header:null
  }

   render() {
     return (
      <AppTabNavigator/>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default MainScreen;

const AppTabNavigator = TabNavigator({
  HomeTab: {
    screen : HomeTab
  },
  SearchTab: {
    screen : SearchTab
  },
  AddMediaTab: {
    screen : AddMediaTab
  },
  LikesTab: {
    screen : LikesTab
  },
  ProfileTab: {
    screen : ProfileTab
  }

},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPosition:"bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    }
  },
  activeTintColor:'#000',
  inactiveTintColor:"d1cece",
  showLabel:false,
  showIcon:true
})
