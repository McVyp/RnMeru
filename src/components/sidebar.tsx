import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
import { Box, Text } from "../atoms";
import { SafeAreaView } from "react-native-safe-area-context";

const Sidebar: React.FC<DrawerContentComponentProps> =() => {
    return (
        <Box flex={1} bg='$sidebarBackground'>
            <SafeAreaView>
                <Text variant="sidebar" m="lg">lye</Text>
            </SafeAreaView>
        </Box>
    )
}

export default Sidebar