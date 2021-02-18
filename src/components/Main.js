import React, { useState }from 'react'
import PrevOne from './PrevOne'
import PrevTwo from './PrevTwo'
import Modal from './Modal'

const STARTVALUE = {
    xpos: 225,
    size: 200,
    xIncrement: 10,
    yIncrement: 5,
    sizeIncrement: 5,
    maxRight: 245,
    minLeft: 150,
    minSize: 180
}

// const BTSTATE = {
//     left: true,
//     right: true,
//     up: false,
//     down: false,
//     bigger: false,
//     smaller: true
// }

export default function Main() {
    const [hasImage, setHasImage] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [modal, setModal] = useState(false)
    const [xpos, setXpos] = useState(STARTVALUE.xpos)
    const [ypos, setYpos] = useState(0)
    const [size, setSize] = useState(STARTVALUE.size)

    const changeX = (dir) => {
        if (dir === 'sub' && xpos > STARTVALUE.minLeft) setXpos(prev => prev - STARTVALUE.xIncrement)
        if (dir === 'add' && xpos < (STARTVALUE.maxRight + (STARTVALUE.size - size))) setXpos(prev => prev + STARTVALUE.xIncrement)
    }

    const changeY = (dir) => {
        if (dir === 'sub' && ypos > 0) setYpos(prev => prev - STARTVALUE.yIncrement)
        if (dir === 'add' && ypos < (0 + (STARTVALUE.size - size))) setYpos(prev => prev + STARTVALUE.yIncrement)
    }

    const changeSize = (dir) => {
        if (dir === 'sub' && size > STARTVALUE.minSize) setSize(prev => prev - STARTVALUE.sizeIncrement)
        if (dir === 'add' && STARTVALUE.size > (size + ypos) && STARTVALUE.size > (size + (xpos - STARTVALUE.maxRight))) setSize(prev => prev + STARTVALUE.sizeIncrement)
    }

    const handleReset = () => {
        setXpos(STARTVALUE.xpos)
        setYpos(0)
        setSize(STARTVALUE.size)
    }
    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)
    const handleConfirm = () => setConfirm(true)
    const handleImg = (img) => {
        setHasImage(img)
        handleReset()
    }
    const handleRedo = () => {
        setConfirm(false)
        setHasImage('')
        handleReset()
    }

    const renderContent = () => {
        if (hasImage !== '') {
            return (
            <div className="blockSection">
                <div style={{display: 'flex'}}>
                    <PrevOne xpos={xpos} ypos={ypos} size={size} hasImage={hasImage} />
                    <PrevTwo xpos={xpos} ypos={ypos} size={size} hasImage={hasImage} />
                </div>
                <div className="controls">
                    <button onClick={() => changeX('sub')}>left</button>
                    <button onClick={() => changeX('add')}>right</button>
                    <button onClick={() => changeY('sub')}>up</button>
                    <button onClick={() => changeY('add')}>down</button>
                    <button onClick={() => changeSize('sub')}>Smaller</button>
                    <button onClick={() => changeSize('add')}>Bigger</button>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={openModal}>Change Image</button>
                    <button onClick={handleConfirm}>OK</button>
                </div>
            </div>
            )
        } else {
            return (
                <div className="blockSection">
                    <button onClick={openModal}>Upload Banner image</button>
                </div>
            )
        }

}

    return (
        <div>
            {
                confirm ?
                <PrevTwo xpos={xpos} ypos={ypos} size={size} hasImage={hasImage} confirm={confirm} handleRedo={handleRedo} />
                :
                renderContent()
            }
            {modal && <Modal closeModal={closeModal} handleImg={handleImg} />}
        </div>
    )
}
