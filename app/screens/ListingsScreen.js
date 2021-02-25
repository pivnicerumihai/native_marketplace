import React, {useState, useEffect} from "react";
import { Text, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import listingsApi from '../api/listings';

import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import ListingItemComponent from "../components/ListingItemComponent/ListingItemComponent";
import ScreenComponent from "../components/ScreenComponent/ScreenComponent";
import ActivityIndicatorComponent from '../components/ActivityIndicatorComponent/ActivityIndicatorComponent'

import useApi from '../hooks/useApi';

import defaultStyles from '../config/styles'

function ListingsScreen() {
    const {data: listings, error, loading, request:loadListings}  = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, [])

  

    return (
        <ScreenComponent>
            {error && <>
            <Text> Couldn't retrieve the listings.</Text>
            <ButtonComponent title="Retry" color={defaultStyles.colors.primary} onPress={loadListings}></ButtonComponent>
            </>}
            <ActivityIndicatorComponent visible={loading}/>
            <ScrollView>
                <View>
                    {listings.map((item) => {
                        return (<ListingItemComponent
                            key={item.id}
                            imageUri={item.images[0].url}
                            title={item.title}
                            subtitle={item.subtitle}/>);
                    })}
                </View>
            </ScrollView>
        </ScreenComponent>
    );
}

export default ListingsScreen;
