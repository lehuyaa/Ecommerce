import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconSearch = ({ height, width, color }: IconProps) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M10.875 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75z"
                stroke={color ? color : '#9098B1'}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M16.5 16.5L21 21"
                stroke={color ? color : '#9098B1'}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default IconSearch
