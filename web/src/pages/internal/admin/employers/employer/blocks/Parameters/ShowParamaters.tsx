import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HeaderBlock from "../../../../../../../components/HeaderBlock/HeaderBlock";
import {Layout} from "../../../../../../../components/Layout";
import {useGetParametersEmployerFromUrl} from "../../../../../../../utils/useGetParametersEmployerFromUrl";
import Item from "./block/Item";

function ShowParameters({props}: { props?: any }) {
    const [{data, error, fetching}] = useGetParametersEmployerFromUrl();

    console.log(data)

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

    return (
        <Layout>
            {!data && fetching ? (
                <div>loading...</div>
            ) : (
                <Grid container spacing={2} style={{
                    border: '1px solid #F0EEEE',
                    padding: '24px',
                }}
                >
                    <Grid item xs={12}>
                        <HeaderBlock props={"Преимущества"}/>
                    </Grid>
                    <Grid item xs={12}>
                        {data?.parametersEmployer.map((item) => (
                            <Item title={item.title} description={item.description}/>
                        ))}
                    </Grid>
                </Grid>
            )
            }
        </Layout>
    )
}

export default ShowParameters;
