import React from 'react';
import {withUrqlClient} from "next-urql";
import {Layout} from "../components/Layout";
import {createUrqlClient} from "../utils/createUrqlClient";
// @ts-ignore
import {Stack} from "@material-ui/core";

const Index = () => {
    return (
        <Layout>
            <Stack spacing={8}>
            </Stack>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Index);
