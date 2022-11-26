import {Dimensions} from 'react-native';
const designWidth = 414;

function scale(number) {
  let scaleNumber;
  const currentDeviceWidth = Dimensions.get('window').width;
  scaleNumber = (number / designWidth) * currentDeviceWidth;
  return scaleNumber;
}

export default scale;
