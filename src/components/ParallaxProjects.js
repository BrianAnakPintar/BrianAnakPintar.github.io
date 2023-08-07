import React from 'react';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

function ParallaxProjects(props) {
    return (
        <div>
            <Parallax pages={3}>
                <ParallaxLayer>
                    <h1>Project 1</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                    <h1>Project 2</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={2}>
                    <h1>Project 3</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default ParallaxProjects;