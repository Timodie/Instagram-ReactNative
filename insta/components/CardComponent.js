import React, {Component} from 'react';

import { StyleSheet, Text, View ,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Card,CardItem,Thumbnail,Body,Left,Right,Button} from 'native-base';
class CardComponent extends Component {


  render() {
    const images = {
      "1":require('../assets/feedImages/1.jpg'),
      "2":require('../assets/feedImages/2.jpg'),
      "3":require('../assets/rome/rome17.jpg')

    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source = {require('../assets/profilepic.jpg')}/>
            <Body>
              <Text>Timurphy</Text>
              <Text>Jan 20,2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source ={images[this.props.imageSource]}
            style={{height:200,width:null,flex:1}}/>
        </CardItem>
        <CardItem style={{height:45}}>
          <Left>
            <Button transparent>
              <Ionicons name ="ios-heart-outline" size={24}
              style={{color:'black'}}/>
            </Button>
            <Button transparent>
              <Ionicons name ="ios-chatbubbles-outline" size={24}
              style={{color:'black'}}/>
            </Button>
            <Button transparent>
              <Ionicons name ="ios-send-outline" size={24}
              style={{color:'black'}}/>
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{height:20}}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight:"900"}}>Timurphy </Text>
              Nulla cursus fringilla lorem at dapibus.
              Maecenas quis porttitor mauris.
              Donec interdum porta metus. Nunc tempor mollis venenatis.
               Donec arcu orci, convallis quis risus et, lacinia dictum est.
               Nulla facilisi. Phasellus lacus lectus, aliquet in scelerisque
               vitae, viverra in justo. Nulla sagittis scelerisque purus,
               at egestas risus egestas eget.

            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
