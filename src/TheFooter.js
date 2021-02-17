import React from 'react';
var  cc  = require('currency-codes');

class TheFooter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            countryname: props.countryname,
            currencycode: cc.country(props.countryname)[0].code,
            rates: {},
            date: ''

            //console.log("props", props)
            //console.log("datum:", this.state.rates.date)

        }
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=" + this.state.currencycode)
            .then(response => response.json())
            .then(data=>{
                console.log("got rates", data)
                this.setState({rates: data.rates})
                this.setState({date: data.date})
            })
    }

    render(){
        return (
            <footer>
                <h2>FOOTER</h2>
                <p>Pleun Emmelot, Amsterdam, {this.state.date}</p>
            </footer>
        )

    }

}


export default TheFooter;

/*

class Time extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            country: props.country,
            timeinfo: {}
        }
        // console.log("props", props)
        // console.log("currency code", cc.country(props.countryname)[0].code)
    }

    componentDidMount() {
        fetch("http://worldtimeapi.org/api/timezone/Europe/Paris")
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

                {/!*
                <div id="day"><p>DAY:</p>{this.state.data.datetime}</div>
*!/}
            </div>
        )

    }

}

export default Time;
*/


