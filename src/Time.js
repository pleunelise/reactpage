import React from 'react';
/*var country = require('countryjs');

    .transform(bulkify, {
        global: true
    })*/

class Time extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            country: props.country,
            timeinfo: {}
        }
        //console.log(country.capital('US'))
        //console.log(country.wiki('france', 'name'))
        // console.log("props", props)
        // console.log("currency code", cc.country(props.countryname)[0].code)
    }

    componentDidMount() {
        fetch("http://worldtimeapi.org/api/timezone/Europe/Helsinki")
            .then(response => response.json())
            .then(data=>{
                console.log("got time", data)
                this.setState({timeinfo: data})
            })
    }

    render(){
        return (
            <div className="Time">
                <h2>TIME - {this.state.timeinfo["datetime"]}</h2>
{/*
                <div id="day"><p>DAY:</p>{this.state.data.datetime}</div>
*/}
            </div>
        )

    }

}

export default Time;

/*
"http://worldtimeapi.org/api/timezone/America/Argentina/Salta"
"http://worldtimeapi.org/api/timezone/Europe/Paris"
, {mode:'no-cors'}*/

