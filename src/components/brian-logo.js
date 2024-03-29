import React from 'react';

function BrianLogo(props) {
    const animate = props.animate;
    return (
        <svg className="anim-logo" version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="256pt" height="256pt" viewBox="0 0 1080.000000 1080.000000"
             preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)" stroke="white"
               stroke-width="32px">
                <path className={animate? "path": ""} d="M1660 5400 l0 -3740 3740 0 3740 0 0 3740 0 3740 -3740 0 -3740 0 0
                                                     -3740z m7280 0 l0 -3540 -3540 0 -3540 0 0 3540 0 3540 3540 0 3540 0 0 -3540z"/>
                <path className={animate? "path-color": ""} d="M5250 7990 l0 -710 55 0 55 0 0 710 0 710 -55 0 -55 0 0 -710z"/>
                <path className={animate? "path-color": ""} d="M4497 8083 c-4 -3 -7 -1218 -7 -2700 l0 -2693 195 0 195 0 0 70 0 70
                                                      -120 0 -120 0 2 1318 3 1317 118 3 117 3 0 69 0 70 -120 0 -120 0 0 1165 0
1165 120 0 120 0 0 75 0 75 -188 0 c-104 0 -192 -3 -195 -7z"/>
                <path className={animate? "path-color": ""} d="M5774 7976 c-3 -7 -4 -42 -2 -76 l3 -63 45 -25 c429 -231 680 -687
630 -1145 -43 -403 -267 -735 -625 -928 l-50 -27 -3 -144 -3 -145 90 -32 c194
-70 347 -167 496 -316 192 -192 309 -409 365 -677 23 -115 26 -385 4 -478 -7
-32 -16 -72 -19 -88 -11 -62 -60 -191 -108 -286 -152 -298 -412 -526 -732
-641 l-90 -33 -3 -62 c-2 -35 1 -67 6 -72 11 -11 178 43 281 94 280 134 529
377 665 646 37 74 95 219 102 255 2 17 7 34 9 38 17 27 48 234 52 349 4 118 1
152 -21 265 -59 292 -160 506 -341 717 -159 185 -421 358 -648 428 -42 13 -77
26 -77 29 0 3 28 19 62 35 283 137 540 420 649 718 72 193 100 395 80 576 -35
330 -158 589 -387 816 -67 67 -231 196 -248 196 -3 0 -27 12 -53 28 -89 51
-123 64 -129 48z"/>
                <path className={animate? "path-color": ""} d="M5250 2910 l0 -710 50 0 50 0 0 710 0 710 -50 0 -50 0 0 -710z"/>
            </g>
        </svg>
    );
}

export default BrianLogo;