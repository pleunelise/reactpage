import React from 'react';

class Img extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: props.country
        }
    }

    render(){
        return (
/*
            <div className="Img">
*/
                <img id="achtergrond" src={"https://source.unsplash.com/1600x900/?" + this.state.country} alt={"image of " + this.state.country}></img>
/*            </div>*/
        )

    }

}

export default Img;

/*https://source.unsplash.com/1600x900/?netherlands*/
