
import React from 'react';
import { StyleSheet, Text, Image, View,ScrollView,Dimensions,TouchableOpacity,Linking} from 'react-native';
import CustomImage from './customimage';
const {width,height}=Dimensions.get('window')
export default class Productdetails extends React.Component {
  _pressCall=()=>{
    const url='tel:+918281020996'
    Linking.openURL(url)
}
  render() {
    return (
  <View style={{flex:1}}>
      <ScrollView style={styles.contentContainer}>
        <View style={{width:width,height:height-180,backgroundColor:"#fff"}}>
           <Image style={{width:width,height:height-180}} source={require('../img/hai.jpeg')}/>
        </View>

        <View style={{flex:1,width:width,height:180,backgroundColor:"#fff",padding:10}}>
          <View style={{flex:0.48,backgroundColor:"#FFF"}}>
           <Text style={styles.name}>Mitera </Text>
           <Text style={styles.details}>Embroidered Saree </Text>
          </View>
             <View style={{flex:0.9,backgroundColor:"#fff",flexDirection:'row'}}>
               <Text style={styles.price}> $1,575 </Text>
               <Text style={styles.olderprice}> $1750 </Text>
               <Text style={styles.offer}> (10% OFF) </Text>
             </View>
        </View>


      </ScrollView>

  <TouchableOpacity
   style={{width:width,height:60,backgroundColor:"teal",position:"absolute",bottom:0,left:0,right:0,alignItems:'center',justifyContent:'center'}}
    onPress={this._pressCall}
   >

  <Text style={styles.book}> Call Now </Text>
  </TouchableOpacity>

</View>
    );
  }
}
const styles = StyleSheet.create({

    contentContainer :{
    paddingVertical: 20

  },
  name:{
    fontSize:18,
    color : 'black'

  },
  details:{
    color : 'grey'
  },
  price:{
    fontWeight:'bold'

  },
  olderprice :{
    textDecorationLine: 'line-through',
     textDecorationStyle: 'solid',
     color:'grey',
     marginHorizontal:8
   },
   offer :{
     color : 'red'
   },
   book :{

     color:'#fff',
     fontWeight:'bold',
     fontSize:20
   },

});
