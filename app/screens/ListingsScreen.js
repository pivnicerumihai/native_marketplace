import React from "react";
import { View } from "react-native";

import ListingItemComponent from "../components/ListingItemComponent/ListingItemComponent";
import ScreenComponent from "../components/ScreenComponent/ScreenComponent";

let listings = [
  {
    id: 0,
    imageUri: require("../assets/jacket.jpg"),
    title: "Red Jacket For Sale",
    price: "$100",
  },
  {
    id: 1,
    imageUri: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: "$1000",
  },
];

function ListingsScreen(props) {
  return (
    <ScreenComponent>
      <View>
        {listings.map((item) => {
          return (
            <ListingItemComponent
              key={item.id}
              imageUri={item.imageUri}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </View>
    </ScreenComponent>
  );
}

export default ListingsScreen;
