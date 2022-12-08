import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { parseCookies } from 'nookies';
import decode from 'jwt-decode';

export function withSSRGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    if (cookies['@tramaAPP:token']) {
      let redirectDestination = '/my-data';
      
      return {
        redirect: {
          destination: redirectDestination,
          permanent: false,
        },
      };
    }

    return fn(ctx);
  };
}
