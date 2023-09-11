import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'
import useClima from '../hooks/useClima'

const AppClima = () => {

    const {resultado, cargando, noResultado} = useClima()

  return (
    <>
      <main className='dos-columnas'>
        <Formulario />

        { cargando ? <Loading /> : noResultado ? <p>{noResultado}</p> : resultado?.name && <Resultado />} {/* Cuando hay un objeto que estpa vacío y luego se va a llenar, pon un optional change (resultado?) */}
      
      </main>
    </>
  )
}

export default AppClima
