import React from 'react'
import './Modal.css'
import BlockTwo from '../../main/block2/BlockTwo.jsx'
function Model({active, setActive, divak}) {

  return (
    <div className={active ? "modal modal_active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal_conpanent" onClick={e => e.stopPropagation()}>
            {divak}
        </div>
    </div>
  )
}

export default Model
