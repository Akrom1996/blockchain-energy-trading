import React, { Component } from 'react';

class main extends Component {
    render() {
        return (
            <div>
                <h3>
                    {this.props.username}
                </h3>
            </div>
        );
    }
}

export default main;