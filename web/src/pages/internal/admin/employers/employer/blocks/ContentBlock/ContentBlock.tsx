import React from 'react';
import Box from "@material-ui/core/Box";
import LeftBlock from "../LeftBlock/LeftBlock";
import RightBlock from "../RightBlock/RightBlock";

function ContentBlock({options}: { options?: any }) {
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
            <LeftBlock options={options}/>
            <RightBlock options={options}/>
        </Box>
    );
}

export default ContentBlock;
