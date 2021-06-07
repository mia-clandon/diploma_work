// import * as React from 'react';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Star from "../icons/Star";
// import Typography from "@material-ui/core/Typography";
// import Snow from "../icons/Snow";
// import Parking from "../icons/Parking";
// import Wifi from "../icons/Wifi";
// import Line from "../icons/Line";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import Like from "../icons/Like";
// import DollarSign from "../../Header/components/SearchBlock/icons/DollarSign";
//
// function CardEmployerOrService() {
//     return (
//         <Grid container justifyContent="center">
//             <Grid item xs={5}
//             >
//                 <Grid container justifyContent="center"
//                       style={{
//                           border: '1px solid #F0EEEE',
//                           paddingTop: '16px',
//                       }}
//                 >
//                     <Grid item xs={4}>
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <img src={"./img/apartment.jpg"} alt="" style={{width: '165px', height: '165px'}}/>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                     <Grid item xs={7}>
//                         <Grid container spacing={1}
//                               style={{
//                                   paddingLeft: '12px'
//                               }}
//                         >
//                             <Grid item xs={12}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={6}>
//                                         <Typography
//                                             style={{
//                                                 font: 'Montserrat Regular',
//                                                 fontSize: '14px',
//                                                 fontWeight: 600,
//                                                 lineHeight: '17px',
//                                                 letterSpacing: '0em',
//                                                 color: '#FF6231',
//                                             }}
//                                         > <Star/> 4.92</Typography>
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         <Typography
//                                             style={{
//                                                 fontFamily: 'Montserrat',
//                                                 fontSize: '14px',
//                                                 fontWeight: 400,
//                                                 lineHeight: '17px',
//                                                 letterSpacing: '0em',
//                                                 color: '#6D6767',
//                                                 marginLeft: '8px',
//                                                 textAlign: 'end',
//                                                 textDecoration: 'underline'
//                                             }}
//                                         >
//                                             Недвижимость
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12}>
//                                         <Typography
//                                             style={{
//                                                 fontSize: '20px',
//                                                 color: '#000000',
//                                                 fontWeight: 600,
//                                                 lineHeight: '24.38px',
//                                                 textAlign: 'start'
//                                             }}
//                                         >
//                                             Красивая квартира в Нью-Йорк
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={6}>
//                                         <Typography
//                                             style={{
//                                                 fontSize: '14px',
//                                                 color: '#6D6767',
//                                                 fontWeight: 400,
//                                                 lineHeight: '17.07px',
//                                                 textAlign: 'start'
//                                             }}
//                                         >
//                                             Нью-Йорк, США
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item xs={12}
//                             >
//                                 <Grid container alignItems="center" style={{
//                                     border: '1px solid #F0EEEE',
//                                     borderRadius: '6px',
//                                 }}>
//                                     <Grid item xs={7} alignItems="center">
//                                         <Grid container alignItems="center"
//                                               style={{
//                                                   paddingLeft: '10px',
//                                                   paddingTop: '5px',
//                                                   paddingBottom: '5px'
//                                               }}>
//                                             <Grid item xs={3}
//                                             >
//                                                 <Snow/>
//                                             </Grid>
//                                             <Grid item xs={3}>
//                                                 <Wifi/>
//                                             </Grid>
//                                             <Grid item xs={3}>
//                                                 <Wifi/>
//                                             </Grid>
//                                             <Grid item xs={3}>
//                                                 <Parking/>
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid item xs={1}>
//                                         <Line/>
//                                     </Grid>
//                                     <Grid item xs={4}>
//                                         <Typography
//                                             style={{
//                                                 fontFamily: 'Montserrat',
//                                                 fontSize: '20px',
//                                                 fontWeight: 600,
//                                                 lineHeight: '24.38px',
//                                                 letterSpacing: '0em',
//                                                 textAlign: 'start',
//                                                 color: '#FF6231',
//                                             }}
//                                         > от <DollarSign/>20.000</Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={10}>
//                                         <Button onClick={() => console.log('test')}
//                                                 style={{
//                                                     fontFamily: 'Montserrat',
//                                                     fontSize: '14px',
//                                                     fontWeight: 600,
//                                                     lineHeight: '17px',
//                                                     textAlign: 'center',
//                                                     color: '#FF6231',
//                                                     textTransform: 'capitalize',
//                                                     background: '#FFF1F1',
//                                                     width: '100%'
//                                                 }}
//                                         >Забронировать</Button>
//                                     </Grid>
//                                     <Grid item xs={2}>
//                                         <IconButton onClick={() => console.log('test')}
//                                                     style={{
//                                                         fontFamily: 'Montserrat',
//                                                         fontSize: '14px',
//                                                         fontWeight: 600,
//                                                         lineHeight: '17px',
//                                                         textAlign: 'center',
//                                                         color: '#FF6231',
//                                                         textTransform: 'capitalize',
//                                                         background: '#FFF1F1',
//                                                         borderRadius: '6px',
//                                                         height: '72%',
//                                                     }}
//                                         >
//                                             <Like/>
//                                         </IconButton>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//     );
// }
//
// export default CardEmployerOrService;
import React from 'react';
import {Theme, createStyles, makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Star from "../icons/Star";
import Snow from "../icons/Snow";
import Wifi from "../icons/Wifi";
import Parking from "../icons/Parking";
import Line from "../icons/Line";
import DollarSign from "../../Header/components/SearchBlock/icons/DollarSign";
import Button from "@material-ui/core/Button";
import Like from "../icons/Like";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);

function CardEmployerOrService() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div className={classes.cover}>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={"./img/apartment.jpg"} alt="" style={{width: '165px', height: '165px'}}/>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
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
                        <Grid container alignItems="center" style={{
                            border: '1px solid #F0EEEE',
                            borderRadius: '6px',
                        }}>
                            <Grid item xs={6} alignItems="center">
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
                            <Grid item xs={5}>
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
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}

export default CardEmployerOrService;
