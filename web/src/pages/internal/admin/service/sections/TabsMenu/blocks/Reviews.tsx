import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Reviews({options}: {
    options: any;
}) {
    return (
        <Box display='flex'>
            <Box display='flex'>
                {/*<Image*/}
                {/*    boxSize="350px"*/}
                {/*    src="https://img3.stockfresh.com/files/r/rastudio/m/94/8626964_stock-vector-woman-during-cosmetology-procedure-in-beauty-salon.jpg"*/}
                {/*/>*/}
            </Box>
            <Box display='flex'>
                <Typography>{options.firstname} {options.lastname}</Typography>
                <Box>
                    <Typography>{options.position}</Typography>
                </Box>
                <Box>
                    <Typography>{options.description}</Typography>
                </Box>
            </Box>
        </Box>

    )
}

export default Reviews;
