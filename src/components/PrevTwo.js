import React from 'react'

export default function PrevTwo({ xpos, ypos, size, hasImage, confirm }) {

    const style = {
        transition: '.3s',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + hasImage + '.jpg'})`,
        borderRadius: '50%',
        border: 'solid 1px #ccc',
        width: `200px`, 
        height: `200px`, 
        overflow: 'hidden',
        backgroundSize: `${450 + ((200 - size)*2.4)}px auto`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${xpos + ((200 - size))}px -${ypos}px`
    }

    return (
        <>
            <div className={confirm ? 'prev2-wrapper confirmed' : 'prev2-wrapper'} >
                <div style={style}></div>
            </div>
        </>
    )
}
