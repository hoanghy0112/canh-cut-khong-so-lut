import {StyleSheet} from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: CUSTOM_COLOR.Concrete,
  },

  scrollView: {
    position: 'absolute',
    top: scale(430),
    flexDirection: 'row',
    width: '100%',
    height: scale(270),
    overflow: 'visible',
  },

  item: {
    flex: 1,
    width: scale(220),
    height: scale(270),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.White,
    marginLeft: scale(15),
    marginRight: scale(15),
    alignItems: 'center',
    top: scale(60),
  },

  scrollViewContainer: {
    height: scale(330),
  },

  imageContainer: {
    position: 'absolute',
    top: scale(-60),
  },

  shadowProps: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 30, height: 30},
  },

  text: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.9,
    fontSize: scale(22),
    alignItems: 'center',
    fontFamily: FONT_FAMILY.Regular,
  },

  text2: {
    position: 'absolute',
    top: scale(215),
    color: CUSTOM_COLOR.SunsetOrange,
    opacity: 0.9,
    fontSize: 17,
    fontFamily: FONT_FAMILY.Bold,
  },

  textContainer: {
    position: 'absolute',
    top: scale(130),
    alignItems: 'center',
    fontFamily: FONT_FAMILY.Bold,
  },

  sideBarAndCart: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    top: scale(74),
  },

  sideBarContainer: {
    color: CUSTOM_COLOR.Black,
    marginLeft: 54.6,
  },

  cart: {
    marginRight: 25,
  },

  textTitleContainer: {
    position: 'absolute',
    top: scale(132),
    left: scale(50),
  },

  textTitle: {
    fontSize: 34,
    lineHeight: 41,
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Bold,
  },

  searchButtonContainer: {
    position: 'absolute',
    top: scale(242),
    left: scale(50),
    width: scale(314),
    height: scale(60),
    backgroundColor: CUSTOM_COLOR.Search,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchButtonIcon: {
    position: 'absolute',
    width: scale(18),
    height: scale(18),
    left: scale(35),
  },

  searchButtonText: {
    position: 'absolute',
    left: scale(69),
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    fontFamily: FONT_FAMILY.Regular,
  },

  navigationUnderline: {
    width: scale(87),
    height: scale(3),
    borderRadius: scale(30),
  },

  navigationText: {
    marginBottom: scale(10),
    fontSize: scale(17),
    lineHeight: scale(20),
  },

  scrollViewItem: {
    position: 'relative',
    top: scale(348),
    alignItems: 'center',
    height: 30,
  },

  scrollViewNavigation: {
    marginLeft: scale(75),
  },

  highlightText: {
    color: CUSTOM_COLOR.SunsetOrange,
  },

  highlightLine: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  seeMoreText: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Light,
    position: 'absolute',
    top: scale(400),
    left: scale(315),
    fontSize: scale(15),
  },

  navigationBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(50),
    marginRight: scale(52),
    alignItems: 'center',
  },

  homeStyle: {
    marginTop: 3,
    width: 56,
    height: 56,
  },

  heartStyle: {
    width: scale(24),
    height: 24,
  },

  userStyle: {
    width: 24,
    height: 24,
  },

  historyStyle: {
    width: 24,
    height: 24,
  },
});

export default styles;
