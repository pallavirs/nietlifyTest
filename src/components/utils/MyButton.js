import React from 'react';
import ticketIcon from '../../resources/images/icons/ticket.png';
import Button from '@material-ui/core/Button' ;
const MyButton = (props) => {
    return (
        <Button
        href={props.link}
        variant="contained"
        size="small"
        style={{
            background :props.bckcolor,
            color:props.color
        }}
        >
            <img
            src={ticketIcon}
            className="iconImage"
            alt="icon-button"

            />
            {props.text}
        </Button>
    );
};

export default MyButton;