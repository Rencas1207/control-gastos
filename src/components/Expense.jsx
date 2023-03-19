import React from 'react'
import { formatearFecha } from '../helpers';

import iconAhorro from '../img/icono_ahorro.svg';
import iconCasa from '../img/icono_casa.svg';
import iconComida from '../img/icono_comida.svg';
import iconGastos from '../img/icono_gastos.svg';
import iconOcio from '../img/icono_ocio.svg';
import iconSalud from '../img/icono_salud.svg';
import iconSuscripciones from '../img/icono_suscripciones.svg';

const diccionarioIconos = {
   "ahorro": iconAhorro,
   "comida": iconComida,
   "casa": iconCasa,
   "gastos": iconGastos,
   "ocio": iconOcio,
   "salud": iconSalud,
   "suscripciones": iconSuscripciones
}

const Expense = ({ expense }) => {
   const { categoria, nombre, fecha, cantidad, id } = expense;
   return (
      <div className='gasto sombra'>
         <div className="contenido-gasto">
            {/* icon imagen*/}
            <img src={diccionarioIconos[categoria]} alt={`icon ${categoria}`} />

            <div className="descripcion-gasto">
               <p className="categoria">{categoria}</p>
               <p className="nombre-gasto">{nombre}</p>
               <p className="fecha-gasto">Agregado el: {''}
                  <span>{formatearFecha(fecha)}</span>
               </p>
            </div>
         </div>
         <p className='cantidad-gasto'>S/. {cantidad}</p>
      </div>
   )
}

export default Expense