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
import BreadCrumbsServiceId from "./sections/Header/BreadCrumbs/BreadCrumbs";
import BriefInfo from "./sections/Header/BrieffInfo/BriefInfo";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const Service = ({}) => {
    // const [{data, error, fetching}] = useGetServiceFromUrl();
    //
    // if (fetching) {
    //     return (
    //         <Layout>
    //             <div>loading...</div>
    //         </Layout>
    //     );
    // }
    //
    // if (error) {
    //     return <div>{error.message}</div>;
    // }
    //
    // if (!data?.service) {
    //     return (
    //         <Layout>
    //             <Box>could not find service</Box>
    //         </Layout>
    //     );
    // }

    return (
        <Layout>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={11}>
                        <Grid item xs={11}>
                            <BreadCrumbsServiceId/>
                            <Typography
                                style={{
                                    fontFamily: 'Montserrat Regular',
                                    fontWeight: 600,
                                    fontSize: '36px',
                                    lineHeight: '44px',
                                }}
                            >Красивая квартира в Нью-Йорке</Typography>
                        </Grid>
                        <BriefInfo/>
                    </Grid>
                </Grid></Box>
            {/*<Grid*/}
            {/*    direction="column"*/}
            {/*    xs={12}*/}
            {/*>*/}
            {/*    <Breadcrumbs aria-label="breadcrumb"  style={{marginLeft: '22.5%'}}>*/}
            {/*        <NextLink href="/">*/}
            {/*            <Link color="inherit" href="/" onClick={handleClick}>*/}
            {/*                Главная*/}
            {/*            </Link>*/}
            {/*        </NextLink>*/}
            {/*        <NextLink href="/employers">*/}
            {/*            <Link color="inherit" href="/" onClick={handleClick}>*/}
            {/*                Сотрудники*/}
            {/*            </Link>*/}
            {/*        </NextLink>*/}
            {/*        <Typography color="textPrimary">{data.service.title}</Typography>*/}
            {/*    </Breadcrumbs>*/}
            {/*    <TabsMenu options={data.service}/>*/}
            {/*</Grid>*/}
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Service);
