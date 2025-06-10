import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';

import './index.scss';
import messages from './messages';

const LargeLayout = () => {
  const { formatMessage } = useIntl();
  const bannerUrl = `${getConfig().LMS_BASE_URL}/static/nezlamna-theme/images/auth_image.jpg`
  

  return (
    
    <div className='w-100 banner-container'>
      <div className="auth_banner_container w-100 d-flex flex-column">
            <img src={bannerUrl} alt="auth-banner" />
      </div>
      <div className="w-100 p-0 mb-3 d-flex flex-column justify-content-center align-items-center">
          <p className="auth_heading">Authorization</p>
          <div className='auth_message'>
            <span className='w-100 d-flex mb-0 justify-content-center align-items-center'>Choose a convenient way to log in.</span>
            <p>Don't have an account yet? Create one by going to the page <span><a href='/authn/register'>Register</a></span> </p>
          </div>
      </div>
    </div>
    // <div
    //   className="w-50 bg-primary-500 banner__image large-layout"
    //   style={{ backgroundImage: `url(${getConfig().BANNER_IMAGE_LARGE})` }}
    // >
    //   <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
    //     <Image className="company-logo position-absolute" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
    //   </Hyperlink>
    //   <div className="min-vh-100 p-5 d-flex align-items-end">
    //     <h1 className="display-2 mw-sm mb-3 d-flex flex-column flex-shrink-0 justify-content-center">
    //       <span className="text-light-500">
    //         {formatMessage(messages['your.career.turning.point'])}
    //       </span>
    //       <span className="text-warning-300">
    //         {formatMessage(messages['is.here'])}
    //       </span>
    //     </h1>
    //   </div>
    // </div>
  );
};

export default LargeLayout;
