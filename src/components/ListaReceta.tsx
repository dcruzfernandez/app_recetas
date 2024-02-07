import React, { useState } from 'react'
import { recipeArray } from '../data/recipeArray'
import { Tarjeta } from './Tarjeta'

export const ListaReceta = () => {
  const [recetas, setRecetas] = useState(recipeArray);
  
  const cambiarFavorito = (id:number) => {
    const favoritas = recetas.map(item => {
      if (item.id === id) {
        return { ...item, favorito: !item.favorito };
      }
      return item;
    });
    setRecetas(favoritas);
  };
  return (
    <div className='container mx-auto'>
        <h1 className='text-center'>Recetas disponibles</h1>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
            {
                recetas.map((receta,i)=>(
                    <Tarjeta data={receta} cambiar={(id)=>{cambiarFavorito(id)}} key={i}/>
                ))
            }
        </div>
    </div>
  )
}
