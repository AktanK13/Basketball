import React from 'react'
import './Article.css'
import titlecircle from '../../../../images/block1/titlecircle.png'
import articlephoto from '../../../../images/block1/articlephoto.png'

function Article() {
  return (
    <div className='article'>
        <div className='title-h1'>
            <p>JERSEY</p>
            <img src={titlecircle}/>
            <pre>   </pre>
            <p> NBA</p>
        </div>   
        <div className='subtitle-acticle'>
          <div className='subtitle-text'><p>whichever <span className='blue'>nba</span> <span className='red'>team</span> your support, get your jersey here today.</p></div>
            <img src={articlephoto} />
        </div>
    </div>
  )
}

export default Article