import { useEffect } from 'react';

import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

import { db } from '../firebase/config';
import signInWithGoogle from '../firebase/signIn/signInWithGoogle';
import { Item } from '../firebase/model/Item';
import { Material } from '../firebase/model/Material';

import LoginButton from '../components/LoginButton/LoginButton';

import { ICON_FORWARD } from '../assets/icons';

import styles from './AuthenticationPage.module.scss';
import useAuthenticationNavigation from '../hooks/useRouterNavigation';

import useProfileInformation from '../hooks/useProfileInformation';

export default function AuthenticationPage() {
  useAuthenticationNavigation();

  function handleSignInWithGoogle() {
    signInWithGoogle();
  }

  return (
    <div className={styles.container}>
      <div className={styles.authenticationContainer}>
        <img src='' alt='' />
        <div className={styles.authenticationTab}>
          <div className={styles.header}>
            <p>Welcome to</p>
            <p className={styles.appName}>EVNGuins</p>
          </div>
          <div className={styles.signInContainer}>
            <div className={styles.signInButtons}>
              <LoginButton
                providerName='Google'
                onClick={() => handleSignInWithGoogle()}
              />
            </div>
            <div className={styles.noSignIn}>
              <p>Continue without sign in</p>
              <img src={ICON_FORWARD} alt='arrow forward' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
