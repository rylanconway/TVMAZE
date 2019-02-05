import React from 'react';
import 'w3-css/w3.css';
import axios from 'axios';

class SearchResult extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.click=this.click.bind(this)
    }

    click(e){
        this.showData(e.target.id);
        this.showCast(e.target.id);

    }


    showData(id){



        axios.get('http://api.tvmaze.com/shows/' + id)
            .then(response => {
                const data = response.data;
                this.props.updateShow(data);
            })

    }

    showCast(id) {

        axios.get('http://api.tvmaze.com/shows/' + id + '/cast')
            .then(response => {
                const castdata = response.data;
                this.props.currentCast(castdata);
            });
    }


    getImage(show){
        return (show.image) ? show.image.medium : "https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png"
    }

    render(){
        return (
            <div>
                {console.log(this.props.showData)}

                {
                    this.props.showData.map((item,index) =>
                    <li key={index} id={item.show.id} className="w3-bar-item w3-button w3-border-bottom w3-padding"  onClick={this.click}>
                        <img src={this.getImage(item.show)} alt="." style={{width: '30px', marginright: '20px'}}/>
                        {item.show.name}
                    </li>
                )}
            </div>
        )
    }
}

export default SearchResult;