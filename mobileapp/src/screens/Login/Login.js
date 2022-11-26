import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMG_Logo} from '../../assets/images';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/Input';
import {LOGIN, SIGN_UP} from '../../constants/screen';

const SignIn = ({navigation}) => {
  const [page, setPage] = useState(LOGIN);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <>
        <View style={styles.navContainer}>
          {/* Logo */}
          <>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={IMG_Logo} />
            </View>
          </>

          {/* Navigate between login and sign up */}
          <View style={styles.text}>
            {/* Login */}
            <TouchableOpacity
              style={styles.login}
              onPress={() => {
                setPage(LOGIN);
              }}
              disabled={page === LOGIN ? true : false}>
              <Text style={styles.textLogin}>Login</Text>
              {page === LOGIN ? <View style={styles.rightLine} /> : null}
              {page === LOGIN ? (
                <View style={styles.inputLogin}>
                  <CustomInput style={styles.input} label="Email address" />
                  <CustomInput label="Password" secureTextEntry={true} />
                  <Text style={styles.textForgotPass}>Forgot Password?</Text>
                </View>
              ) : null}

              {page === LOGIN ? (
                <View style={styles.buttonLogin}>
                  <CustomButton
                    onPress={() => navigation.navigate('Home')}
                    title="Login"
                    type="Secondary"
                  />
                </View>
              ) : null}
            </TouchableOpacity>

            {/* Sign up */}
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => {
                setPage(SIGN_UP);
              }}
              disabled={page === SIGN_UP ? true : false}>
              <Text style={styles.textSignUp}>Sign-up</Text>
              {page === SIGN_UP ? <View style={styles.leftLine} /> : null}
              {page === SIGN_UP ? (
                <View style={styles.inputSignUp}>
                  <CustomInput label="Email address" />
                  <CustomInput label="Password" secureTextEntry={true} />
                  <CustomInput
                    label="Confirm Password"
                    secureTextEntry={true}
                  />
                </View>
              ) : null}

              {page === SIGN_UP ? (
                <View style={styles.buttonSignUp}>
                  <CustomButton
                    onPress={() => navigation.navigate('Home')}
                    title="Sign-up"
                    type="Secondary"
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

export default SignIn;
