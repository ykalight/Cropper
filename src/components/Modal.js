import React from 'react'

export default function Modal({ closeModal, handleImg}) {

    function handleClose() {
        closeModal()
    }

    function sendImg(img) {
        handleImg(img)
        handleClose()
    }

    return (
        <>
            <div className="mask" onClick={handleClose}>
                <div className="modalWrapper" onClick={e => e.stopPropagation()}>
                    <div>
                        <img alt="" src={process.env.PUBLIC_URL + '/img/hero_01.jpg'} onClick={() => sendImg('hero_01')} /> 
                    </div>
                    <div>
                        <img alt="" src={process.env.PUBLIC_URL + '/img/hero_02.jpg'} onClick={() => sendImg('hero_02')} /> 
                    </div>
                    <div>
                        <img alt="" src={process.env.PUBLIC_URL + '/img/hero_03.jpg'} onClick={() => sendImg('hero_03')} /> 
                    </div>
                    <div>
                        <img alt="" src={process.env.PUBLIC_URL + '/img/hero_04.jpg'} onClick={() => sendImg('hero_04')} /> 
                    </div>
                    <div>
                        <img alt="" src={process.env.PUBLIC_URL + '/img/hero_05.jpg'} onClick={() => sendImg('hero_05')} /> 
                    </div>
                    <div>
                        <img alt="" src={process.env.PUBLIC_URL + '/img/hero_06.jpg'} onClick={() => sendImg('hero_06')} /> 
                    </div>
                </div>
            </div>
        </>
    )
}
