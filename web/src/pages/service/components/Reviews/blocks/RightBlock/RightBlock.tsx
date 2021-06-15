import React from 'react';
import {createStyles, Theme, useTheme} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box";
import InfoHeaderBlock from "./blocks/InfoHeaderBlock/InfoHeaderBlock";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RatingCore from "../../../RatingCore/RatingCore";

const useStyles = (theme: Theme) =>
    createStyles({
        details: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '0px',
        },
        content: {
            flex: '1 0 auto',
        },
    });

function RightBlock() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.details}>
            <CardContent className={classes.content}>
                <InfoHeaderBlock/>
                <RatingCore/>
                <Grid item xs={12}>
                    <Typography
                        style={{
                            font: 'Montserrat Regular',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '19.5px',
                            color: '#6D6767',
                        }}
                    >
                        Красивая, светлая, солнечная, безупречно меблированная - просторная квартира с одной спальней в
                        мечтательном месте в восточной деревне Манхэттена. Супердоступное ...</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        style={{
                            font: 'Montserrat Regular',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '19.5px',
                            color: 'black',
                        }}
                    >
                        Посмотреть всё</Typography>
                </Grid>
            </CardContent>
        </Box>
    );
}

export default RightBlock;
