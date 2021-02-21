import React, {useState} from "react";

import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import ScreenComponent from "./app/components/ScreenComponent/ScreenComponent";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import defaultStyles from "./app/config/styles";
import NewListingButtonComponent from "./app/components/NewListingButtonComponent/NewListingButtonComponent";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    const [isLogged,
        setisLogged] = useState(true);

    return (
        <ScreenComponent>
            {!isLogged
                ? (
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen name="Home" component={WelcomeScreen}></Stack.Screen>
                            <Stack.Screen name="Log In" component={LoginScreen}></Stack.Screen>
                            <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
                        </Stack.Navigator>
                    </NavigationContainer>
                )
                : (
                    <NavigationContainer>
                        <Tab.Navigator
                            tabBarOptions={{
                            activeTintColor: defaultStyles.colors.primary
                        }}
                            screenOptions={({route}) => {
                            return {
                                tabBarIcon: ({focused, color, size}) => {
                                    let iconName;
                                    if (route.name === "Feed") {
                                        iconName = "home";
                                    } else if (route.name === "Account") {
                                        iconName = "account";
                                    } else if (route.name === 'Account') {}
                                    return (<MaterialCommunityIcons
                                        name={iconName}
                                        size={size}
                                        color={focused
                                        ? defaultStyles.colors.primary
                                        : defaultStyles.colors.medium}/>);
                                }
                            };
                        }}>
                            <Tab.Screen name="Feed" component={ListingsScreen}></Tab.Screen>
                            <Tab.Screen
                                name="Add"
                                component={ListingEditScreen}
                                options={({navigation}) => ({
                                tabBarButton: () => <NewListingButtonComponent
                                    onPress={() => {
                                    navigation.navigate('Add')
                                }}/>,
                                tabBarIcon: ({color, size}) => {
                                    return (<MaterialCommunityIcons name='plus-circle' color={color} size={size}/>)
                                }
                            })}></Tab.Screen>
                            <Tab.Screen name="Account" component={MyAccountScreen}></Tab.Screen>
                        </Tab.Navigator>
                    </NavigationContainer>
                )}
        </ScreenComponent>

    );
}
