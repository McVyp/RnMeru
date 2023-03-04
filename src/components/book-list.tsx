import { ColorProps, createBox } from "@shopify/restyle";
import { Theme } from "../themes";
import {FlatList, FlatListProps} from 'react-native';
import { Book } from "../models";
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import React, {useCallback} from 'react';
import BookListItem from "./book-list-item";
import BOOKS from '../fixtures/books'

const StyledFlatList = createBox<Theme, FlatListProps<Book>>(FlatList)
const StyledBottomSheetFlatList = createBox<Theme, FlatListProps <Book>>(
    BottomSheetFlatList
)

type Props = {
    inBottomSheet?: boolean
    onPressItem: (bookId: string) => void
    headerComponent?: React.FC<any>
} & ColorProps<Theme>

const BookList: React.FC<Props> = ({onPressItem, headerComponent, color, inBottomSheet}) =>{
    const renderItem = useCallback(({item}) =>{
        return <BookListItem {...item} onPress={onPressItem} color={color} />
    },[onPressItem])

    const ListComponent = inBottomSheet ? StyledBottomSheetFlatList : StyledFlatList

    return (
        <ListComponent
            contentInsetAdjustmentBehavior="automatic"
            scrollEventThrottle={16}
            data={BOOKS}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            width="100%"
            pt="sm"
            ListHeaderComponent={headerComponent}
        />
    )
}

export default BookList