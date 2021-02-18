import React from 'react'
// state for IMG, upload, final ok

export default function PrevOne({ xpos, ypos, size, hasImage }) {
    return (
        <div className="prev1-wrapper">
            <div className="prev1-inner" style={{width: '450px', height: '200px', overflow: 'hidden'}}>
                <div className="prev1-box"
                    style={{
                        width: `${size - 2}px`,
                        height: `${size - 2}px`,
                        top: `${ypos}px`,
                        left: `${xpos}px`
                    }}
                ></div>
                {/* <img alt="" src={process.env.PUBLIC_URL + '/img/hero_04.jpg'} /> */}
                <img alt="" src={process.env.PUBLIC_URL + '/img/' + hasImage + '.jpg'} />  
            </div>
        </div>
    )
}
