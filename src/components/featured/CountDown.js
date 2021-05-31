import React, { Component } from 'react';

import Slide from 'react-reveal/Slide';

class CountDown extends Component {

    state = {
        deadline: 'Dec, 01, 2021',
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }

    getTimeUnits = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time < 0) {
            console.log('Date passed')
        } else {
            const seconds = Math.floor( (time/1000)%60 ),
                minutes = Math.floor( (time/1000/60)%60 ),
                hours = Math.floor( (time/(1000*60*60)) %24 ),
                days = Math.floor( time/(1000*60*60*24) );

                this.setState({
                    days,
                    hours,
                    minutes,
                    seconds
                })
        }
    }

    componentDidMount() {
        setInterval( () => this.getTimeUnits(this.state.deadline), 1000 )
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">Event Start In</div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.days}</div>
                            <div className="countdown_tag">Days</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.hours}</div>
                            <div className="countdown_tag">Hs</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.minutes}</div>
                            <div className="countdown_tag">Min</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.seconds}</div>
                            <div className="countdown_tag">Sec</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default CountDown;  