import React from 'react';

import Page from '../Page/Page';
import Button from '../Button/Button';
import config from '../../../../config';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];


export default function NotFound() {
  return (
    <Page title="Sorry, the page you're looking for doesn't exist" page="Not Found">
      <Button path={homePath} label="Go to Home" />
    </Page>
  );
}
