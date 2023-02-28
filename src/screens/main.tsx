import React from "react";
import { Text, View } from "react-native";

export default function MainScreen() {
    return(
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Hi, lye!</Text>
        </View>
    )
}