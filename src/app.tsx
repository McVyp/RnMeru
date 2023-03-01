import { NavigationContainer} from "@react-navigation/native";
import {ThemeProvider} from '@shopify/restyle';
import React from "react";
import { Text, View } from "react-native";
import Navigations from "./navs";
import light from "./themes/light";


const App =() => {
    return(
        <NavigationContainer>
            <ThemeProvider theme={light}>
                <Navigations />
            </ThemeProvider>
        </NavigationContainer>
    )
}

export default App;