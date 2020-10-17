import React from 'react';
import BasicInfo from './BasicInfo';
import About from './About';
import MainSkills from './MainSkills';
import { PageWrapper } from '../../components/styles';

function Profile() {
  return (
    <PageWrapper>
      <BasicInfo />
      <About />
      <MainSkills />
    </PageWrapper>
  );
}

export default Profile;
