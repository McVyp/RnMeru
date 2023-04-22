import { Theme } from "../themes";
import React, { forwardRef } from "react";
import { BackgroundColorProps, BackgroundColorShorthandProps, ColorProps, TypographyProps, SpacingProps, SpacingShorthandProps, LayoutProps, composeRestyleFunctions, spacing, color, spacingShorthand,  backgroundColor, backgroundColorShorthand, typography, layout, border, BorderProps, useRestyle, useTheme, useResponsiveProp, ResponsiveValue } from "@shopify/restyle";
import {Text as RNTextInput} from 'react-native'

type RestyleProps = SpacingProps<Theme> &
SpacingShorthandProps<Theme> &
BackgroundColorProps<Theme> &
BorderProps<Theme>&
BackgroundColorShorthandProps<Theme> &
ColorProps<Theme> &
TypographyProps<Theme> &
LayoutProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    color,
    spacing,
    spacingShorthand,
    border,
    backgroundColor,
    backgroundColorShorthand,
    typography,
    layout
])

type TextInputProps = React.ComponentPropsWithRef<typeof RNTextInput> & RestyleProps & {
    placeholderColor?: ResponsiveValue<keyof Theme['colors'], Theme>
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
    ( {placeholderColor, ...rest}, ref) => {
        const props = useRestyle(restyleFunctions, rest as any) 
        const theme = useTheme<Theme>()
        const placeholderTextColorProp = placeholderColor && useResponsiveProp(placeholderColor)
        const placeholderTextColorValue = placeholderTextColorProp && theme.colors[placeholderTextColorProp]

        return (
            <RNTextInput ref={ref} {...props} placeholderTextColor={placeholderTextColorValue} />
        )  
    }
)
export default TextInput