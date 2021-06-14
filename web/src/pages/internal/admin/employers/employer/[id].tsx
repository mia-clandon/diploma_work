import React from "react";
import {withUrqlClient} from "next-urql";
import NextLink from "next/link";
import Box from "@material-ui/core/Box";
import {Grid} from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { createUrqlClient } from "../../../../../utils/createUrqlClient";
import {Layout} from "../../../../../components/Layout";
import {useGetEmployerFromUrl} from "../../../../../utils/useGetEmployerFromUrl";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


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
            <Grid
                direction="column"
                xs={12}
            >
                <Breadcrumbs aria-label="breadcrumb"  style={{marginLeft: '22.5%'}}>
                    <NextLink href="/">
                        <Link color="inherit" href="/" onClick={handleClick}>
                            Главная
                        </Link>
                    </NextLink>
                    <NextLink href="/employers">
                        <Link color="inherit" href="/" onClick={handleClick}>
                            Сотрудники
                        </Link>
                    </NextLink>
                    <Typography color="textPrimary">{data.employer.firstname} {data.employer.lastname}</Typography>
                </Breadcrumbs>
            </Grid>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Employer);
