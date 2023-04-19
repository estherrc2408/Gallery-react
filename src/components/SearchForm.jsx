import React from 'react'
import { useState } from 'react';

export const SearchForm = ({addCollection}) => {
    //addCollection puede devolver un undefined o un array se colecciones buscadas no repetidas
    const [search,setSearch]=useState('');

    const handlerChange = (ev) =>{
        const {name,value}=ev.target;
        console.log(search)
        return setSearch({...search,[name]:value});//search:(valor introducido en el input)
    }

    const handlerSubmit = (ev) =>{
        ev.preventDefault();
        let newSearch={search};
        setSearch(newSearch);
        console.log(search);
        addCollection(search);
        //mandamos al array de colecciones buscadas lo introducido en el input al hacer el submit
        cleanForm(ev)
    }

    const cleanForm=(ev)=>{
        console.log('limpiando input')
        //setear a vacío los valores porque ya han entrado en el local
        setSearch('');
        document.getElementById('form').reset();
    }



  return (
    <>
        
        <form className='form' id="form" onSubmit={handlerSubmit}>
        <input className='i-form' id="search" name="search" type="text" placeholder='Search' onChange={handlerChange}/>
        <input className='s-form' type="submit" value="Buscar"/>
        </form>
        {/* {send && <p>Searching...</p>} */}
    </>
  )
}
