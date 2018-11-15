import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
const data = [
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Kurtas-7161517899041331-4.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Kurtas-7161517899041331-5.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Kurtas-7161517899041331-5.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Kurtas-7161517899041331-4.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Green-Yellow-Floral-Print-Anarkali-Kurta-5741519390187176-1.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Green-Yellow-Floral-Print-Anarkali-Kurta-5741519390187176-3.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-3.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Green-Yellow-Floral-Print-Anarkali-Kurta-5741519390187176-3.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Green-Yellow-Floral-Print-Anarkali-Kurta-5741519390187176-3.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Green-Yellow-Floral-Print-Anarkali-Kurta-5741519390187176-3.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Green-Yellow-Floral-Print-Anarkali-Kurta-5741519390187176-3.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  },
  {
    imgUrl:
      "https://vizzve.com/wp-content/uploads/2018/07/Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
    name: "Mitera",
    details: "Embroidered Saree",
    price: "$1,575",
    olderprice: "$1750",
    offer: "10% OFF"
  }
];

export default class ProductList extends React.Component {
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,

          borderWidth: 0.25,
          borderColor: "grey",

          height: Dimensions.get("window").height / 2
        }}
        onPress={() => Actions.detail()}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.8,
              backgroundColor: "lightgrey",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={{ uri: item.imgUrl }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View
            style={{
              flex: 0.2,
              backgroundColor: "#fff",
              padding: 8,
              flexDirection: "column"
            }}
          >
            <View style={{ flex: 0.35, flexDirection: "row" }}>
              <View style={{ flex: 0.8 }}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
              <View style={{ flex: 0.2 }}>
                <View
                  style={{
                    width: 30,
                    height: 20,
                    backgroundColor: "green",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={styles.rating}> 4.5 </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 0.3, justifyContent: "flex-start" }}>
              <Text style={styles.itemDetails}>{item.details}</Text>
            </View>
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={styles.itemPrice}>{item.price} </Text>
              <Text style={styles.itemOlderPrice}>{item.olderprice} </Text>
              <Text style={styles.itemOffer}>{item.offer} </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        data={data}
        style={styles.container}
        style={styles.containerq}
        renderItem={this.renderItem}
        numColumns={2}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },

  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    fontWeight: "bold"
  },
  itemName: {
    fontSize: 18,
    color: "grey"
  },
  itemDetails: {
    color: "lightgrey"
  },
  itemPrice: {
    fontWeight: "bold"
  },
  itemOlderPrice: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "grey"
  },
  rating: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold"
  },

  itemOffer: {
    color: "red"
  }
});
