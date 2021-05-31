import React from 'react';

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { scroller } from 'react-scroll'

const SideDrawer = (props) => {

    const scrollToElement = (elements) => {
        scroller.scrollTo(elements,{
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -90
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            
            <List component="nav">
                <ListItem button onClick={() => { scrollToElement("slider") }}>
                    Slider
                </ListItem>

                
                <ListItem button onClick={() => { scrollToElement("events") }}>
                    Events
                </ListItem>

                
                <ListItem button onClick={() => { scrollToElement("highlight") }}>
                    Highlights
                </ListItem>

                
                <ListItem button onClick={() => { scrollToElement("pricing") }}>
                    Pricing
                </ListItem>

                
            </List>

        </Drawer>
    );
};

export default SideDrawer;