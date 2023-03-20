import { useState, useEffect } from "react"

const BudgetControl = ({ budget, expenses }) => {

   const [available, setAvailable] = useState(0);
   const [spent, setSpent] = useState(0);

   useEffect(() => {
      const totalSpent = expenses.reduce((total, expense) => expense.cantidad + total, 0);
      const totalAvailable = budget - totalSpent;

      setSpent(totalSpent);
      setAvailable(totalAvailable)
   }, [expenses])


   const formatQuantity = (cantidad) => {
      return Number(cantidad).toLocaleString('es-PE', {
         style: 'currency',
         currency: 'PEN'
      })
   }

   return (
      <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
         <div>
            <p>Gráfica aquí</p>
         </div>
         <div className='contenido-presupuesto'>
            <p>
               <span>Presupuesto: </span>{formatQuantity(budget)}
            </p>
            <p>
               <span>Disponible: </span>{formatQuantity(available)}
            </p>
            <p>
               <span>Gastado: </span>{formatQuantity(spent)}
            </p>
         </div>
      </div>
   )
}

export default BudgetControl