import React, {useCallback} from 'react';
import { createBox } from "@shopify/restyle";
import {FlatList, FlatListProps} from 'react-native';
import { Theme } from "../themes";
import NoteListItem from "./note-list-item";
import { Note } from "../models";
import NOTES from '../fixtures/notes';

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)

interface Props {

}

const NoteList: React.FC<Props> = () =>{
    const renderItem = useCallback(({item}) => {
        return <NoteListItem {...item }/>
    },[])

    return (
        <StyledFlatList 
            contentInsetAdjustmentBehavior="automatic"
            data={NOTES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            width="100%"
        />
    )
}

export default NoteList