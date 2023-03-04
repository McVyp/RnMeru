import { NavigationContainer} from "@react-navigation/native";
import {ThemeProvider} from '@shopify/restyle';
import React from "react";
import { Text, View } from "react-native";
import Navigations from "./navs";
import light from "./themes/light";
import StatusBar from "./components/status-bar";


const App =() => {
    return(
        <NavigationContainer>
            <ThemeProvider theme={light}>
                <StatusBar />
                <Navigations />
            </ThemeProvider>
        </NavigationContainer>
    )
}

export default App;