import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React, {useCallback} from "react";
import { View } from "react-native";
import { Box, Text } from "../atoms";
import { SafeAreaView } from "react-native-safe-area-context";
import BookList from "./book-list";

const Sidebar: React.FC<DrawerContentComponentProps> =({navigation}) => {
    const handleBookListItemPress = useCallback(()=>{
        navigation.closeDrawer()
    },[navigation])
    return (
        <Box flex={1} bg='$sidebarBackground'>
            <SafeAreaView>
                <Text variant="sidebar" m="lg">lye</Text>
            </SafeAreaView>
            <BookList onPressItem={handleBookListItemPress} />
        </Box>
    )
}

export default Sidebar