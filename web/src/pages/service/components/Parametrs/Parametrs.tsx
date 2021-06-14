import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ItemParametrs from "./blocks/ItemParametrs";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import Card from "@material-ui/core/Card";

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
            padding: '0 10px 24px 10px',
            margin: '24px 0 0 0',
        }}
        >
            <Grid item xs={12}>
                <HeaderBlock props={"Параметры"}/>
            </Grid>
            <Grid item xs={12}>
                <ItemParametrs options={itemParametrs}/>
            </Grid>
        </Grid>
    )
}

export default Parametrs;
