import React, { Component } from 'react';

class Mapdata extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.goback}>BACK</button>
                {JSON.stringify(this.props.map)}
            </div>
        );
    }
}

export default Mapdata;