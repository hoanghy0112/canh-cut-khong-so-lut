import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

import Profile from '../../components/Profile/Profile';
import TabButton from '../../components/TabButton/TabButton';

import { ICON_LOGOUT } from '../../assets/icons';

import useRouterNavigation from '../../hooks/useRouterNavigation';
import { ITEM_MANAGEMENT } from '../../constants/pathName';
import styles from './SponsorPage.module.scss';

const SponsorPage = () => {
  useRouterNavigation();

  const navigate = useNavigate();

  const [tab, setTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    setTab(location.pathname.split('/').slice(-1)[0]);
  }, [location]);

  function handleSignout() {
    const auth = getAuth();
    auth.signOut();
  }
  return (
    <div className={styles.container}>
      <div className={styles.informationBox}>
        <div className={styles.topBox}>
          <Profile
            onClick={() => {
              navigate('/home/profile');
            }}
          />
          <div className={styles.buttonBox}>
            <TabButton
              isSelected={tab === ''}
              type='Sponsor'
              onClick={() => {
                navigate('/sponsor');
              }}
            />
          </div>
        </div>
        <button
          type='button'
          className={styles.signOutButton}
          onClick={handleSignout}
        >
          <ICON_LOGOUT className={styles.signOutIcon} />
          <p>Log out</p>
        </button>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.header}>
          {/* <img src={Mylogo} alt="Logo" /> */}
          <p>App</p>
        </div>
        <div className={styles.outlet}>
          <p className={styles.title}>Create new event</p>
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
