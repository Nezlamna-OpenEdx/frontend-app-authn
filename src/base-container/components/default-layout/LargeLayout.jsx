import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import { useLocation } from 'react-router-dom';

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  const location = useLocation();
  const bannerUrl = `${getConfig().LMS_BASE_URL}/static/nezlamna-theme/images/auth_image.jpg`

  if (location.pathname == '/register'){
    return (

      <div className='w-100 banner-container'>
      <div className="w-100 p-0 mt-4 mb-3 d-flex flex-column justify-content-center align-items-center">
          <p className="auth_heading">Sign up</p>
      </div>
      </div>      
    );
  }
  else{
    return (

      <div className='w-100 banner-container'>
      <div className="auth_banner_container w-100 d-flex flex-column">
            <img src={bannerUrl} alt="auth-banner" />
      </div>
      <div className="w-100 p-0 mb-3 d-flex flex-column justify-content-center align-items-center">
          <p className="auth_heading">Authorization</p>
          <div className='auth_message'>
  
          <span className='w-100 d-flex mb-0 justify-content-center align-items-center'>Choose a convenient way to log in.</span>
          <p>Don't have an account yet? Create one by going to the page <span><a href='/authn/register'>Sign up</a></span> </p>
          </div>
      </div>
      </div>
    );
  }
  
};

export default LargeLayout;
