import React from 'react';
import './App.css';
import Flag from "./Flag";
import Searchbar from "./Searchbar";
import Img from "./Img"
import Holiday from "./Holiday";
import Weather from "./Weather";
import Time from "./Time";
import Currency from "./Currency";
import TheFooter from "./TheFooter";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "france"
        }
            
    }

    render() {
        return (
            <div className="grid-container">
                <Flag country={this.state.country}/>
                <Searchbar country={this.state.country}/>
                <Img country={this.state.country}/>
                <Holiday />
                <Weather />
                <Time country={this.state.country}/>
                <Currency countryname={this.state.country}/>
                <TheFooter />
            </div>
        )
    }

}

export default App;
/*
-----------------------------------------------------------------
class App extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.character.name}
            </div>
        )
    }
}

*/
