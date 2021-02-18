import React from 'react'

export default function PrevTwo({ xpos, ypos, size, hasImage, confirm, handleRedo }) {

    function handleOver() {
        handleRedo()
    }

    const style = {
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
            <div className="prev2-wrapper">
                <div style={style}></div>
            </div>
            
            {
                confirm && <button onClick={handleOver}>Delete & Start Over</button>
            }
        </>
    )
}
