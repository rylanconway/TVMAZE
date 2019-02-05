import React from 'react';
import 'w3-css/w3.css';
import ShowImage from './ShowImage';
import ShowData from './ShowData';
import CastList from './CastList';

class ShowDisplay extends React.Component {
    
    render(){
    return (
      <div className= "w3-container">
      <div className="w3-row-padding">
      <div className="w3-col s4">
        <ShowImage displayImg={this.props.displayImg}/>
        </div>
        <div className="w3-col s4">
           <ShowData
                currentShow={this.props.currentShow}
           />
        </div>
        <div className="w3-col s4">
        <div className="w3-sidebar">
            <CastList currentCast={this.props.currentCast}/>
        </div>
        </div>
      </div>
      </div>
    )
}
}

export default ShowDisplay;
