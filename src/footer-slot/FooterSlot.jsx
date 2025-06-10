// src/my-new-page/MyNewPage.jsx
import React from 'react';
import { getConfig } from '@edx/frontend-platform';

import './footer.scss';

const FooterSlot = () => {
  
  const edxLogoUrl = `${getConfig().LMS_BASE_URL}/static/nezlamna-theme/images/edx-logo.png`
  const siteLogoUrl = `${getConfig().LMS_BASE_URL}/static/nezlamna-theme/images/logo-eng.png`
  const aboutUrl = `${getConfig().LMS_BASE_URL}/about`
  const contactUsUrl = `${getConfig().LMS_BASE_URL}/contact_us`
  return (
    <>
      <div class="footer-container">
        <div class="footer-img-edx">
            <img src={edxLogoUrl} alt="auth-banner" />
        </div>
        <div class="footer-menu">
            <ul class="footer-menu-list">
                <li><a href={aboutUrl}>About Us</a></li>
                <li><a href={contactUsUrl}>Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Vacancies</a></li>
            </ul>
        </div>
        <div class="footer-img-logo">
            <img src={siteLogoUrl} alt="auth-banner" />

        </div>
    </div>
    </>
  );
};

export default FooterSlot;
