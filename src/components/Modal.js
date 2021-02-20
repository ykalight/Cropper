import React from 'react'

export default function Modal({ closeModal, handleImg, images }) {

    function handleClose() {
        closeModal()
    }

    function sendImg(img) {
        handleImg(img)
        handleClose()
    }
    
    function renderImg() {
        return (
            <>
            {images.name.map((name, idx) => {
                return (
                    <div key={idx}>
                        <img alt="" src={`${process.env.PUBLIC_URL}/img/${name}.jpg`} onClick={() => sendImg(name)} /> 
                    </div>
                )
            })}
            </>
        )
    }

    return (
        <div className="mask" onClick={handleClose}>
            <div className="modalWrapper" onClick={e => e.stopPropagation()}>
                {renderImg()}
            </div>
        </div>
    )
}
