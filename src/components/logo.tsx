import { SvgProps } from 'react-native-svg'
import LogoSvg from  '../images/logo.svg'
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle'
import { Theme } from '../themes'
import React from 'react'

type Props = Omit<SvgProps, 'color'> & ColorProps<Theme>

const AppLogo: React.FC<Props> = ({ color = '$foreground', ...rest}) =>{
    const theme= useTheme<Theme>()
    const colorProp = useResponsiveProp(color)
    const vColor = theme.colors[colorProp || '$foreground']

    return <LogoSvg {...rest} color={vColor} />
}

export default AppLogo