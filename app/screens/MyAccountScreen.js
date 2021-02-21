import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import AccountOptionsScreen from './AccountOptionsScreen';
import MyMessages from './MessagesScreen';

const Stack = createStackNavigator();

export default function MyAccountScreen() {

    return (
        <Stack.Navigator initialRouteName="Account Options">
            <Stack.Screen name="Account Options" component={AccountOptionsScreen}/>
            <Stack.Screen name="My Messages" component={MyMessages}/>

        </Stack.Navigator>
    );
}
