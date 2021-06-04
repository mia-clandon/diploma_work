import React from "react";
import {withUrqlClient} from "next-urql";
import {createUrqlClient} from "../../utils/createUrqlClient";
import {Layout} from "../../components/Layout";
import NextLink from "next/link";
import {useGetServiceFromUrl} from "../../utils/useGetServiceFromUrl";
import {Box, Grid} from "@material-ui/core";
import TabsMenu from "./sections/TabsMenu/TabsMenu";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const Service = ({}) => {
    const [{data, error, fetching}] = useGetServiceFromUrl();

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

    if (!data?.service) {
        return (
            <Layout>
                <Box>could not find service</Box>
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
                    <Typography color="textPrimary">{data.service.title}</Typography>
                </Breadcrumbs>
                <TabsMenu options={data.service}/>
            </Grid>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Service);
