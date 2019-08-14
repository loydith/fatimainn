import React from 'react';
import Carousel from '../../components/Carousel'
import Card from '../../components/ConferenceRoom';
import SlideConference from '../../components/SlideConference/SlideConference';

export default class ConferenceRoom extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SlideConference/>
                <ConferenceRoom />
                
            </React.Fragment>
        )
    }
}
