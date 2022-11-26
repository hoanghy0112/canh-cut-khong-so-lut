import {Image, Text, View, SafeAreaView} from 'react-native';
import {IMG_Logo} from '../../assets/images';
import {IMG_Background} from '../../assets/images';
import React, {Component} from 'react';
import styles from './styles';
import CustomButton from '../../components/Button';

export class Onboarding extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* Logo */}
        <>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={IMG_Logo} />
          </View>
        </>

        {/* Title */}
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{'Food for\nEveryone'}</Text>
          </View>
        </>

        {/* Background */}
        <>
          <View style={styles.backgroundContainer}>
            <Image style={styles.background} source={IMG_Background} />
          </View>
        </>

        {/* Login button */}
        <>
          <View style={styles.button}>
            <CustomButton
              onPress={() => navigation.navigate('Login')}
              title="Get Started"
              type="Primary"
            />
          </View>
        </>
      </SafeAreaView>
    );
  }
}

export default Onboarding;
