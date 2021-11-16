import * as React from "react"

import Svg, { Path } from "react-native-svg"

function IconDropDown(props) {
    const { width, height } = props;

  return (
    <Svg
    width={width}
    height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 10l-4 4-4-4"
        stroke="#9098B1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconDropDown
