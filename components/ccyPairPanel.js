import React from 'react';
import Paper from 'material-ui/lib/paper';
import DirectionArrow from './directionArrow';



const style = {
    height: 200,
    width: 200,
    margin: 20,
    textAlign: 'center',
    vericalAlign: 'middle',
    display: 'inline-block'
}

export default class CcyPairPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        let dirNum = Math.random();
        let dir = dirNum>0.5 ? 1 : -1;
        this.setState({direction: dir});
    }

    render(){
        return (
            <Paper style={{height: 200, width: 200, margin: 20, textAlign: 'center', verticalAlign: 'middle', display: 'inline-block'}} zDepth={2}>GBP/USD
            <DirectionArrow direction={this.state.direction}/>
            </Paper>
        )
    }
}


CcyPairPanel.propTypes = { direction: React.PropTypes.number };
CcyPairPanel.defaultProps = { direction: 0 };
