import React from 'react';

function LandingImg(props) {
    const animate = props.animate;
    return (
        <div className='landing_img'>
            <img className='img_landing_img' src='https://github.com/BrianAnakPintar/BrianAnakPintar/blob/main/Dancing%20Gopher.gif?raw=true'></img>
        </div>
    );
}

export default LandingImg;