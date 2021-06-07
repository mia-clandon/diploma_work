import * as React from 'react';
import {experimentalStyled as styled} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Tag from "./icons/Tag";
import CardChooseEditors from './CardChooseEditors/CardChooseEditors';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ChooseEditors() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} justifyContent="flex-start">
                            <Item style={{display: 'flex', flexDirection: 'row'}}>
                                <Tag/>
                                <Typography
                                    style={{
                                        fontSize: '24px',
                                        color: '#000000',
                                        fontWeight: 400,
                                        lineHeight: '29.26px',
                                        marginLeft: '15px',
                                    }}
                                >
                                    Выбор редакции
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CardChooseEditors/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ChooseEditors;
