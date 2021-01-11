import React from "react";
import { View } from "react-native";

import ScreenComponent from "../components/ScreenComponent/ScreenComponent";
import AccountInfoComponent from "../components/AccountInfoComponent/AccountInfoComponent";
import OptionComponent from "../components/OptionComponent/OptionComponent";

import colors from "../config/colors";

function MyAccountScreen(props) {
  return (
    <ScreenComponent>
      <View>
        <AccountInfoComponent
          imageUri={require("../assets/mosh.jpg")}
          username={"Mihai Pivniceru"}
          emailAddress={"mcpivniceru@gmail.com"}
        ></AccountInfoComponent>
        <View style={{ marginTop: 20 }}>
          <OptionComponent
            iconUri={"format-list-bulleted"}
            optionName={"My Listings"}
            backgroundColor={colors.primary}
          ></OptionComponent>
          <OptionComponent
            iconUri={"email"}
            optionName={"My Messages"}
            backgroundColor={colors.secondary}
          ></OptionComponent>
          <OptionComponent
            iconUri={"logout"}
            optionName={"Log Out"}
            backgroundColor={colors.warning}
          ></OptionComponent>
        </View>
      </View>
    </ScreenComponent>
  );
}

export default MyAccountScreen;
