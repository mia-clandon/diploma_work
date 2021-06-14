import React from 'react';
import Grid from "@material-ui/core/Grid";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import Typography from "@material-ui/core/Typography";
import DollarSign from "../../../../components/Header/components/SearchBlock/icons/DollarSign";

function Location() {
    return (
        <Grid container spacing={2} style={{
            border: '1px solid #F0EEEE',
            padding: '0 10px 24px 10px',
        }}
        >
            <Grid item xs={12} style={{marginLeft: '-14px'}}>
                <HeaderBlock props={"Местоположение"}/>
            </Grid>
            <Grid item xs={12}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '35px'}}>
                    <Typography
                        style={{
                            font: 'Montserrat Regular',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '19.5px',
                            letterSpacing: '0em',
                            color: '#6D6767',
                            marginLeft: '6px'
                        }}
                    >от</Typography>
                    <DollarSign/>
                    <Typography
                        style={{
                            font: 'Montserrat Regular',
                            fontSize: '20px',
                            fontWeight: 600,
                            lineHeight: '24.38px',
                            letterSpacing: '0em',
                            color: '#FF6231',
                            marginLeft: '6px'
                        }}
                    >Местоположение</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default Location;
