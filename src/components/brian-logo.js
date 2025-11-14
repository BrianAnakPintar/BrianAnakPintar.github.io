import React from 'react';
import IMAGES from '../Assets/IMAGES';

function LandingImg(props) {
    const animate = props.animate;
    return (
        <div className='landing_img'>
            {/* <img className='img_landing_img' src='https://github.com/BrianAnakPintar/BrianAnakPintar/blob/main/Dancing%20Gopher.gif?raw=true'></img> */}
            <img width={300} style={{borderRadius: '5%'}} className='img_landing_img' src={IMAGES.snorlaxRotate}></img>
        </div>
    );
}

export default LandingImg;