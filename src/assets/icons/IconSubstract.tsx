import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { verticalScale } from "react-native-size-matters"

const IconSubstract = () => {
  return (
    <Svg
      width={verticalScale(16)}
      height={verticalScale(16)}
      viewBox="0 0 16 16"
      fill="none" >
      <Path
        d="M3.333 8h9.334"
        stroke="#9098B1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconSubstract
