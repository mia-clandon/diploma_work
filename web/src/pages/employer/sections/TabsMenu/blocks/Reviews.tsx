import React from "react";
import Typography from "@material-ui/core/Typography";
import {Avatar, Grid} from "@material-ui/core";

function Reviews({options}: {
    options: any;
}) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            xs={12}
            marginBottom={5}
        >
            <Grid
                item
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                marginBottom={5}
            >
                <Grid
                    item
                    direction="row"
                    xs={3}
                    marginTop={4}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        xs={12}
                    >
                        <Grid
                            item
                            marginRight={3}
                        >
                            <Avatar>H</Avatar>
                        </Grid>
                        <Grid
                            item
                            spacing={3}
                        >
                            <Typography>{options.firstname} {options.lastname} ФИО</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    direction="column"
                    xs={3}
                    // marginTop={4}
                    marginLeft={11}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        xs={12}
                        marginBottom={5}
                    >
                        <Grid
                            item
                            spacing={3}
                        >
                            <Typography>Test</Typography>
                        </Grid>
                        <Grid
                            item
                            spacing={3}
                        >
                            <Typography>Test</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Reviews;
