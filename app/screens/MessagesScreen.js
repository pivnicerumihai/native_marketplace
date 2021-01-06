import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import CardComponent from "../components/CardComponent/CardComponent";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import ScreenComponent from "../components/ScreenComponent/ScreenComponent";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <ScreenComponent>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => {
          return (
            <CardComponent
              title={item.title}
              subtitle={item.description}
              imageUri={item.image}
            />
          );
        }}
        ItemSeparatorComponent={() => {
          return <ListItemSeparator />;
        }}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MessagesScreen;
