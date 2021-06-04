import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import BookingWindow from "../../../../../../../components/BookingSystem/BookingWindow";
import CreateReviewWindow from "../../../../../../employer/sections/CreateReviewWindow";

function InfoBasicService({options}: {
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
                <Typography>
                    Test
                    {/*{options.title}*/}
                </Typography>
                <Box>
                    <Typography>
                        {/*{options.description}*/}
                    </Typography>
                </Box>
                <Box>
                    <BookingWindow info={options}/>
                </Box>
                <Box>
                    <CreateReviewWindow/>
                </Box>
            </Box>
        </Box>

    )
}

export default InfoBasicService;
