import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconBack = ({ height, width }) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M15 18l-6-6 6-6"
                stroke="#9098B1"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default IconBack
