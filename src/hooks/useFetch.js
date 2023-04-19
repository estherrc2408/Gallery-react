import { useEffect, useState } from 'react'
import {pexels} from '../api/pexels'
// import { getPhotos } from '../../helpers/getPhotos';

export const useFetchImg = (requ) => {
    console.log('dato buscado en el fetch',requ)
    // const collection=collection;
    const [photos,setPhotos]=useState([]);
    const [isLoading,setIsLoading]=useState(true);//cambia a false cuando ya tengamos todo
  
    const getPhotos=async (collection)=>{
        const {photos}=await pexels(collection);//debería traer en el item photos un array de seis elementos
        console.log(photos);
        const arrayDataPhotos=photos.map(img=>({
            id:img.id,
            photographer:img.photographer,
            photographer_url:img.photographer_url,
            src:img.src.medium,
            alt:img.alt,
        }))
        console.log(arrayDataPhotos);
        return arrayDataPhotos;
    }

    const getImages=async(requ)=>{
        const NewPhotos=await getPhotos(requ);
        setPhotos(NewPhotos);
        console.log(NewPhotos);
        setIsLoading(false);
    }
    useEffect(()=>{
        console.log()
        getImages(requ)//
    },[])//getImages se ejecutará solo una vez, cuando renderice el componente por primera vez, dado que su segundo arg es un array vacío
    




    return {
    photos,//photos toma el valor del arrayDataPhotos
    isLoading,//sera true o false
  }
}
