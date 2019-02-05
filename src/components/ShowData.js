import React from 'react';
import 'w3-css/w3.css';

const API = 'http://api.tvmaze.com/shows/';

class ShowData extends React.Component {
    
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

    network()
    {
        if (this.props.currentShow.network == null)
        {
            return ('');
        }
        else
        {
            return (
                <div>
                <h3>{this.props.currentShow.network.name} {this.props.currentShow.network.country.name}</h3>
            </div>
            )

        }
    }

    render(){
        let striptags = require('striptags');
        return (
       <div>
          <div>
            <h1>{}</h1>
            <h3>

            </h3>
            <div>
                <h1>{this.props.currentShow.name}</h1>
            </div>
              {this.network()}
            <div>
                <strong>Genres:</strong>
                {this.props.currentShow.genres}
            </div>
            <div>
                <strong>Type:</strong>
                {this.props.currentShow.type}
            </div>
            <div>
                <strong>Language:</strong>
                {this.props.currentShow.language}
            </div>
            <div>
                <strong>Premiered:</strong>
                {this.props.currentShow.premiered}
            </div>
            <div>
                <strong>Status:</strong>
                {this.props.currentShow.status}
            </div>

              <div>
                  <strong>Description:</strong>

                  {striptags(this.props.currentShow.summary)}
              </div>
            </div>
        </div>
        );
    }
}

export default ShowData;