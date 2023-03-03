import { 
    BackgroundColorProps, 
    BackgroundColorShorthandProps, 
    OpacityProps, 
    BorderProps, 
    composeRestyleFunctions, 
    backgroundColor, 
    backgroundColorShorthand, 
    border, 
    opacity, 
    ResponsiveValue,
    useRestyle,
    useTheme,
    useResponsiveProp
} from '@shopify/restyle';
import React from 'react';
import { Theme } from '../themes';
import Pressable, {PressableProps} from './pressable';
import {Platform} from 'react-native'

type RestyleProps = BackgroundColorProps<Theme> &
BackgroundColorShorthandProps<Theme> &
BorderProps<Theme> &
OpacityProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    backgroundColorShorthand,
    backgroundColor,
    border,
    opacity
])

interface Props extends PressableProps {
    pressed?: RestyleProps
    // ios
    // rippleColor?:
    // android
    // rippleEffect?:
    rippleColor?: ResponsiveValue<keyof Theme['colors'], Theme>
    rippleBorderless?: boolean
}

const Touchable =({
    pressed,
    rippleColor,
    rippleBorderless,
    style,
    ...rest
}: Props) =>{
    const {style: pressedStyle} = pressed ? useRestyle(restyleFunctions, pressed) 
    : { style: undefined }
    const theme = useTheme<Theme>()
    const rippleColorProp = rippleColor && useResponsiveProp(rippleColor)
    const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp]
    return (
        <Pressable 
            {...rest} 
            android_ripple={{color: rippleColorValue, borderless: rippleBorderless}}
            // @ts-ignore
            style={({pressed: isPressed}) => 
            isPressed ? [style, pressedStyle] : style
            }
        />
    )
}

export const TouchableOpacity: React.FC<Props> = props => (
    <Touchable 
        rippleColor='$foreground' {...props}
        pressed={{opacity: Platform.select({ ios: 0.6})}}
    />
)

export default Touchable