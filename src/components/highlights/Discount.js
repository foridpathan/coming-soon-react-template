import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discount_start: 0,
        discount_end: 30
    }

    porcentage = () => {
        if (this.state.discount_start < this.state.discount_end) {
            this.setState({
                discount_start: this.state.discount_start + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout( () => {
            this.porcentage()
        }, 30 )
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal = {() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discount_start}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Now</h3>
                            <p>y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            <MyButton
                                color="secondary"
                                href="https://google.com"
                                text="Button"
                            />

                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;