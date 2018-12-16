import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 20%;
    height: 15%;
    border: 1px solid black;
`;

const TipperName = styled.div`
    color: solid red;
`;

const TipAmount = styled.div`
    color: solid green;
`;

class TipAnnouncement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Container>
            <TipperName>{this.props.tipperName}</TipperName>
            <TipAmount>{this.props.tipAmount} tokens!</TipAmount></Container>);
    }
}

export default TipAnnouncement;