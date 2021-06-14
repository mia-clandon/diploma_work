import React from "react";
import NextLink from "next/link";
import {useLogoutMutation, useMeEmployerQuery, useMeQuery} from "../generated/graphql";
import {isServer} from "../utils/isServer";
import {useRouter} from "next/router";
import {Box, Button, Link} from "@material-ui/core";

// import { LoadingButton } from '@material-ui/lab/';

interface NavBarProps {
}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const router = useRouter();
    const [{fetching: logoutFetching}, logout] = useLogoutMutation();
    // @ts-ignore
    const [{data, fetching}] = [useMeQuery({
        pause: isServer(),
    }), useMeEmployerQuery()]

    let body = null;

    // data is loading
    if (fetching) {
        // user not logged in
    } else if (!data?.me) {
        body = (
            <>
                <h1>Admin</h1>
                {/*<NavTabs/>*/}
                {/*<NextLink href="/">*/}
                {/*    <Button component={Link}>*/}
                {/*        Main*/}
                {/*    </Button>*/}
                {/*</NextLink>*/}
                {/*<NextLink href="/about">*/}
                {/*    <Button component={Link}>*/}
                {/*        About us*/}
                {/*    </Button>*/}
                {/*</NextLink>*/}
                {/*<NextLink href="/services">*/}
                {/*    <Button component={Link}>*/}
                {/*        Services*/}
                {/*    </Button>*/}
                {/*</NextLink>*/}
                {/*<NextLink href="/employers">*/}
                {/*    <Button component={Link}>*/}
                {/*        Employers*/}
                {/*    </Button>*/}
                {/*</NextLink>*/}
                {/*<NextLink href="/contacts">*/}
                {/*    <Button component={Link}>*/}
                {/*        Contacts*/}
                {/*    </Button>*/}
                {/*</NextLink>*/}
                {/*<NextLink href="/blog">*/}
                {/*    <Button component={Link}>*/}
                {/*        Blog*/}
                {/*    </Button>*/}
                {/*</NextLink>*/}
                {/*<NextLink href="/internal/admin/auth/login">*/}
                {/*    <Link>login</Link>*/}
                {/*</NextLink>*/}
                {/*<NextLink href="/register">*/}
                {/*    <Link>register</Link>*/}
                {/*</NextLink>*/}
            </>
        );
        // user is logged in
    } else if (data?.meEmployer) {
        body = (
            <>
                <h1>Employer</h1>
            </>
        )
    } else {
        body = (
            <Box display='flex'>
                <NextLink href="/internal/admin/employers">
                    <Button component={Link}>
                        Employers
                    </Button>
                </NextLink>
                <NextLink href="/internal/admin/employers/create-employer">
                    <Button component={Link}>
                        Create employer
                    </Button>
                </NextLink>
                <NextLink href="/internal/admin/service/create-service">
                    <Button component={Link}>
                        Create service
                    </Button>
                </NextLink>
                <NextLink href="/internal/admin/blog/post/create/create-post">
                    <Button component={Link}>
                        Create post
                    </Button>
                </NextLink>
                <NextLink href="/create-booking-date-time">
                    <Button component={Link}>
                        create booking date time
                    </Button>
                </NextLink>
                <Box mr={2}>{data.me.username}</Box>
                <Button
                    onClick={async () => {
                        await logout();
                        router.reload();
                    }}
                    // isLoading={logoutFetching}
                    component={Link}
                    type="submit"
                >
                    logout
                </Button>
            </Box>
        );
    }

    return (
        // <>
        //     <SearchBlock/>
        //     {/*{body}*/}
        // </>
        <Box display='flex' zIndex={1} position="sticky" top={0} p={6}>
            <Box display='flex' zIndex={1} top={0} p={6}>
                <Box display='flex' flex={1} m="auto">
                    <Box ml={"auto"}>{body}</Box>
                </Box>
            </Box>
        </Box>
    );
};
