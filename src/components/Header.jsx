import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses, setExpenses }) => {
   return (
      <header>
         <h1>Planificador de gastos</h1>
         {isValidBudget ?
            <BudgetControl
               budget={budget}
               expenses={expenses}
               setExpenses={setExpenses}
               setBudget={setBudget}
               setIsValidBudget={setIsValidBudget}
            />
            : <NewBudget
               budget={budget}
               setBudget={setBudget}
               setIsValidBudget={setIsValidBudget}
            />
         }

      </header>
   )
}

export default Header