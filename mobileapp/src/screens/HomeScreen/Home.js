import React from 'react';
import {
  IMG_CART,
  IMG_SIDEBAR,
  IMG_SEARCH,
  IMG_HOME,
  IMG_USER,
  IMG_HISTORY,
  IMG_HEART,
} from '../../assets/icons';
import styles from './styles';
import {IMG_Item} from '../../assets/images';
import {SafeAreaView, View, ScrollView, Image, Text} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Sidebar and cart */}
      <>
        <View style={styles.sideBarAndCart}>
          <View style={styles.sideBarContainer}>
            <Image style={styles.sideBar} source={IMG_SIDEBAR} />
          </View>
          <View style={styles.cart}>
            <Image style={styles.cart} source={IMG_CART} />
          </View>
        </View>
      </>

      {/* Text */}
      <>
        <View style={styles.textTitleContainer}>
          <Text style={styles.textTitle}>{'Delicious \nfood for you'}</Text>
        </View>
      </>

      {/* SearchButton */}
      <>
        <View style={styles.searchButtonContainer}>
          <Image style={styles.searchButtonIcon} source={IMG_SEARCH} />
          <Text style={styles.searchButtonText}>Search</Text>
        </View>
      </>

      {/* Scroll view choice */}
      <>
        <ScrollView style={styles.scrollViewNavigation} horizontal={true}>
          <View style={[styles.scrollViewItem]}>
            <Text style={[styles.navigationText, styles.highlightText]}>
              Foods
            </Text>

            <View style={[styles.navigationUnderline, styles.highlightLine]} />
          </View>

          <View style={styles.scrollViewItem}>
            <Text style={styles.navigationText}>Drink</Text>
            <View style={styles.navigationUnderline} />
          </View>

          <View style={styles.scrollViewItem}>
            <Text style={styles.navigationText}>Sauce</Text>
            <View style={styles.navigationUnderline} />
          </View>

          <View style={styles.scrollViewItem}>
            <Text style={styles.navigationText}>Snacks</Text>
            <View style={styles.navigationUnderline} />
          </View>

          <View style={styles.scrollViewItem}>
            <Text style={styles.navigationText}>Other</Text>
            <View style={styles.navigationUnderline} />
          </View>
        </ScrollView>
      </>

      {/* See more */}
      <>
        <Text style={styles.seeMoreText}>see more</Text>
      </>

      {/* Scroll view items */}
      <>
        <View style={styles.scrollView}>
          <ScrollView style={styles.scrollViewContainer} horizontal={true}>
            {/* Item 1 */}
            <View style={[styles.item, styles.shadowProps]}>
              <View style={styles.imageContainer}>
                <Image style={styles.image1} source={IMG_Item} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Veggie</Text>
                <Text style={styles.text}>Tomato mix</Text>
              </View>
              <Text style={styles.text2}>N1,900</Text>
            </View>

            {/* Item 2 */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image style={styles.image1} source={IMG_Item} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Veggie</Text>
                <Text style={styles.text}>Tomato mix</Text>
              </View>
              <Text style={styles.text2}>N1,900</Text>
            </View>

            {/* Item 3 */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image style={styles.image1} source={IMG_Item} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.Text}>Veggie</Text>
                <Text style={styles.Text}>Tomato mix</Text>
              </View>
              <Text style={styles.text2}>N1,900</Text>
            </View>

            {/* Item 4 */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image style={styles.image1} source={IMG_Item} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Veggie</Text>
                <Text style={styles.text}>Tomato mix</Text>
              </View>
              <Text style={styles.text2}>N1,900</Text>
            </View>

            {/* Item 5 */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image style={styles.image1} source={IMG_Item} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Veggie</Text>
                <Text style={styles.text}>Tomato mix</Text>
              </View>
              <Text style={styles.text2}>N1,900</Text>
            </View>
          </ScrollView>
        </View>
      </>

      {/* Bottom tab */}
      <>
        <View style={styles.navigationBottomBar}>
          <Image style={styles.homeStyle} source={IMG_HOME} />
          <Image style={styles.heartStyle} source={IMG_HEART} />
          <Image style={styles.userStyle} source={IMG_USER} />
          <Image style={styles.historyStyle} source={IMG_HISTORY} />
        </View>
      </>
    </SafeAreaView>
  );
};

export default Home;
