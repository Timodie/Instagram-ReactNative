import React, {Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Container,Content, Thumbnail,Header,Left,Right,Body} from 'native-base';
import CardComponent from '../CardComponent';

class HomeTab extends Component {

static navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Ionicons name = "ios-home" size={32} style={{color:tintColor}}/>
  )
}
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Ionicons name = "ios-camera-outline" size = {32}
            style={{paddingLeft:10}}/>
          </Left>
          <Body><Text style={{fontWeight:'bold'}}>Instagram</Text></Body>
          <Right>
              <Ionicons name = "ios-send-outline" size = {32}
              style={{paddingRight:10}}/>
          </Right>
        </Header>
        <Content>
          <View style ={{height:100}}>
            <View style ={{flex:1,flexDirection:'row',
            justifyContent:'space-between', alignItems:'center',
            paddingHorizontal:7}}>
              <Text style={{fontWeight:'bold'}}>Stories</Text>

              <View style ={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name ="md-play" size={14}/>
                <Text style={{fontWeight:'bold'}}>Watch All</Text>
              </View>
            </View>
            <View style={{flex:3}}>
              <ScrollView horizontal={true}
               showHorizontalScrollIndicator={false}>
                <Thumbnail
                  style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}}
                  source = {require('../../assets/guitar.png')}/>
                <Thumbnail
                  style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}}
                  source = {require('../../assets/profilepic.jpg')}/>
                <Thumbnail
                  style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}}
                  source = {require('../../assets/veneziaG.jpg')}/>
                <Thumbnail
                  style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}}
                  source = {require('../../assets/guitar.png')}/>
                <Thumbnail
                  style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}}
                  source = {require('../../assets/profilepic.jpg')}/>
                <Thumbnail
                  style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}}
                  source = {require('../../assets/veneziaG.jpg')}/>
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
});
