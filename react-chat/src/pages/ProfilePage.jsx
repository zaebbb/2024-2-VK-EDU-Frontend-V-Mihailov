import React from 'react';
import { ProfileForm } from '../components/ProfileForm/ProfileForm';
import { useStore } from '../hooks/useStore';

export const ProfilePage = () => {
  const {
    isProfilePage,
    setProfilePage,
  } = useStore();

  React.useEffect(() => {
    if (!isProfilePage) {
      setProfilePage();
    }

  }, [isProfilePage, setProfilePage]);
  return (
    <ProfileForm />
  )
}
