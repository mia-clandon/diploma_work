import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Wifi from "../../../../components/Cards/icons/Wifi";
import ItemAmenties from "./blocks/ItemAmenties";
import Button from "@material-ui/core/Button";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import Card from "@material-ui/core/Card";

const itemAmenties = [
    {
        icon: Wifi,
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        icon: Wifi,
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        icon: Wifi,
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        icon: Wifi,
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
]

function Amenties() {
    return (
        <Grid container spacing={2} style={{
            border: '1px solid #F0EEEE',
            padding: '24px',
        }}
        >
            <Grid item xs={12}>
                <HeaderBlock props={"Удобства"}/>
            </Grid>
            <Grid item xs={12}>
                {itemAmenties.map((item) => (
                    <ItemAmenties icon={item.icon} title={item.title} description={item.description}/>
                ))}
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    style={{
                        color: '#6D6767'
                    }}
                >
                    <Typography>
                        Показать все удобства
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default Amenties;
