import React from "react";
import {withUrqlClient} from "next-urql";
import {Box, Flex} from "@chakra-ui/core";
import NextLink from "next/link";
import TabsMenu from "./sections/TabsMenu/TabsMenu";
import {useGetEmployerFromUrl} from "../../../utils/useGetEmployerFromUrl";
import {Layout} from "../../../components/Layout";
import {createUrqlClient} from "../../../utils/createUrqlClient";

const Employer = ({}) => {
    const [{data, error, fetching}] = useGetEmployerFromUrl();

    if (fetching) {
        return (
            <Layout>
                <div>loading...</div>
            </Layout>
        );
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    if (!data?.employer) {
        return (
            <Layout>
                <Box>could not find post</Box>
            </Layout>
        );
    }

    return (
        <Layout>
            <Flex direction="row">
                <NextLink href="/">
                    Main/
                </NextLink>
                <NextLink href="/employers">
                    Employers/
                </NextLink>
                <NextLink href="/employers/">
                    <p>{data.employer.firstname} {data.employer.lastname}</p>
                </NextLink>
            </Flex>
            <TabsMenu options={data}/>


        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Employer);
