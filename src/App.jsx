import { useEffect, useState } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import ListExpenses from './components/ListExpenses';
import Modal from './components/Modal';
import { generarId } from './helpers';

import iconNewExpense from './img/nuevo-gasto.svg';

function App() {

  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  );

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [expenseEdit, setExpenseEdit] = useState({});

  const [filter, setFilter] = useState('');
  const [expensesFiltered, setExpenseFiltered] = useState([]);

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 300);
    }
  }, [expenseEdit]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    const budgetLS = localStorage.getItem('budget') ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    if (filter) {
      // Filtrar gastos por categoria
      const expensesFiltered = expenses.filter(expense => expense.categoria === filter);
      setExpenseFiltered(expensesFiltered);
    }
  }, [filter]);

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
        setExpenses={setExpenses}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {
        isValidBudget &&
        <>
          <main>
            <Filters
              filter={filter}
              setFilter={setFilter}
            />
            <ListExpenses
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFiltered={expensesFiltered}
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
