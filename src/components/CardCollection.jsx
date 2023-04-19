import React from 'react'

export const CardCollection = ({...data}) => {
  //data de cada elemento photo
    // id:img.id,
    // photographer:img.photographer,
    // photographer_url:img.photographer_url,
    // src:img.src.medium,
    // alt:img.alt,
  
    return (
    <div className='card'>
        <h3 className='ph-name'>{data.photographer}</h3>
        <h4 className='url'>{data.photographer_url}</h4>
        <div className='img-container'>
            <img className='cover-img' src={data.src} alt={data.alt}/>
        </div>
    </div>
  )
}
