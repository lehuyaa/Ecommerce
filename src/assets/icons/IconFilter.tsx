import * as React from "react"

import Svg, { Path } from "react-native-svg"

function IconFilter(props) {
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
        d="M14.25 17.625V12L21 3H3l6.75 9v9"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconFilter
