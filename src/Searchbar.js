import React from 'react';

class Searchbar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            /*country: props.country,*/
            searchTerm: ''
        }
        console.log("zoekopdracht: ", this.state.searchTerm)
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    callBackMethod(){
        this.props.sendData(this.state.searchTerm);
    }

    render(){
        return (
            <div className="Searchbar" style={{textAlign: 'center', paddingTop: '30vh'}}>
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
                <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search for a country!'/>
            </div>
        )

    }

}

export default Searchbar;
