import React from 'react';
const { getCode } = require('country-list');

class Flag extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country : props.country
        }
    }

    render(){
        return (
            <div className="Flag">
                <img src={"https://www.countryflags.io/" + getCode(this.state.country) + "/flat/64.png"} alt={"flag of " + this.state.country}></img>

            </div>
        )

    }

}

export default Flag;
