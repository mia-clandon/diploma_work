import * as React from 'react';
import {experimentalStyled as styled} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Star from "../icons/Star";
import Typography from "@material-ui/core/Typography";
import Snow from "../icons/Snow";
import Parking from "../icons/Parking";
import Wifi from "../icons/Wifi";
import Line from "../icons/Line";
import DollarSign from "../../../../../components/Header/components/SearchBlock/icons/DollarSign";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Like from "../icons/Like";

const Item = styled(Paper)(({theme}) => ({}));

function CardChooseEditors() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container justifyContent="center">
                <Grid item xs={5}
                >
                    <Grid container justifyContent="center"
                          style={{
                              border: '1px solid #F0EEEE',
                              paddingTop: '16px'
                          }}
                    >
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <img src={"./img/apartment.jpg"} alt="" style={{width: '165px', height: '165px'}}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container spacing={1}
                                  style={{
                                      paddingLeft: '12px'
                                  }}
                            >
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography
                                                style={{
                                                    font: 'Montserrat Regular',
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    color: '#FF6231',
                                                }}
                                            > <Star/> 4.92</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography
                                                style={{
                                                    fontFamily: 'Montserrat',
                                                    fontSize: '14px',
                                                    fontWeight: 400,
                                                    lineHeight: '17px',
                                                    letterSpacing: '0em',
                                                    color: '#6D6767',
                                                    marginLeft: '8px',
                                                    textAlign: 'end',
                                                    textDecoration: 'underline'
                                                }}
                                            >
                                                Недвижимость
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography
                                                style={{
                                                    fontSize: '20px',
                                                    color: '#000000',
                                                    fontWeight: 600,
                                                    lineHeight: '24.38px',
                                                    textAlign: 'start'
                                                }}
                                            >
                                                Красивая квартира в Нью-Йорк
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography
                                                style={{
                                                    fontSize: '14px',
                                                    color: '#6D6767',
                                                    fontWeight: 400,
                                                    lineHeight: '17.07px',
                                                    textAlign: 'start'
                                                }}
                                            >
                                                Нью-Йорк, США
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}
                                >
                                    <Grid container alignItems="center" style={{
                                        border: '1px solid #F0EEEE',
                                        borderRadius: '6px',
                                    }}>
                                        <Grid item xs={7} alignItems="center">
                                            <Grid container alignItems="center"
                                                  style={{
                                                      paddingLeft: '10px',
                                                      paddingTop: '5px',
                                                      paddingBottom: '5px'
                                                  }}>
                                                <Grid item xs={3}
                                                >
                                                    <Snow/>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Wifi/>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Wifi/>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Parking/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Line/>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography
                                                style={{
                                                    fontFamily: 'Montserrat',
                                                    fontSize: '20px',
                                                    fontWeight: 600,
                                                    lineHeight: '24.38px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'start',
                                                    color: '#FF6231',
                                                }}
                                            > от <DollarSign/>20.000</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={10}>
                                            <Button onClick={() => console.log('test')}
                                                    style={{
                                                        fontFamily: 'Montserrat',
                                                        fontSize: '14px',
                                                        fontWeight: 600,
                                                        lineHeight: '17px',
                                                        textAlign: 'center',
                                                        color: '#FF6231',
                                                        textTransform: 'capitalize',
                                                        background: '#FFF1F1',
                                                        width: '100%'
                                                    }}
                                            >Забронировать</Button>
                                        </Grid>
                                        <Grid item xs={2}>
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
                                                            height: '72%',
                                                        }}
                                            >
                                                <Like/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CardChooseEditors;
