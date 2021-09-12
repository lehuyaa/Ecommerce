import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {verticalScale} from 'react-native-size-matters'

const IconNotification = ({height, width}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a6.03 6.03 0 00-6.031 6.031v5.25a1 1 0 01-.06.34l-.361 1.004h12.904l-.362-1.005a1 1 0 01-.059-.338v-5.25C18.031 6.7 15.331 4 12 4zm-8.031 6.031A8.03 8.03 0 0112 2a8.031 8.031 0 018.031 8.031v5.076l.785 2.18a1 1 0 01-.941 1.338H4.125a1 1 0 01-.94-1.339l.784-2.179v-5.076z"
        fill="#9098B1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.625 16.625a1 1 0 011 1 2.375 2.375 0 104.75 0 1 1 0 112 0 4.375 4.375 0 11-8.75 0 1 1 0 011-1z"
        fill="#9098B1"
      />
    </Svg>
  )
}

export default IconNotification
