import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconAdd = ({height, width, color}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 3.333v9.334M3.333 8h9.334"
        stroke={color ? color : '#9098B1'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default IconAdd;
