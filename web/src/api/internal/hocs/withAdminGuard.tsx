import React from 'react';
import redirect from '../../../lib/actions/redirect';

const withAdminGuard = (PageComponent: any) => {
  return class PageWithUser extends React.Component {
    static async getInitialProps(ctx) {
      let pageProps: any = {};

      if (typeof PageComponent.getInitialProps === 'function') {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      if (!pageProps.user || !pageProps.user.isAdmin) {
        redirect(ctx, '/signin');

        return {};
      }

      return pageProps;
    }

    render() {
      return <PageComponent {...this.props} />;
    }
  };
};

export default withAdminGuard;
