import {StyleSheet} from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  logoContainer: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(37),
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(50),
    marginTop: scale(10),
  },

  title: {
    fontSize: scale(65),
    fontFamily: FONT_FAMILY.Black,
    color: CUSTOM_COLOR.White,
    marginLeft: scale(50),
  },

  backgroundContainer: {},
  button: {
    position: 'absolute',
    left: scale(36),
    bottom: scale(51),
  },
});

export default styles;
