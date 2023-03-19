import { useState } from 'react'
import Header from './components/Header'
import ListExpenses from './components/LIstExpenses';
import Modal from './components/Modal';
import { generarId } from './helpers';

import iconNewExpense from './img/nuevo-gasto.svg';


function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  }

  const saveExpense = expense => {
    expense.id = generarId();
    expense.fecha = Date.now();
    setExpenses([...expenses, expense]);
  }

  return (
    <div className={modal && 'fijar'}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {
        isValidBudget &&
        <>
          <main>
            <ListExpenses expenses={expenses} />
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
        />
      }
    </div>
  )
}

export default App
