import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListExpenses from './components/LIstExpenses';
import Modal from './components/Modal';
import { generarId } from './helpers';

import iconNewExpense from './img/nuevo-gasto.svg';


function App() {

  const [expenses, setExpenses] = useState([]);

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [expenseEdit, setExpenseEdit] = useState({});

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 300);
    }
  }, [expenseEdit]);

  const handleNewExpense = () => {
    setModal(true);
    setExpenseEdit({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  }

  const saveExpense = expense => {
    if (expense.id) {
      // update
      const expensesUpdated = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState);
      setExpenses(expensesUpdated);
      setExpenseEdit({});
    } else {
      // new expense
      expense.id = generarId();
      expense.fecha = Date.now();
      setExpenses([...expenses, expense]);
    }
  }

  const deleteExpense = id => {
    const expensesUpdated = expenses.filter(expense => expense.id !== id)
    setExpenses(expensesUpdated);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        budget={budget}
        expenses={expenses}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {
        isValidBudget &&
        <>
          <main>
            <ListExpenses
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={iconNewExpense} alt="new expense" onClick={handleNewExpense} />
          </div>
        </>
      }

      {
        modal && <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          saveExpense={saveExpense}
          expenseEdit={expenseEdit}
          setExpenseEdit={setExpenseEdit}
        />
      }
    </div>
  )
}

export default App
