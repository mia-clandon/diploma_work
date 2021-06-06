import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {InputAdornment} from "@material-ui/core";
import DollarSign from "../icons/DollarSign";

const currencies = [
    {
        value: 'Любой бюджет',
    },
    {
        value: 'до 100$',
    },
    {
        value: 'до 1000$',
    },
    {
        value: 'от 1000$',
    },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export default function SelectBlock() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                select
                value={currency}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <DollarSign/>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value} style={{padding: 10}}>
                        {option.value}
                    </option>
                ))}
            </TextField>
        </form>
    );
}
