import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import PickerItemComponent from "../PickerItemComponent/PickerItemComponent";
import ScreenComponent from "../ScreenComponent/ScreenComponent";
import colors from "../../config/colors";

function AppPickerComponent({
  icon,
  items,
  width,
  placeholder,
  onSelectItem,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          {selectedItem ? (
            <Text style={[defaultStyles.text, styles.text]}>
              {selectedItem.label}
            </Text>
          ) : 
          (
            <Text style={[defaultStyles.text, styles.text]}>{placeholder}</Text>
          )
          }

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <ScreenComponent>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {items.map((item) => {
              return (
                <PickerItemComponent
                  style={styles.pickerItem}
                  key={item.id}
                  label={item.label}
                  icon={item.icon}
                  backgroundColor={item.backgroundColor}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              );
            })}
          </ScrollView>
        </ScreenComponent>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    alignSelf: "center",
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
  text: {
    flex: 1,
    color: colors.medium,
  },
  pickerItem: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    height: "35%",
  },
});
export default AppPickerComponent;
