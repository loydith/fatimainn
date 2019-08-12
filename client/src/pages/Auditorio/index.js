import React from 'react';
import Carousel from '../../components/Carousel'
import Card from '../../components/IndexCard';
export default class Auditorio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Carousel />
                <Card />
            </React.Fragment>
        )
    }
}
