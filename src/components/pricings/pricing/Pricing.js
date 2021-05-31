import React from 'react';
import Zoom from 'react-reveal/Zoom';
import MyButton from '../../utils/MyButton'

const Pricing = (props) => {
    return (
        <Zoom delay={props.delay}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>{props.price}</span>
                        <span>{props.title}</span>
                    </div>
                    <div className="pricing_description">
                        {props.desc}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase Now"
                            color="primary"
                            href={props.link}
                        />
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default Pricing;