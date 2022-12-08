import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import decode from "jwt-decode";
import { destroyCookie, parseCookies } from "nookies";
import { validateUserRole } from "./validateUserRoles";

type withSSRAuthOptions = {
  roles?: string[];
};

export function withSSRAuth<P>(
  fn: GetServerSideProps<P>,
  options?: withSSRAuthOptions
): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies["@tramaAPP:token"];

    if (!token) {
      return {
        redirect: {
          destination: "/authentication",
          permanent: false,
        },
      };
    }

    try {
      return fn(ctx);
    } catch (error) {
      destroyCookie(ctx, "@tramaAPP:token");

      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  };
}
