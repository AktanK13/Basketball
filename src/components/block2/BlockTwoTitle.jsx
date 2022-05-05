import React from 'react';
 
export default function BlockTwoTitle({
  firstText, firstColor, secondText, secondColor
}) {

  return (
    <>
      {firstText && <span style={{color: firstColor}} className='first'>{firstText}</span>}
      {' '}
      {secondText && <span style={{color: secondColor}} className='second'>{secondText}</span>}
    </>
  )
}