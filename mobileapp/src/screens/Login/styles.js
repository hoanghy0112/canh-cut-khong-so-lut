import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    position: 'absolute',
    width: scale(414),
    height: scale(382),
    left: 0,
    borderRadius: 30,
    top: scale(-15),
  },

  logoContainer: {
    position: 'absolute',
    width: scale(131.53),
    height: scale(162.38),
    left: scale(136),
    top: scale(113),
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  text: {
    flex: 1,
  },

  login: {
    flex: 1,
    position: 'absolute',
    width: scale(49),
    height: scale(24),
    left: scale(89),
    top: scale(330),
  },

  signUp: {
    flex: 1,
    position: 'absolute',
    width: scale(71),
    height: scale(24),
    left: scale(263),
    top: scale(330),
  },

  textLogin: {
    fontSize: scale(18),
    fontWeight: '600',
    color: CUSTOM_COLOR.Black,
  },

  textSignUp: {
    fontSize: scale(18),
    fontWeight: '600',
    color: CUSTOM_COLOR.Black,
  },

  rightLine: {
    position: 'absolute',
    width: scale(134),
    height: scale(3),
    left: scale(-39),
    top: scale(51),
    backgroundColor: CUSTOM_COLOR.Vermilion,
    borderRadius: 40,
  },

  leftLine: {
    position: 'absolute',
    width: scale(134),
    height: scale(3),
    left: scale(-31),
    top: scale(51),
    backgroundColor: CUSTOM_COLOR.Vermilion,
    borderRadius: 40,
  },

  inputLogin: {
    position: 'absolute',
    top: scale(116),
    left: scale(-39),
  },

  inputSignUp: {
    position: 'absolute',
    top: scale(116),
    left: scale(-213),
  },

  button: {
    position: 'absolute',
    bottom: scale(41),
    alignSelf: 'center',
  },

  buttonLogin: {
    position: 'absolute',
    // bottom: scale(41),
    alignSelf: 'center',
    left: scale(-47),
    bottom: scale(-448),
  },

  buttonSignUp: {
    position: 'absolute',
    // bottom: scale(41),
    alignSelf: 'center',
    left: scale(-221),
    bottom: scale(-448),
  },

  textForgotPass: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: 17,
    fontFamily: FONT_FAMILY.Bold,
  },
});

export default styles;
