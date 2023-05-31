import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React, {useCallback} from "react";
import { Box, Text } from "../atoms";
import { FlatListProps, FlatList, SafeAreaView } from "react-native";
import BookList from "./book-list";
import AppLogo from "./logo";
import { useAtom } from "jotai";
import { createBox } from "@shopify/restyle";
import activeThemeId from "../states/theme";
import { Theme, ThemeMeta, ThemeNames, themes } from "../themes";
import ThemeListItem from "./theme-list-item";

const StyledFlatList= createBox<Theme, FlatListProps<ThemeMeta>>(FlatList)
const Sidebar: React.FC<DrawerContentComponentProps> =({navigation}) => {
    // const handleBookListItemPress = useCallback(()=>{
    //     navigation.closeDrawer()
    // },[navigation])
    const [,setActiveTheme] = useAtom(activeThemeId)
    const handleThemeItemPress = useCallback((selectedThemeId: ThemeNames)=>{
        setActiveTheme(selectedThemeId)
    },[])

    const renderThemeItem = useCallback(({item}: {item:ThemeMeta})=>{
        return <ThemeListItem theme={item} onPress={handleThemeItemPress}/>
    },[handleThemeItemPress])

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
            {/* <BookList onPressItem={handleBookListItemPress} /> */}
            <StyledFlatList ListHeaderComponent={()=>(
                <Box p="lg" alignItems="flex-start">
                    <Text color="$sidebarForeground" fontWeight="bold">UI Themes</Text>
                </Box>
            )}
            data={themes}
            keyExtractor={(t: ThemeMeta) => t.id}
            renderItem={renderThemeItem}
            />
        </Box>
    )
}

export default Sidebar