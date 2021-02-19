import React, { useState }from 'react'
import PrevOne from './PrevOne'
import PrevTwo from './PrevTwo'
import Modal from './Modal'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

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
                    <p>Adjust area to be cropped for small promotions</p>
                    <div className="mainControl">
                        <button className="btControl" onClick={() => changeX('sub')}><NavigateBeforeIcon /></button>
                        <button className="btControl" onClick={() => changeX('add')}><NavigateNextIcon /></button>
                        <button className="btControl" onClick={() => changeY('sub')}><ExpandLessIcon /></button>
                        <button className="btControl" onClick={() => changeY('add')}><ExpandMoreIcon /></button>
                        <button className="btControl" onClick={() => changeSize('sub')}><ZoomInIcon /></button>
                        <button className="btControl" onClick={() => changeSize('add')}><ZoomOutIcon /></button>
                        <button className="btControl btReset" onClick={handleReset}>Reset</button>
                        <button className="btDefault btChange" onClick={openModal}>Change Image</button>
                        <button className="btDefault btOk" onClick={handleConfirm}>OK</button>
                        <button className="btDefault btCancel" onClick={handleRedo}>Cancel</button>
                    </div>
                </div>
                <div className="resultData">
                    <h3>Data to be sent to back-end</h3>
                    <div>X-position: {xpos * 4}</div>
                    <div>Y-position: {ypos * 4}</div>
                    <div>Width: {size * 4}</div>
                    <div>Height: {size * 4}</div>
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

    const renderConfirmmed = () => {
        if (confirm) {
            return (
                <>
                    <div style={{display: 'flex'}}>
                        <div>
                            <p>Large banner</p>
                            <PrevOne xpos={xpos} ypos={ypos} size={size} hasImage={hasImage} confirm={confirm} />
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <p>Small promotion</p>
                            <PrevTwo xpos={xpos} ypos={ypos} size={size} hasImage={hasImage} confirm={confirm} />
                        </div>
                    </div>
                    <div className="controls">
                        <button onClick={handleRedo}>Delete & Start Over</button>
                    </div>
                </>
            )  
        } else {
            return renderContent()
        }
    }

    return (
        <div className="container">
            <h2>Banner Image Crop Tool - v0.01</h2>
            {renderConfirmmed()}
            {modal && <Modal closeModal={closeModal} handleImg={handleImg} />}
        </div>
    )
}
