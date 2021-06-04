import React from 'react';
import USER_SETTINGS from '../query/USER_SETTINGS';
import USER from '../query/USER';
import {UserDocument} from "../../hooks";

const withUser = (PageComponent) => {
  return class PageWithUser extends React.Component {
    static async getInitialProps(ctx) {
      let pageProps: any = {};

      if (typeof PageComponent.getInitialProps === 'function') {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // user data
      let user = null;
      let userSettings = null;

      try {
        const { data: { user: userData = null } = {} } = await pageProps.apolloClient.query({ query: UserDocument });

        if (user && user.id) {
          user = userData;
        }
        // eslint-disable-next-line no-empty
      } catch (e) {}
      try {
        const { data: { userSettings: userSettingsData = null } = {} } = await pageProps.apolloClient.query({
          query: USER_SETTINGS,
        });

        userSettings = userSettingsData;
        // eslint-disable-next-line no-empty
      } catch (e) {}

      return {
        user,
        userSettings,
        ...pageProps,
      };
    }

    render() {
      return <PageComponent {...this.props} />;
    }
  };
};

export default withUser;
