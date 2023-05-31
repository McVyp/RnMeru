import React, {useRef, useCallback} from 'react';
import { Bar, TextInput } from '../atoms';
import AnimatedBox, { AnimatedBoxProps } from '../atoms/animated-box';
import { useAtom } from 'jotai';
import { searchInputHasFocusAtom, searchQueryAtom } from '../states/searchbar';
import {TextInput as RNTextInput} from 'react-native'
import { useAtomCallback } from 'jotai/utils';
import HeaderBarLeftButton from './header-bar-left';

type Props = AnimatedBoxProps &{
    onSideBarToggle: () => any
}

const HeaderBar: React.FC<Props> = props => {
    const {onSideBarToggle, ...rest} = props
    const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
    const [searchInputHasFocus, setSearchInputHasFocus] = useAtom(searchInputHasFocusAtom)
    const refSearchInput = useRef<RNTextInput>(null)
    const handleSearchInputFocus =() => {
        setSearchInputHasFocus(true)

    }

    const handleSearchInputBlur =() => {
        setSearchInputHasFocus(false)
    }

    const handleLeftButtonPress = useCallback(()=>{
        if(searchInputHasFocus) {
            refSearchInput.current?.blur()
        }else {
            onSideBarToggle()
        }
    }, [searchInputHasFocus, onSideBarToggle])

    return (
        <AnimatedBox position="absolute" top={0} left={0} right={0} {...rest}>
            <Bar 
                variant='headerBar' 
                flexDirection='row'
                alignItems='center'
                mx="lg"
                my="md"
                px="sm"
                minHeight={44}
            >   
                <HeaderBarLeftButton 
                    onPress={handleLeftButtonPress}
                    backButtonVisible={searchInputHasFocus}
                />
                <TextInput 
                    ref={refSearchInput} 
                    flex={1} 
                    ml="sm" 
                    fontSize={18} 
                    autoCapitalize="none"
                    color="$foreground"
                    placeholder='Search...'
                    placeholderColor="$fieldInputPlaceholderTextColor"
                    value={searchQuery}
                    onFocus={handleSearchInputFocus}
                    onBlur={handleSearchInputBlur}
                    onChangeText={setSearchQuery}
                />
            </Bar>
        </AnimatedBox>
    )
}

export default HeaderBar