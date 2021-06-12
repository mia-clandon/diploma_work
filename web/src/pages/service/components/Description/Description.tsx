import React from 'react';
import Grid from "@material-ui/core/Grid";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import ItemParametrs from "../Parametrs/blocks/ItemParametrs";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Description() {
    return (
        <Grid container spacing={2} style={{
            border: '1px solid #F0EEEE',
            padding: '0 10px 24px 10px',
            margin: '24px',
        }}
        >
            <Grid item xs={12} style={{marginLeft: '-14px'}}>
                <HeaderBlock props={"Описание"}/>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#6D6767',
                    }}
                >
                    fjdsdgfhglfhsdhglghf
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    style={{
                        color: '#6D6767'
                    }}
                >
                    <Typography
                        style={{
                            font: 'Montserrat Regular',
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '17.07px',
                            color: '#6D6767',
                        }}
                    >
                        Показать описание
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default Description;
