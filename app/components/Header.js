
import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';


export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('../img/sunglass.jpg')}
          style={styles.cart}
         />
         <Text style={styles.logo}> zaadi </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({

header : {

  position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   backgroundColor: '#03A9F4',
   overflow: 'hidden',
   height: 80
},
cart : {
  width :40,
  height :40,
  borderRadius : 100
},
logo : {
  fontSize : 20,
  marginLeft :10,
  fontStyle:'italic',
  color : '#292929'
},

});
