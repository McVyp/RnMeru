import React, {useCallback} from 'react';
import { createBox } from "@shopify/restyle";
import { FlatListProps, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import { Theme } from "../themes";
import NoteListItem from "./note-list-item";
import { Note } from "../models";
import NOTES from '../fixtures/notes';
import Animated, {AnimateProps} from 'react-native-reanimated';
import { Box } from '../atoms';

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
    Animated.FlatList
)

interface Props {
    contentInsetTop: number;
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
    onItemPress: (noteID: string) => void
    onItemSwipeLeft: (noteId: string, cancel:() => void) => void
    ListHeaderComponent?: React.ComponentType<any> | null | undefined
}

const NoteList: React.FC<Props> = ({
        onScroll, 
        contentInsetTop, 
        onItemPress, 
        onItemSwipeLeft,
        ListHeaderComponent
    }) =>{
        const renderItem = useCallback(({item}: {item:Note}) => {
        return <NoteListItem {...item } onPress={onItemPress} onSwipeLeft={onItemSwipeLeft}/>
    },[onItemPress, onItemSwipeLeft])

    return (
        <StyledFlatList 
            contentInsetAdjustmentBehavior="automatic"
            data={NOTES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            width="100%"
            onScroll={onScroll}
            scrollEventThrottle={16}
            ListHeaderComponent={
                <Box>
                    <>
                        <Box width="100%" height={contentInsetTop}/>
                        {ListHeaderComponent && <ListHeaderComponent />}
                    </>
                </Box>
                }
        />
    )
}

export default NoteList