import React from 'react';
import {createStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import ContentBlock from "./blocks/ContentBlock/ContentBlock";

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
    });

function Reviews() {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{paddingTop: '20px', paddingLeft: '25px',}}>
            <HeaderBlock props={"Отзывы"}/>
            <ContentBlock/>
        </Card>
    );
}

export default Reviews;
