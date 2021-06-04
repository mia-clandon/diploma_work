import React from "react";
import BookingWindow from "../../../../../components/BookingSystem/BookingWindow";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Grid} from "@material-ui/core";
import CreateReviewWindow from "../../../../service/components/CreateReviewWindow";

function InfoBasicEmployer({options}: {
    options: any;
}) {
    console.log(options)
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            xs={12}
            marginBottom={5}

        >
            <Grid
                item
                direction="column"
                // alignItems="center"
                xs={3}
                marginTop={4}
            >
                <Box>
                    <Typography variant="h3">
                        {options.firstname} {options.lastname}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h4">
                        Сотрудник
                    </Typography>
                </Box>
                <Box marginTop={5}>
                    <BookingWindow info={options}/>
                </Box>
                <Box marginTop={2}>
                    <CreateReviewWindow info={options}/>
                </Box>
            </Grid>
            <Grid
                item
                direction="column"
                xs={3}
            >
                <img
                    src="https://img3.stockfresh.com/files/r/rastudio/m/94/8626964_stock-vector-woman-during-cosmetology-procedure-in-beauty-salon.jpg"
                />
            </Grid>
        </Grid>

    )
}

export default InfoBasicEmployer;
