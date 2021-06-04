import React from "react";
import CreateReviewWindow from "../../CreateReviewWindow";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import BookingWindow from "../../../../../components/BookingSystem/BookingWindow";
import {Grid} from "@material-ui/core";

function Portfolio({options}: {
    options: any;
}) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
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
                    <Typography variant="h4">
                        Название услуги
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5">
                        Категория услуги
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5">
                        Описание услуги
                    </Typography>
                </Box>
                <Box marginTop={5}>
                    <BookingWindow info={options}/>
                </Box>
            </Grid>
            <Grid
                item
                direction="column"
                xs={3}
            >
                <img
                    width={300}
                    src="https://img3.stockfresh.com/files/r/rastudio/m/94/8626964_stock-vector-woman-during-cosmetology-procedure-in-beauty-salon.jpg"
                />
            </Grid>
        </Grid>

    )
}

export default Portfolio;
