import * as React from "react"

import Svg, { Path } from "react-native-svg"

const IconSort =(props) => {
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
        d="M3 12h5.625M17.625 3v18L21 17.625M3 5h10.125M3 19h3.375M17.625 21l-3.375-3.375"
        stroke="#9098B1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconSort
