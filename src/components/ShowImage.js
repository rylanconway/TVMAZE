import React from 'react';
import 'w3-css/w3.css';

let pic = '';


class ShowImage extends React.Component {


    
    render(){
        if (!this.props.displayImg.image)
        {
            pic = "https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png"
        }
        else
        {
            pic = this.props.displayImg.image.original;
        }


        return (
       <div>
            {/* <img src={showBigImg.image.original} alt="Large Thubnail IMG" /> */}
            <img src={pic} alt="Show Thumbnail" style={{width: '400px'}}/>
        </div>
        );
    }
}

export default ShowImage;