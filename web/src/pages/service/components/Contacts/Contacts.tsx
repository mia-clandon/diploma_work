import React from 'react';
import {Theme, createStyles, makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ContentBlock from "./blocks/ContentBlock/ContentBlock";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
    }),
);

function Contacts() {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{paddingTop: '20px', paddingLeft: '25px',}}>
            <HeaderBlock props={"Контакты"}/>
            <ContentBlock/>
        </Card>
    );
}

export default Contacts;
