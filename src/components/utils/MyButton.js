import React from 'react';
import Button from '@material-ui/core/Button';

import iconButton from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <Button
            variant="contained"
            color={props.color}
            href= {props.href}
            size="small"
        >
            <img src={iconButton} className="iconImage" alt="icon_button" />
            {props.text}
        </Button>
    );
};

export default MyButton;