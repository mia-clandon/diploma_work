import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ItemParametrs from "./blocks/ItemParametrs";

const itemParametrs = [
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
]

function Parametrs() {
    return (
        <Grid container spacing={2} style={{
            border: '1px solid #F0EEEE',
        }}
        >
            <Grid item xs={12}>
                <Typography
                    style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '29px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#120505',
                    }}
                >
                    Параметры
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ItemParametrs options={itemParametrs}/>
            </Grid>
        </Grid>
    )
}

export default Parametrs;
