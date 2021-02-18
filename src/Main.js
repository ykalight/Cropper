import React, { useState }from 'react'
import PrevOne from './PrevOne'
import PrevTwo from './PrevTwo'

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

    return (
        <div>
            <div style={{display: 'flex'}}>
                <PrevOne xpos={xpos} ypos={ypos} size={size} />
                <PrevTwo xpos={xpos} ypos={ypos} size={size} />
            </div>
            <div className="controls">
                <button onClick={() => changeX('sub')}>left</button>
                <button onClick={() => changeX('add')}>right</button>
                <button onClick={() => changeY('sub')}>up</button>
                <button onClick={() => changeY('add')}>down</button>
                <button onClick={() => changeSize('sub')}>Smaller</button>
                <button onClick={() => changeSize('add')}>Bigger</button>
            </div>
        </div>
    )
}
