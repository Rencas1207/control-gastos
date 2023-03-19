const BudgetControl = ({ budget }) => {
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
               <span>Disponible: </span>{formatQuantity(budget)}
            </p>
            <p>
               <span>Gastado: </span>{formatQuantity(0)}
            </p>
         </div>
      </div>
   )
}

export default BudgetControl