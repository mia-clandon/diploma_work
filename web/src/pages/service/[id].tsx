import React from "react";
import {withUrqlClient} from "next-urql";
import {createUrqlClient} from "../../utils/createUrqlClient";
import {Layout} from "../../components/Layout";
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import BreadCrumbsServiceId from "./sections/Header/BreadCrumbs/BreadCrumbs";
import BriefInfo from "./sections/Header/BrieffInfo/BriefInfo";
import MediaContent from "./components/MediaContent/MediaContent";
import Parametrs from "./components/Parametrs/Parametrs";
import Amenties from "./components/Amenities/Amenties";
import Contacts from "./components/Contacts/Contacts";
import HeaderPage from "./components/ HeaderPage/HeaderPage";
import Description from "./components/Description/Description";

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
            <Box sx={{flexGrow: 1}} style={{backgroundColor: '#E5E5E5'}} justifyContent="center" alignItems="center">
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={11}>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
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
                            <Grid item xs={12} style={{background: 'white'}}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item xs={11}>
                                        <Parametrs/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
                                            <Grid item xs={12}>
                                                <Grid item xs={5}>
                                                    <Amenties/>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Contacts/>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Description/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            {/*<Grid*/
            }
            {/*    direction="column"*/
            }
            {/*    xs={12}*/
            }
            {/*>*/
            }
            {/*    <Breadcrumbs aria-label="breadcrumb"  style={{marginLeft: '22.5%'}}>*/
            }
            {/*        <NextLink href="/">*/
            }
            {/*            <Link color="inherit" href="/" onClick={handleClick}>*/
            }
            {/*                Главная*/
            }
            {/*            </Link>*/
            }
            {/*        </NextLink>*/
            }
            {/*        <NextLink href="/employers">*/
            }
            {/*            <Link color="inherit" href="/" onClick={handleClick}>*/
            }
            {/*                Сотрудники*/
            }
            {/*            </Link>*/
            }
            {/*        </NextLink>*/
            }
            {/*        <Typography color="textPrimary">{data.service.title}</Typography>*/
            }
            {/*    </Breadcrumbs>*/
            }
            {/*    <TabsMenu options={data.service}/>*/
            }
            {/*</Grid>*/
            }
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(Service);
