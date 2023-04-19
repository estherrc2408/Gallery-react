import React from 'react'
import { CardCollection } from './CardCollection'
import { useFetchImg } from '../hooks/useFetch'

export const Collection = ({collection}) => {
    const {photos,isLoading}=useFetchImg(collection);
    //photos contiene un array de objetos con la data de las imagenes encontradas
//data de cada elemento photo
    // id:img.id,
    // photographer:img.photographer,
    // photographer_url:img.photographer_url,
    // src:img.src.medium,
    // alt:img.alt,
  return (
    <>
    <h2 className='subtitle bc-ol wh'>{collection}</h2>
    <div className='collection'>
        
        {
            isLoading&&<h3>Cargando elementos de la coleccion...</h3>
        }
        {
            photos.map((data)=>(
                <CardCollection key={data.id}{...data}/>
            ))
        }
    </div>
    </>
  )
}
