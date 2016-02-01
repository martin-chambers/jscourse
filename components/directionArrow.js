import React from 'react';
import Paper from 'material-ui/lib/paper';
import Colors from 'material-ui/lib/styles/colors';
import NavigationArrowUpward from 'material-ui/lib/svg-icons/navigation/arrow-upward';
import NavigationArrowDownward from 'material-ui/lib/svg-icons/navigation/arrow-downward';

export default class DirectionArrow extends React.Component {
    constructor(props) {
        super(props);
        // shouldn't really put this here ...
        this.state = {
            direction:0
        }
    }

    render(){
        let img = (this.props.direction === 1) ? <NavigationArrowUpward color={Colors.green500}/> : <NavigationArrowDownward color={Colors.red500}/>
        return (
            <div>
                {img}
            </div>
        );
    }
}