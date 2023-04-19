import React from 'react'
import { SearchForm } from './SearchForm'
import { Collection } from './Collection'
import { useState } from 'react'

export const Container = () => {

    //almacen de collection  buscadas, tan solo los nombres
    let [arrayCollections, setArrayCollections]=useState([]);

    const addCollection=(search)=>{
        console.log('busqueda que llega al container ',search);
        console.log('lo que tenemos en el array de colecciones',arrayCollections)
        let name=search.search;
        if(typeof name=='object')return 'Ya estás viendo esa colección!';
        
        let findCollection=arrayCollections.find(collection=>collection.toLowerCase()===name.toLowerCase());
        console.log('entra en el array?',!findCollection);

        if(!findCollection){
            console.log('entra')
            setArrayCollections([name,...arrayCollections]);
            console.log(arrayCollections);
            return arrayCollections
        };
        return;
        //[{search:'__'},{search:'__'},...]
    }


  return (
    <>
    <section className="pad form-container">
    <h2 className='subtitle'>Buscador</h2>
        <SearchForm addCollection={addCollection}/>
        {/* {isLoading &&<h3>Cargando...</h3>} */}
    </section>
    <h2 className='subtitle'>Colecciones:</h2>
    <section className="body-container">
        
        {
        typeof addCollection=='string'&&<h3>{addCollection}</h3>
        }
        {arrayCollections.map(collection=>(
                <Collection collection={collection} key={collection}/>
        ))}
    </section>
    </>
  )
}
