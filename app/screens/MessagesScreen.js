import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import CardComponent from "../components/CardComponent/CardComponent";
import ListItemDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import ScreenComponent from "../components/ScreenComponent/ScreenComponent";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
              onPress={() => console.log("Message Selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          );
        }}
        ItemSeparatorComponent={() => {
          return <ListItemSeparator />;
        }}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MessagesScreen;
