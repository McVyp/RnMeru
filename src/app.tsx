import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";


const App =() => {
    return(
        <NavigationContainer>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>Hello, There</Text>
            </View>
        </NavigationContainer>
    )
}

export default App;