import React from 'react';
import { IconButton, Zoom, useScrollTrigger } from '@mui/material';
import {ArrowUpward} from '@mui/icons-material';

const BackToTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    return (
        <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className="toTop" style={{ position: "fixed", bottom: "2rem", right: "2rem", background: "mediumslateblue"}}>
            <IconButton aria-label="scroll back to top">
            <ArrowUpward />
            </IconButton>
        </div>
        </Zoom>
    );
};

export default BackToTop;
