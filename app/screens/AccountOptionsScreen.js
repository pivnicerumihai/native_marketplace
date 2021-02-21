import React from "react";
import {View} from "react-native";

import ScreenComponent from "../components/ScreenComponent/ScreenComponent";
import AccountInfoComponent from "../components/AccountInfoComponent/AccountInfoComponent";
import OptionComponent from "../components/OptionComponent/OptionComponent";

import colors from "../config/colors";

export default function AccountOptionsScreen({navigation}) {

    return (
        <ScreenComponent>
            <View>
                <AccountInfoComponent
                    imageUri={require("../assets/mosh.jpg")}
                    username={"Mihai Pivniceru"}
                    emailAddress={"mcpivniceru@gmail.com"}></AccountInfoComponent>
                <View style={{
                    marginTop: 20
                }}>
                    <OptionComponent
                        iconUri={"format-list-bulleted"}
                        optionName={"My Listings"}
                        backgroundColor={colors.primary}></OptionComponent>
                    <OptionComponent
                        iconUri={"email"}
                        optionName={"My Messages"}
                        backgroundColor={colors.secondary}
                        onPress={() => navigation.navigate("My Messages")}></OptionComponent>
                    <OptionComponent
                        iconUri={"logout"}
                        optionName={"Log Out"}
                        backgroundColor={colors.warning}></OptionComponent>
                </View>
            </View>
        </ScreenComponent>
    );
}
