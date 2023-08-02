/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import "./ClipsGiphySection.css"

const ClipsGiphySection = ({giphysArray}) => {

  const [giphys , setGiphys] = useState([]);
  
  const randomizeData = (giphysArray) => {
    return giphysArray.sort(()=> Math.random()- 0.5);
};
  
  
  useEffect(() => {
    let randomData = randomizeData(giphysArray);
    setGiphys(randomData.slice(0,3));

  },[giphysArray]);


  return (
    <div className='clips-grid'>
      {giphys && giphys.length ? (
        <>
        {/*first big gif*/}
        <div className='first-column'>
          <img src= {giphys?.[0]?.images.downsized.url}/>
          <div className='text'>
            <img src='/images/giphyIconDark.png'alt='dark logo'></img>
            <p>{giphys?.[0].title}</p>  
          </div>
        </div>

      <div className='second-column'>
        {/*second column first gif*/}
        <img src= {giphys?.[1]?.images.downsized.url}/>
        <div className='text'>
          <img src='/images/giphyIconDark.png'alt='dark logo'></img>
          <p>{giphys?.[1].title}</p>
        </div>

        {/*second column second gif*/}
        <img src= {giphys?.[2]?.images.downsized.url}/>
        <div className='text'>
          <img src='/images/giphyIconDark.png'alt='dark logo'></img>
          <p>{giphys?.[2].title}</p>  
        </div>
      </div>
       </>
      ): null}
      
    </div>
  )
}

export default ClipsGiphySection
