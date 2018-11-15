
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';


import ImageOverlay from './ImageOverlay';
export default class Banner extends React.Component {
  render() {
    return (
        <ImageBackground source={require('../img/sunglass.jpg')}
         style= {styles.banner} >

         <ImageOverlay
          header=' React Native  '
          paragraph=' Zaadi ' />
        </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({

banner: {
  width : '100%',
  height : 300,
  alignItems:'center',
  justifyContent:'center'

},

});
