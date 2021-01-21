import React from 'react';

class Searchbar extends React.Component{
    /*constructor(props) {
        super(props);

        this.state = {
            country: props.country,
        }
        // console.log("props", props)
        // console.log("currency code", cc.country(props.countryname)[0].code)
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=")
            .then(response => response.json())
            .then(data=>{
                console.log("got rates", data)
                this.setState({rates: data.rates})
            })
    }*/

    render(){
        return (
            <div className="Searchbar">
                <select name="select">
                    <option value="value1" selected>Africa</option>
                    <option value="value2">America</option>
                    <option value="value3">Antarctica</option>
                    <option value="value4">Asia</option>
                    <option value="value5">Atlantic</option>
                    <option value="value6">Australia</option>
                    <option value="value7">Europe</option>
                    <option value="value8">Indian</option>
                    <option value="value9">Pacific</option>
                </select>
            </div>
        )

    }

}
// GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP HTTP/1.1
// https://api.exchangeratesapi.io/latest?base= + this.state.currencycode
// console.log(cc.country('colombia'));

export default Searchbar;