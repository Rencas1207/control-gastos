import React from 'react'
import {
   LeadingActions,
   SwipeableList,
   SwipeableListItem,
   SwipeAction,
   TrailingActions
} from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css'
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

const Expense = ({ expense, setExpenseEdit, deleteExpense }) => {
   const { categoria, nombre, fecha, cantidad, id } = expense;

   const leadingActions = () => (
      <LeadingActions >
         <SwipeAction onClick={() => setExpenseEdit(expense)}>
            Editar
         </SwipeAction>
      </LeadingActions>
   )

   const trailingActions = () => (
      <TrailingActions >
         <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
            Eliminar
         </SwipeAction>
      </TrailingActions>
   )

   return (
      <SwipeableList>
         <SwipeableListItem
            trailingActions={trailingActions()}
            leadingActions={leadingActions()}
         >
            <div className='gasto sombra'>
               <div className="contenido-gasto">
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
         </SwipeableListItem>
      </SwipeableList>
   )
}

export default Expense