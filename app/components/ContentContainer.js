import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import CustomImage from "./customimage";
import Swiper from "react-native-swiper";
import { Actions } from "react-native-router-flux";
const { width, height } = Dimensions.get("window");
export default class ContentContainer extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ width, height: 180, backgroundColor: "red" }}>
          <Swiper autoplay style={styles.wrapper}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.column2}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/hai.jpeg")}
              header="Dresses"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.column1}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/Blouses.jpg")}
              header="Blouses"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentBanner}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage imageSource={require("../img/sale.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.column1}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/tshirt.jpg")}
              header="T-Shirts"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.column2}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/bottom.jpg")}
              header="Bottoms"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contentBanner}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/jacket.jpg")}
              header="Jackets"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.column1}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/saree.jpg")}
              header="Sarees"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.column2}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/kids.jpg")}
              header="Kids Wear"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.column2}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/inner.jpg")}
              header="Inners"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentBanner}
            onPress={() => Actions.poductlist()}
          >
            <CustomImage
              imageSource={require("../img/acc.jpg")}
              header="Accessories"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",

    padding: 5
  },
  column1: {
    width: "100%",
    padding: 5,
    flex: 0.5
  },
  column2: {
    padding: 2,

    flex: 0.5
  },
  contentBanner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
