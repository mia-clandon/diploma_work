import {withUrqlClient} from "next-urql";
import React, {useState} from "react";
import {useServicesQuery} from "../generated/graphql";
import {createUrqlClient} from "../utils/createUrqlClient";
import {Box, Grid, Stack} from "@material-ui/core";
import {alpha, experimentalStyled as styled, makeStyles} from "@material-ui/core/styles";
import {Layout} from "../components/Layout";
import ServiceCard from "./service/components/ServiceCard";
// @ts-ignore
import {LoadingButton} from '@material-ui/lab';
import SideBar from "../components/SideBar/SideBar";
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Services = () => {
    const classes = useStyles();

    const [variables, setVariables] = useState({
        limit: 5,
        cursor: null as null | string,
    });

    const [{data, error, fetching}] = useServicesQuery({
        variables,
    });

    if (!fetching && !data) {
        return (
            <div>
                <div>you got query failed for some reason</div>
                <div>{error?.message}</div>
            </div>
        );
    }

    return (
        <Layout>
            {!data && fetching ? (
                <div>loading...</div>
            ) : (
                <Grid
                    container
                    direction="column"
                    style={{justifyContent: 'center'}}
                    alignItems="flex-start"
                    xs={12}
                >
                    <Grid
                        container
                        direction="row"
                        style={{justifyContent: 'center'}}
                        alignItems="flex-start"
                        xs={12}
                        marginBottom={5}
                    >
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>

                    </Grid>
                    <Grid
                        container
                        direction="row"
                        style={{justifyContent: 'center'}}
                        alignItems="flex-start"
                        xs={12}
                    >
                        <Grid container justify="flex-end" xs={12} sm={2}>
                            <SideBar/>
                        </Grid>
                        <Grid container justify="center" xs={12} sm={6} spacing={2}>
                            {data!.services.services.map((service) => (
                                <Grid key={service.id} item xs={12} sm={4} spacing={2}>
                                    <ServiceCard options={service}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            )}
            {data && data.services.hasMore ? (
                <Box display='flex'>
                    <LoadingButton
                        onClick={() => {
                            setVariables({
                                limit: variables.limit,
                                cursor: data?.services.services[data?.services.services.length - 1].createdAt
                            });
                        }}
                        endIcon={<SendIcon/>}
                        loading={fetching}
                    >
                        Load more
                    </LoadingButton>
                </Box>
                // <Box display='flex'>
                //     <Button
                //         onClick={() => {
                //             setVariables({
                //                 limit: variables.limit,
                //                 cursor: data?.services.services[data?.services.services.length - 1].title,
                //             });
                //         }}
                //         // isLoading={fetching}
                //     >
                //         load more
                //     </Button>
                // </Box>
            ) : null}
        </Layout>
    )
}

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(Services);
