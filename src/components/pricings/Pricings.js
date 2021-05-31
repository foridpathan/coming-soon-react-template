import React, { Component } from 'react';
import Pricing from './pricing/Pricing';

class Pricings extends Component {

    state = {
        prices: [
            {
                price: '100',
                title: 'Balcony',
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
                link: 'a',
                delay: 500
            },
            {
                price: '150',
                title: 'Medium',
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
                link: 'b',
                delay: 0
            },
            {
                price: '250',
                title: 'Star',
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
                link: 'c',
                delay: 500
            },
        ]
    }

    showBoxes = () => (
        Object.keys(this.state.prices).map(mKey => {
            return [...Array(this.state.prices[mKey])].map((box) => {
                return <Pricing
                    key={mKey}
                    delay={box.delay}
                    price={box.price}
                    title={box.title}
                    desc={box.desc}
                    link={box.link}
                />
            })
        })
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricings;