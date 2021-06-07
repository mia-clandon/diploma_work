import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Star from "../../../../../components/Cards/icons/Star";
import CardContent from "@material-ui/core/CardContent";
import MapPin from "../../../../../components/Header/components/SearchBlock/icons/MapPin";
import DollarSign from "../../../../../components/Header/components/SearchBlock/icons/DollarSign";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Like from "../../../../../components/Cards/icons/Like";

function BriefInfo() {
    return (
        <Grid container spacing={2}
        >
            <Grid item xs={6}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Star/>
                        <Typography
                            style={{
                                font: 'Montserrat Regular',
                                fontSize: '16px',
                                fontWeight: 600,
                                lineHeight: '20px',
                                letterSpacing: '0em',
                                color: '#FF6231',
                                marginLeft: '6px'
                            }}
                        > 4.92</Typography>
                        <Typography
                            style={{
                                font: 'Montserrat Regular',
                                fontSize: '16px',
                                fontWeight: 'normal',
                                lineHeight: '20px',
                                letterSpacing: '0em',
                                color: '#6D6767',
                                marginLeft: '6px'
                            }}
                        >(34 отзыва)</Typography>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '37px'}}>
                        <MapPin/>
                        <Typography
                            style={{
                                font: 'Montserrat Regular',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '20px',
                                letterSpacing: '0em',
                                color: '#6D6767',
                                marginLeft: '6px'
                            }}
                        >Нью-Йорк, США</Typography>
                    </div>
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
                        >20.000</Typography>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} justifyContent="flex-end">
                <Grid container>
                    <Grid item xs={4} justifyContent="flex-end">
                        <IconButton onClick={() => console.log('test')}
                                    style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        lineHeight: '17px',
                                        textAlign: 'center',
                                        color: '#FF6231',
                                        textTransform: 'capitalize',
                                        background: '#FFF1F1',
                                        borderRadius: '6px',
                                        padding: '8px 36px',
                                        marginLeft: '40px'
                                    }}
                        >
                            <Like/> &nbsp;  &nbsp; <Typography>Сохранить</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => console.log('test')}
                                style={{
                                    fontFamily: 'Montserrat',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    lineHeight: '17px',
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                    textTransform: 'capitalize',
                                    background: '#FF6231',
                                    width: '100%',
                                    height: '36px',
                                }}
                        >Забронировать апартаменты</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BriefInfo;
