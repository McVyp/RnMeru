import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React, {useCallback} from "react";
import { View } from "react-native";
import { Box, Text } from "../atoms";
import { SafeAreaView } from "react-native-safe-area-context";
import BookList from "./book-list";
import AppLogo from "./logo";

const Sidebar: React.FC<DrawerContentComponentProps> =({navigation}) => {
    const handleBookListItemPress = useCallback(()=>{
        navigation.closeDrawer()
    },[navigation])
    return (
        <Box flex={1} bg='$sidebarBackground'>
            <SafeAreaView>
                <Box 
                    alignItems="flex-start" 
                    pl="md" 
                    pb="sm" 
                    mt="xs" 
                    borderBottomColor="$sidebarSeparator"
                    borderBottomWidth={1}
                >
                    <AppLogo width={128} height={36} color="$foreground" />
                </Box>
            </SafeAreaView>
            <BookList onPressItem={handleBookListItemPress} />
        </Box>
    )
}

export default Sidebar