import React from "react";
import {Layout} from "../../components/Layout";
import {Box, Container, Grid} from "@material-ui/core";
import {withUrqlClient} from "next-urql";
import {createUrqlClient} from "../../utils/createUrqlClient";
import BreadCrumbsServiceId from "../service/sections/Header/BreadCrumbs/BreadCrumbs";
import HeaderPage from "../service/components/ HeaderPage/HeaderPage";
import BriefInfo from "../service/sections/Header/BrieffInfo/BriefInfo";
import MediaContent from "../service/components/MediaContent/MediaContent";
import Parametrs from "../service/components/Parametrs/Parametrs";
import Description from "../service/components/Description/Description";
import Calendar from "../service/components/Calendar/Calendar";
import Amenties from "../service/components/Amenities/Amenties";
import Contacts from "../service/components/Contacts/Contacts";
import Location from "../service/components/Location/Location";
import Reviews from "../service/components/Reviews/Reviews";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const Employer = ({}) => {
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
            <Box sx={{flexGrow: 1}} style={{backgroundColor: '#E5E5E5'}} justifyContent="center" alignItems="center">
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={11}>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center"  style={{marginLeft: '30px'}}>
                                    <Grid item xs={12}>
                                        <BreadCrumbsServiceId/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <HeaderPage/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <BriefInfo/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MediaContent/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={11} style={{background: 'white', marginTop: '20px'}}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item xs={11}>
                                        <Parametrs/>
                                    </Grid>
                                    <Grid item xs={11} style={{marginTop: '20px'}}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={7}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <Description/>
                                                    </Grid>
                                                    <Grid item xs={12} style={{marginTop: '24px'}}>
                                                        <Calendar/>
                                                    </Grid>
                                                    <Grid item xs={12} style={{marginTop: '24px'}}>
                                                        <Location/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} style={{marginLeft: '15px'}}>
                                                        <Amenties/>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Contacts/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={11} style={{marginTop: '20px'}}>
                                        <Reviews/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            }
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(Employer);
