import React from 'react';
import 'w3-css/w3.css';


const API = 'http://api.tvmaze.com/shows/';

class CastList extends React.Component {

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

            <div className="w3-col s4">

                <div className="w3-sidebar" style={{width:'100%'}}>
                    <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">
                        Cast Information
                    </button>
                    <div id="demo" className="collapse">
                        {
                            this.props.currentCast.map((item,index) =>
                                <div key={index}>
                                    <img style={{width: '45px', height:'80px'}} src={item.person.image.medium} alt=""/>
                                    <h3>{item.person.name}</h3>
                                    {item.character.name}

                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default CastList;