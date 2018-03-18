import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Container,Content, Thumbnail,Header,Left,Right,Body,Button} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CardComponent from '../CardComponent';

const romeImages = [
  require('../../assets/rome/rome1.jpg'),
  require('../../assets/rome/rome2.jpg'),
  require('../../assets/rome/rome3.jpg'),
  require('../../assets/rome/rome4.jpg'),
  require('../../assets/rome/rome5.jpg'),
  require('../../assets/rome/rome10.jpg'),
  require('../../assets/rome/rome11.jpg'),
  require('../../assets/rome/rome12.jpg'),
  require('../../assets/rome/rome14.jpg'),
  require('../../assets/rome/rome6.jpg'),
  require('../../assets/rome/rome14.jpg'),
  require('../../assets/rome/rome17.jpg'),
  require('../../assets/rome/rome16.jpg'),
  require('../../assets/rome/rome17.jpg'),
  require('../../assets/rome/rome18.jpg')
];
const veniceImages = [
  require('../../assets/rome/rome14.jpg'),
  require('../../assets/rome/rome17.jpg'),
  require('../../assets/rome/rome16.jpg'),
  require('../../assets/rome/rome17.jpg'),
  require('../../assets/rome/rome18.jpg')
];
var {width,height} = Dimensions.get('window');

class ProfileTab extends Component {

constructor(props) {
    super(props);
    this.state ={
      activeIndex:0
    }
  }


  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Ionicons name = "ios-person" size={32} style={{color:tintColor}}/>
    )
  }
  segmentClicked = (index) => {
    this.setState({
      activeIndex:index
    })
  }

  renderSectionOne(){
    return romeImages.map((image,index) => {
      return (
        <View key={index} style ={[{width :(width/3)},{height:(width)/3},
          index % 3 !=0 ? {paddingLeft:2} : {paddingLeft:0},{marginBottom:2}]} >
          <Image style ={{flex:1,width:undefined,height:undefined}}
          source = {image}/>
        </View>
      )
    })
  }

renderSectionThree() {
  return veniceImages.map((image,index) => {
    return (
      <View key={index} style ={[{width :(width/3)},{height:(width)/3},
        index % 3 !=0 ? {paddingLeft:2} : {paddingLeft:0},{marginBottom:2}]} >
        <Image style ={{flex:1,width:undefined,height:undefined}}
        source = {image}/>
      </View>
    )
  })
}

  renderSection() {
    if (this.state.activeIndex == 0 ){
      return (
        <View style ={{flexDirection:'row',flexWrap:'wrap'}}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent imageSource="1" likes ="101"/>
          <CardComponent imageSource="2" likes ="201"/>
          <CardComponent imageSource="3" likes ="301"/>
        </View>
      );
    }
    if (this.state.activeIndex == 2) {
      return (
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          {this.renderSectionThree()}
        </View>
      )
    }
    if (this.state.activeIndex == 3) {
      return (
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          {this.renderSectionThree()}
        </View>
      )
    }


  }

  /*
    content is a scroll view which will cover the entire view
    first view is the top half with user info
  */

  render() {
    return (
      <Container style={{flex:1,backgroundColor:'white'}}>
      <Header>
        <Left>
          <Ionicons name = "md-person-add" size = {24}
          style={{paddingLeft:10}}/>
        </Left>
        <Body><Text>taddaifor</Text></Body>
        <Right>
            <Ionicons name="ios-time-outline" size = {32}
            style={{paddingRight:10}}/>
        </Right>
      </Header>
      <Content>
        <View style = {{paddingTop:10}}>
          <View style={{flexDirection:'row' , alignItems:'center'}}>
            <View style={{flex:1}}>
              <Image source = {require('../../assets/profilepic.jpg')}
                style={{width: 75, height:75, borderRadius:37.5}}/>
            </View>
            <View style={{flex:3}}>
              <View style = {{flexDirection:'row',justifyContent:'space-around'}}>
                <View style ={{alignItems:'center'}}>
                    <Text>20</Text>
                    <Text style ={{fontSize:10,color:'grey'}}>posts</Text>
                </View>
                <View style ={{alignItems:'center'}}>
                    <Text>20</Text>
                    <Text style ={{fontSize:10,color:'grey'}}>followers</Text>
                </View>
                <View style ={{alignItems:'center'}}>
                    <Text>20</Text>
                    <Text style ={{fontSize:10,color:'grey'}}>following</Text>
                </View>
              </View>
              <View style ={{flexDirection:'row',paddingTop:10}}>
                <Button bordered dark style= {{flex:3,
                  marginLeft:10,justifyContent:'center',height:30}}>
                  <Text>Edit Profile</Text>
                </Button>

                <Button bordered dark style= {{flex:1,
                  marginLeft:5,marginRight:10,justifyContent:'center',height:30}}>
                  <Ionicons name = "ios-settings" size = {24}/>
                </Button>

              </View>

            </View>
          </View>
          <View style = {{paddingVertical:10,paddingHorizontal:10}}>
            <Text style ={{fontWeight:'bold'}}>Tim Addai</Text>
            <Text>JW | Computer Guru | Musician | Polyglot</Text>
            <Text>www.timaddai.com</Text>
          </View>
        </View>

        <View>
          <View style = {{flexDirection:'row',
            justifyContent:'space-around',
            borderTopWidth:1,borderColor:'#eae5e5'}}>

            <Button transparent style={{paddingHorizontal:25}}
              onPress = {() => this.segmentClicked(0)}
              active={this.state.activeIndex == 0}>

              <Ionicons name = "ios-apps-outline"
              size={24}
              color='#53befc'
              style ={[this.state.activeIndex == 0 ? {}: {color:'grey'}]}/>
            </Button>

            <Button transparent style={{paddingHorizontal:25}}
              onPress = {() => this.segmentClicked(1)}
              active={this.state.activeIndex == 1}>

              <Ionicons name = "ios-list-outline"
              size={24}
              color='#53befc'
              style ={[this.state.activeIndex == 1 ? {}: {color:'grey'}]}/>
            </Button>

            <Button transparent style={{paddingHorizontal:25}}
              onPress = {() => this.segmentClicked(2)}
              active={this.state.activeIndex == 2}>

              <Ionicons name = "ios-people-outline"
              size={24} color='#53befc'
              style ={[this.state.activeIndex == 2 ? {}: {color:'grey'}]}/>
            </Button>
            <Button transparent style={{paddingHorizontal:25}}
              onPress = {() => this.segmentClicked(3)}
              active={this.state.activeIndex == 3}>

              <Ionicons name = "ios-bookmark-outline"
              size={24}
              color='#53befc'
              style ={[this.state.activeIndex == 3 ? {}: {color:'grey'}]}/>
            </Button>
          </View>
          {this.renderSection()}
        </View>
      </Content>
      </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
