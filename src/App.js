
import React, { Component } from 'react';
import 'w3-css/w3.css';
import Search from './components/Search';
import SearchResult from './components/SearchResult';
// import ShowImage from './components/ShowImage';
import ShowDisplay from './components/ShowDisplay';
import axios from 'axios';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            info:[],
            showImg:"",
            currentShow: [],
            currentCast: [],

        }

    }

    updateResult = (show) => {
        this.setState({info:show})
    };

    displayImg = (imageUrl) => {
        this.setState({showImg:imageUrl})
    };

    updateShow = (data) => {
        this.setState({currentShow:data})
    };

    castShow = (data) => {
      this.setState({currentCast:data})
    };

    render() {
        return (
            <div>
                <div className="w3-sidebar w3-light-grey w3-bar-block w3-card-4" style={{ width:'20%' }}>
                    <img style={{width:'100%'}} src="https://static.tvmaze.com/images/tvm-header-logo.png" alt='' />
                    <Search updateResult={this.updateResult}/>
                    <SearchResult currentCast={this.castShow} showData={this.state.info} displayImg={this.displayImg} updateShow={this.updateShow}/>
                </div>
                <div style={{ marginLeft:'20%' }}>
                    <div className="w3-container">
                        <ShowDisplay
                            displayImg={this.state.currentShow}
                            currentShow={this.state.currentShow}
                            currentCast={this.state.currentCast}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;