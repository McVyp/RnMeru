import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import Navigations from "./navs";


const App =() => {
    return(
        <NavigationContainer>
            <Navigations />
        </NavigationContainer>
    )
}

export default App;