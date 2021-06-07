import React from 'react';
import {Theme, createStyles, makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NextLink from "next/link";
import {Link} from "@material-ui/core";
import Star from "../../sections/ChooseEditors/icons/Star";
import Phone from "../../../../components/Cards/icons/Phone";
import Email from "../../../../components/Cards/icons/Email";
import ThumbsUp from "../../../../components/Cards/icons/ThumbsUp";
import ThumbsDown from "../../../../components/Cards/icons/ThumbsDown";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',

        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '0px',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            marginTop: '16px',
            marginLeft: '16px',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '100px',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);

function Contacts() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                height: '200px'
            }}>
                <div className={classes.cover}>
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs={8}>
                            <img src={"./../img/apartment.jpg"} alt="" style={{width: '71px', height: '71px'}}/>
                        </Grid>
                        <Grid item xs={8} justifyContent="center">
                            <ThumbsUp/>
                        </Grid>
                        <Grid item xs={8} justifyContent="center">
                            <ThumbsDown/>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Grid container spacing={2}
                              style={{
                                  paddingTop: '6px',
                              }}>
                            <Grid item xs={12}>
                                {/*<NextLink href="/employer/[id]" as={`/employer/${options.id}`}>*/}
                                <NextLink href="/employer/1">
                                    <Link>
                                        <Typography
                                            style={{
                                                fontSize: '20px',
                                                color: '#000000',
                                                fontWeight: 600,
                                                lineHeight: '24.38px',
                                                textAlign: 'start'
                                            }}
                                        >
                                            Masont G.
                                        </Typography>
                                    </Link>
                                </NextLink>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}
                        >
                            <Grid item xs={1}>
                                <Star/>
                            </Grid>
                            <Grid item xs={1}>
                                <Star/>
                            </Grid>
                            <Grid item xs={1}>
                                <Star/>
                            </Grid>
                            <Grid item xs={1}>
                                <Star/>
                            </Grid>
                            <Grid item xs={1}>
                                <Star/>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography
                                    style={{
                                        font: 'Montserrat Regular',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        lineHeight: '17px',
                                        letterSpacing: '0em',
                                        color: '#FF6231',
                                    }}
                                > 5.0</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}
                              style={{
                                  paddingTop: '6px',
                              }}
                        >
                            <Grid item xs={2}>
                                <Phone/>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography
                                    style={{
                                        font: 'Montserrat Regular',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        lineHeight: '17px',
                                        letterSpacing: '0em',
                                        color: '#120505',
                                    }}
                                > + 1 830-421-2568</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}
                              style={{
                                  paddingTop: '6px',
                              }}
                        >
                            <Grid item xs={2}>
                                <Email/>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography
                                    style={{
                                        font: 'Montserrat Regular',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        lineHeight: '17px',
                                        letterSpacing: '0em',
                                        color: '#120505',
                                    }}
                                > masontg34@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} style={{
                            marginTop: '0px',
                        }}>
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: '#6D6767'
                                    }}
                                >
                                    <Typography>
                                        Показать все контакты
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}

export default Contacts;
