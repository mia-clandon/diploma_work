import React from 'react';
import Typography from '@material-ui/core/Typography';

function HeaderBlock() {
    return (
        <Typography style={{
            font: 'Montserrat Regular',
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '29.26px',
            color: '#120505',
            marginLeft: '15px',
        }}>
            Контакты
        </Typography>

    );
}

export default HeaderBlock;
