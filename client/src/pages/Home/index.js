import React from 'react';
import Slider from '../../components/Slider/Slider'
import IndexCard from '../../components/IndexCard/Card';
export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <IndexCard />
            </React.Fragment>
        )
    }
}
