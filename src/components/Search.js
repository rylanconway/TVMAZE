import React from 'react';
import _ from 'lodash';
import 'w3-css/w3.css';

const API = 'http://api.tvmaze.com/search/shows?q=';


class Search extends React.Component {

    constructor(props) {
        super(props);
     
        this.onChange = this.onChange.bind(this); // binding this because onChange is called in another scope
        this.debouncedOnChange = _.debounce(this.debouncedOnChange.bind(this), 200); // debouncing function to 200ms and binding this
      }
     
      onChange(event) {
        this.debouncedOnChange(event.target.value); // sending only the values not the entire event
      }
     
      debouncedOnChange(value) {
        this.search(value); // perform a search only once every 200ms
      }
     
      componentDidMount(){
        this.search()
      }

      search(value) {
        // fetch objects from backend
        fetch( API + value)
        .then((response) => response.json())
        .then((responseJson) =>{
          console.log(responseJson);
          this.props.updateResult(responseJson)
        })
        .catch(error => console.log('Search failed because, ',error))
    }

    render(){
        return (
       <div>
            <input className="w3-bar-item w3-input w3-border" placeholder="Search Term..." onChange={this.onChange} />
          
          </div>
        );
    }
}

export default Search;