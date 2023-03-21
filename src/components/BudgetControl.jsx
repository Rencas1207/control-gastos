import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({
   budget,
   expenses,
   setBudget,
   setExpenses,
   setIsValidBudget
}) => {

   const [percentage, setPercentage] = useState(10);
   const [available, setAvailable] = useState(0);
   const [spent, setSpent] = useState(0);

   useEffect(() => {
      const totalSpent = expenses.reduce((total, expense) => expense.cantidad + total, 0);
      const totalAvailable = budget - totalSpent;

      // Calcular el porcentaje gastado
      const newPercetage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

      setSpent(totalSpent);
      setAvailable(totalAvailable)
      setTimeout(() => {
         setPercentage(newPercetage);
      }, 1000);
   }, [expenses])


   const formatQuantity = (cantidad) => {
      return Number(cantidad).toLocaleString('es-PE', {
         style: 'currency',
         currency: 'PEN'
      })
   }

   const handleResetApp = () => {
      const result = confirm('¿Deseas reiniciar presupuesto y gastos?');
      if (result) {
         setExpenses([]);
         setBudget(0);
         setIsValidBudget(false);
      }
   }

   return (
      <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
         <div>
            <CircularProgressbar
               styles={buildStyles({
                  pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                  trailColor: '#F5F5F5',
                  textColor: percentage > 100 ? 'red' : '#3B82F6'
               })}
               value={percentage}
               text={`${percentage}% Gastado`}
            />
         </div>
         <div className='contenido-presupuesto'>
            <button
               className="reset-app"
               type="button"
               onClick={handleResetApp}
            >
               Resetear App
            </button>
            <p>
               <span>Presupuesto: </span>{formatQuantity(budget)}
            </p>
            <p className={`${available < 0 ? 'negativo' : ''}`}>
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