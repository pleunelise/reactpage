import React from 'react';
var  cc  = require('currency-codes');

class Currency extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            countryname: props.countryname,
            currencycode: cc.country(props.countryname)[0].code,
            rates: {}
        }
        // console.log("props", props)
        // console.log("currency code", cc.country(props.countryname)[0].code)
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=" + this.state.currencycode)
        .then(response => response.json())
        .then(data=>{
            console.log("got rates", data)
            this.setState({rates: data.rates})
        })
    }

    render(){
        return (
            <div className="Currency">
                <h2>CURRENCY - {this.state.currencycode}</h2>
                <div id="first"><p>USD:</p>{this.state.rates["USD"]}</div>
                <div id="second"><p>EUR:</p>{this.state.rates["EUR"]}</div>
                <div id="third"><p>GBP:</p>{this.state.rates["GBP"]}</div>
            </div>
        )

    }

}
// GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP HTTP/1.1
// https://api.exchangeratesapi.io/latest?base= + this.state.currencycode
// console.log(cc.country('colombia'));

export default Currency;