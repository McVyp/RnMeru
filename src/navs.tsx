import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainScreen from "./screens/main";
import Sidebar from "./components/sidebar";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home() {
    return(
        <Drawer.Navigator initialRouteName="Main"
            screenOptions={{
                drawerType: 'back',
                swipeEdgeWidth: 200
            }}
            drawerContent={props => <Sidebar {...props}/>}
        >
            <Drawer.Screen name="Main"
                component={MainScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    )
}

export default function Navigations(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}