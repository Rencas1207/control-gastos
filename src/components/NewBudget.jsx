import React from 'react'

const NewBudget = () => {
   return (
      <div className='contenedor-presupuesto contenedor sombra'>
         <form className='formulario'>
            <div className="campo">
               <label htmlFor="">Definir presupuesto</label>
               <input type="text"
                  className='nuevo-presupuesto'
                  placeholder='Añade tu presupesto'
               />
            </div>
            <input type="submit" value="Añadir" />
         </form>
      </div>
   )
}

export default NewBudget